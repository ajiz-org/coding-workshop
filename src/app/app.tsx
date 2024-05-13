import { gammes, products } from "./content";
import { PlayerCard } from "./sections/PlayCard";
import { RegisterSection } from "./sections/RegisterSection";

function App() {
  return (
    <main>
      <div
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
      </div>
      <video style={{ padding: 0 }} muted autoPlay width={"100%"} loop>
        <source src="/banner.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          display: "grid",
          gap: 60,
          padding: 40,
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        }}
      >
        {[
          ...Object.entries(gammes).map(([k, v]) => ({ ...v, k })),
          ...products,
        ].map((x, i) => (
          <PlayerCard
            img={`/pictures/${x.pic}`}
            key={i}
            name={(x.gamme ? "Produit " : "Gamme ") + x.name}
            price={x.price}
            gamme={x.gamme && gammes[x.gamme].name}
            products={
              x.gamme ? undefined : products.filter((p) => p.gamme === x.k)
            }
          />
        ))}
      </div>
      {/* <RegisterSection />{" "} */}
    </main>
  );
}

export default App;
