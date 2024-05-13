import { Link, Route, Routes } from "react-router-dom";
import App from "./app";
import "../index.css";
import { type Product, all, gammes, products } from "./content";
import { PlayerCard } from "./sections/PlayCard";
// import Chat from "./chat";

const Gamme = ({ id, pic }: { id: string; pic: string }) => {
  return (
    <>
      <img src={`/pictures/${pic}`} style={{ width: "100%" }} />

      <div
        style={{
          display: "grid",
          gap: 60,
          padding: 40,
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        }}
      >
        {products
          .filter((p) => p.gamme == id)
          .map((x, i) => (
            <Link to={`/view/${x.id}`} key={i}>
              <PlayerCard
                img={`/pictures/${x.pic}`}
                name={"Produit " + x.name}
                price={x.price}
                gamme={x.gamme && gammes[x.gamme].name}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

const Product = ({ product }: { product: Product }) => {
  return (
    <div style={{ color: "black" }}>
      <img
        src={`/pictures/${product.pic}`}
        style={{
          width: "100%",
          maxWidth: 500,
          float: "inline-start",
          margin: 20,
        }}
      />
      <h1 style={{ margin: 20 }}>
        <strong>{product.name}</strong>
      </h1>
      <p>{product.desc}</p>
      <p>
        <strong>Prix: </strong>
        {product.price} DT
      </p>
      <p>
        <strong>Gamme: </strong>
        <Link to={`/view/${product.gamme}`}>{gammes[product.gamme].name}</Link>
      </p>
    </div>
  );
};

export default function () {
  return (
    <main>
      <Link
        to={"/"}
        style={{
          background: "#e0d2c5",
          display: "flex",
          alignItems: "center",
          fontSize: "3em",
          fontFamily: '"Bellefair", serif',
          color: "#929292",
        }}
      >
        <img width={"200px"} src="/pictures/logo.jpg"></img>
        EPO-BEAUTY&COSMETIC
      </Link>
      <Routes>
        <Route path="/" element={<App />}></Route>
        {all.map((x) => (
          <Route
            key={x.id}
            path={`/view/${x.id}`}
            element={
              x.gamme ? <Product product={x} /> : <Gamme {...x} id={x.id} />
            }
          ></Route>
        ))}
      </Routes>
    </main>
  );
}
