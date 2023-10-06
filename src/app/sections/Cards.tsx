import { Carousel } from "react-responsive-carousel";
import { Player, PlayerCard } from "./PlayCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const players: Player[] = [
  {
    img: "werewolf",
    name: "Werewolves",
    role: "Shape-shifting predators deceiving and eliminating villagers",
    weapons: [
      "Symetric Encryption (AES)",
      "Message Authentication Code",
      "Ephemeral keys",
    ],
    b64: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wAARCAAkAB0DASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABQYAAQIEBwP/xAAnEAACAQMEAgICAwEAAAAAAAABAgMEBREAEiExBmEiQRNRBxRxJP/EABcBAQEBAQAAAAAAAAAAAAAAAAQAAwL/xAAkEQACAQMDAwUAAAAAAAAAAAABAgMAESESMUETIvAyYZGh8f/aAAwDAQACEQMRAD8ASLURJcqGoaYVG0Mm7AGAVYD0exrwm8QO2IJMrVEylhDjnI7XPWcYPvW35DcYK7yO5VdtDrQzTs0TBCnxPr65+tVb6atko4a/Y08FO24omXKhcZY45HA79d6mkdU7OKRHDG0gMhwfrz4obL441vrGjqVSXYvzCNkAkZxn9jr/AHWFNb/zIAIy+xQpweuTplWWKvqZ62CB2hhcMYpV5bPfH65zrqKXQJRQTWy2UcFHMMxNPKITIOOQqqcDkd8+tUk7Mo6a3PPFjisViEbHW2OPcZrk1jdpKKSkCtuMLxBsrjOMDAPvOedCrTPPaLtJFWJPHAYQtRFuKAKeAxPeASOtE7R4jd79VYoKqijjcblSeoG4c84AydO8H8d1tsoUFbcLPXVKMzmOamYlifovyWHogDOjSEamN8HzelRgBACLm9KNBa6txLWUFVNV0zk7CQoWUqeBx2AfXeOtEvP/ACqH+jZKazyyE08DLPGyFHib4jaynkH462DQS2/yGnlvluaZQAyRW6IlJCD8Q2MDj7z9AaE3q4V1be6makqKOZN238iwqynGfipIyQOef91zBK2qwzcb1SxqwucWO37SZEn/AGvThioU8OOG6z3rBPKLzbZ3jp7lUhVbjMh1NTT5FBUXFDRmBwaOp5TerlTihqblO0M6jfggMR9jOM41QpYFAAiUAccZ1NTWAVU9ItSCS2+a/9k=",
  },
  {
    img: "clairvoyant",
    name: "Clairvoyant",
    role: "Mystic seer revealing hidden identities",
    weapons: ["Assymetric Encryption", "Hash based Signature", "MP 1-n OT"],
    b64: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wAARCAAkAB0DASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABQYABwECAwT/xAAuEAABAwMCBQIEBwAAAAAAAAABAgMEAAUREiEGEzFBcWGRBxQVIjIzUWKBocH/xAAYAQEAAwEAAAAAAAAAAAAAAAAEAQIFA//EACERAAICAQQCAwAAAAAAAAAAAAECAAMREhMhMQRRceHx/9oADAMBAAIRAxEAPwCujYJtrt6JamFqaUVZC0kAZxg1wlwY8bQ03z1qAQ4eY3oyCArYeSfIwasq98bM3zhZu2wrepUuVllKU5USdtgO5qu+SSAlWvnpXpIPQAbDc75oNVtj5LcRrIi8CeqFwxGcZNyuyyllWzTCc/fgDqfBBwKFOwmWX1/IoDrRPR4HKfTbFOybczN4TlyXZLbMyKMqaV+YB2AST+EjfI3yMUoIZQ4teFEAKwMnB/mtLer2sAdH4metFm7rLdjrsQ8i2uKLSWFKS6Spxko1ZcJPRIAznr7VqhqJAd5stZcdA1Fnvn9x81YLvxFtT1ukMPWhUZ5Y0LSlSW8dt9sjxg0Mg3pd7IgQrVASFnK5T7QWsjp1V2AodLOvLgERVyK+QpIMUV3RudFkSHwlclzH3KPbbb+qzJjfW2GJMZ0JOnSpDaAgJA6YCR565NPd04QsseGoyI2peMYZBbCj+oSk/wC0pORZTTpasyXUsoA1ZSSdXt4rpRcASQmc+/yRdTuBRuacD19wLCv0xp5ku8qWEkBKZLYcx771ZTNx5XCT1yaiRW329gEt4T7ZqVKI6jVjEVklcwL9XnBa5JkrW46BrCt0kdhjoAPSla78dcQSpRCLk/FbaUUJbjK5afJxuT6mpUqfHJJOZfyFAAwJ/9k=",
  },
  {
    img: "villager",
    name: "Villagers",
    role: "Innocent residents trying to survive",
    weapons: ["Homeomorphic Signing", "Commitment Scheme", "Certification"],
    b64: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBggGBQkIBwgKCQkKDRYODQwMDRoTFBAWHxwhIB8cHh4jJzIqIyUvJR4eKzssLzM1ODg4ISo9QTw2QTI3ODX/2wBDAQkKCg0LDRkODhk1JB4kNTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTX/wAARCAAkAB0DASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAABQYAAgME/8QAKRAAAgIBAwMEAgIDAAAAAAAAAQIDEQQABSESMVETIkFxBhQHgRVh0f/EABgBAAMBAQAAAAAAAAAAAAAAAAACBAMF/8QAJREAAQMDAgYDAAAAAAAAAAAAAQACEQMSIQRRIjFCkbHwFEFx/9oADAMBAAIRAxEAPwBX/Dc/Hxt9jSfJ/wAZJVCR1HTXiz2B86Yv5F3ZoM2Pb/f6bRiQGLnrsWLuuPrSYMudMwSS4zZIU2Ot+QfI+LHnR1sqPd8aSYkvMqtK5yTTWPj7+++ubaCb/tJUohtQNIJG6WMgM6MYscKlUQ7dTH7P/K0U2L8Sl3WOUwyJD6ZF9Z6bu+3nXRgx52WP08DFjklALeorWzKOSQCB2H96GZWbuOHKqRObeNZCIweOoWLHwa1qwOeww6D7zVhtpkANkJiKnF3ZVnxoREtqy9ApySTbXfPPHHAA1fcNnXCi9LLmeMqxjZYjfuHHPweaI1n+vgbpiYcW04znOFRzqi9Vqfk/HGiu+4B29Gx9yyMySaeP1CY0SV2r5K0TX+zxpK+ndpHhgdJMZHuEaet8tl7mxE4PvJLe373lYEKYKt6BinOQky2JF6l6T27gjXNnb3NBKBKvp2KXrskgeaPiu+s3ztsWR5Mcs0tipnIJIrx/ehWfkNnOrRke27N99NF9QkNjf9WoaG0uJ07Ipg73nbZCn6WQ0Ab3dKni78a2j/J9wxxI6Opkd+uSRrLOfLG+dTU0P4hnKGYOEILKhkdI0XraioHtom6r71QOzKPcRRPbU1NU9Xbwpunv5X//2Q==",
  },
];

export default () => {
  return (
    <>
      <div
        className="lg:hidden flex"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
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
      </div>
      <div
        className="hidden lg:flex"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {players.map((player, i) => (
          <PlayerCard {...player} ang={(i - 1) * 20} key={i} />
        ))}
      </div>
    </>
  );
};
