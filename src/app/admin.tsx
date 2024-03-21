import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useEffect, useState } from "react";

const request = async (password: string): Promise<{ documents: Person[] }> => {
  const res = await fetch(
    "https://realm.mongodb.com/api/client/v2.0/app/data-negsc/auth/providers/local-userpass/login",
    {
      method: "POST",
      body: JSON.stringify({
        username: "coding@ajiz.org",
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if(!res.ok) throw new Error('')
  const json = await res.json(),
    token: string = json.access_token;
  const users = await fetch(
    "https://eu-central-1.aws.data.mongodb-api.com/app/data-negsc/endpoint/data/v1/action/find",
    {
      method: "POST",
      body: JSON.stringify({
        collection: "robots-users",
        database: "ajiz",
        dataSource: "Cluster0",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Access-Control-Request-Headers": "*",
      },
    }
  );
  return await users.json();
};

type Member = {
  name: string;
  phone: string;
  Email: string;
  "birth-date": string;
};
type Person = {
  "team-name": string;
  "robot-name": string;
  origin: string;
  members: Member[];
  payment: string;
};

const columns: MRT_ColumnDef<Person & Member>[] = [
  {
    accessorKey: "team-name",
    header: "Team Name",
    size: 150,
  },
  {
    accessorKey: "robot-name",
    header: "Robot Name",
    size: 150,
  },
  {
    accessorKey: "name",
    header: "Member Name",
    size: 200,
  },
  {
    accessorKey: "Email",
    header: "Email",
    size: 150,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    size: 150,
  },
  {
    accessorKey: "birth-date",
    header: "Birth Date",
    size: 150,
  },
];

function App() {
  const [data, setData] = useState<(Person & Member)[]>();
  const [password, setPassword] = useState<string>();
  useEffect(() => {
    if (!password) return;
    request(password)
      .then(({ documents }) =>
        setData(
          documents.flatMap((d) => d.members.flatMap((x) => ({ ...x, ...d })))
        )
      )
      .catch(() => {
        setPassword("");
      });
  }, [password]);
  const table = useMaterialReactTable({
    columns,
    data: data ?? [],
  });

  return data ? (
    <MaterialReactTable table={table} />
  ) : (
    <form
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        setPassword((e.target as object as [HTMLInputElement])[0].value);
      }}
    >
      <h1
        style={{
          fontSize: "1.4rem",
          fontFamily: "cursive",
        }}
      >
        Password
      </h1>
      <input disabled={!!password} type="password" name="pwd" />
      <span style={{ color: "red" }}>
        {password === "" && "Wrong Password"}
      </span>
    </form>
  );
}

export default App;
