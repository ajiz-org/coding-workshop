import Tilt from "./Tilt.async";

export type Player = {
  img: string;
  name: string;
  price: number;
  gamme?: string;
  products?: { n?: number; name: string }[];
};

const imgSt: React.CSSProperties = {
  position: "absolute",
  objectFit: "cover",
  height: 370,
  width: 370,
};

const CardContent = ({ img, name, price, gamme, products }: Player) => (
  <>
    <img src={img} style={imgSt} />
    <div
      className="my-div"
      style={{
        position: "absolute",
        objectFit: "cover",
        height: 370,
        width: 370,
        background: "#aaa6",
        color: "#fff",
        padding: 30,
        textAlign: "left",
        display: "flex",
      }}
    >
      <div className="flex center flex-col justify-between">
        <h2 style={{ fontSize: "2em", textAlign: "center" }}>{name}</h2>
        {gamme && (
          <p>
            <strong>Gamme:</strong> {gamme}
          </p>
        )}
        <p>
          <strong>Prix:</strong> {price} DT
        </p>
        {products && (
          <p style={{ marginTop: 20 }}>
            <strong>Articles :</strong>
          </p>
        )}
        {products && (
          <ul>
            {products.map((w, i) => (
              <li key={i}>
                {w.n ?? 1} {w.name}
              </li>
            ))}
          </ul>
        )}
        <p
          style={{
            marginTop: 20,
            background: "#872121",
            padding: 7,
            textAlign: "center",
            borderRadius: 20,
          }}
        >
          Acheter maintenant
        </p>
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
