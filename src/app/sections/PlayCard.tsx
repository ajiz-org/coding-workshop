import Tilt from "./Tilt.async";

export type Player = {
  img: string;
  name: string;
  role: string;
  weapons: string[];
  b64?: string;
};

const imgSt: React.CSSProperties = {
  position: "absolute",
  objectFit: "cover",
  height: 370,
  width: 296,
};

const CardContent = ({ img, name, role, weapons, b64 }: Player) => (
  <>
    <img
      src={`data:image/jpeg;base64,${b64}`}
      style={{ ...imgSt, filter: "blur(20px)", overflow: "hidden" }}
    />
    <img src={`/${img}.jpg`} style={imgSt} />
    <img src={`/${img}.png`} style={imgSt} />
    <div
      className="my-div"
      style={{
        position: "absolute",
        objectFit: "cover",
        height: 370,
        width: 296,
        background: "#000b",
        color: "#fff",
        padding: 30,
        textAlign: "left",
        display: "flex",
      }}
    >
      <div className="flex center flex-col justify-between">
        <h2 style={{ fontSize: "2em", textAlign: "center" }}>{name}</h2>
        <p>
          <strong>Role:</strong> {role}
        </p>
        <p style={{ marginTop: 20 }}>
          <strong>Weapons:</strong>
        </p>
        <ul>
          {weapons.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

export const PlayerCard = ({
  ang,
  notilt,
  ...player
}: Player & { ang?: number; notilt?: boolean }) => (
  <Tilt {...{ ang, notilt }}>
    <CardContent {...player} />
  </Tilt>
);
