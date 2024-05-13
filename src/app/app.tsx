import { Link } from "react-router-dom";
import { all, gammes, products } from "./content";
import { PlayerCard } from "./sections/PlayCard";
import { RegisterSection } from "./sections/RegisterSection";



function App() {
  return (
    <main>
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
        {all.map((x, i) => (
          <Link to={`/view/${x.id}`} key={i}>
            <PlayerCard
              img={`/pictures/${x.pic}`}
              
              name={(x.gamme ? "Produit " : "Gamme ") + x.name}
              price={x.price}
              gamme={x.gamme && gammes[x.gamme].name}
              products={
                x.gamme ? undefined : products.filter((p) => p.gamme === x.id)
              }
            />
          </Link>
        ))}
      </div>
      {/* <RegisterSection />{" "} */}
    </main>
  );
}

export default App;
