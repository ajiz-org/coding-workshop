import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Player, PlayerCard } from "./PlayCard";

export default ({ players }: { players: Player[] }) => (
  <Carousel
    showThumbs={false}
    showStatus={false}
    preventMovementUntilSwipeScrollTolerance
    swipeScrollTolerance={50}
  >
    {players.map((player, i) => (
      <div
        key={i}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: 444,
          alignItems: "center",
        }}
      >
        <PlayerCard {...player} notilt />
      </div>
    ))}
  </Carousel>
);
