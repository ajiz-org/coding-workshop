import { APP_TEXT } from "app/Typography";
import Button from "components/atoms/button";
import { SectionNavigation } from "components/organisms/SectionNavigation/SectionNavigation";
import Tilt from "react-parallax-tilt";

import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { useCallback } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface HeroSectionProps {
  countdown: CountDown;
  registerExpanded: boolean;
  setRegisterExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

type Player = {
  img: string;
  name: string;
  role: string;
  weapons: string[];
};

const players: Player[] = [
  {
    img: "/werewolf.png",
    name: "Werewolves",
    role: "Shape-shifting predators deceiving and eliminating villagers",
    weapons: [
      "Symetric Encryption (AES)",
      "Message Authentication Code",
      "Ephemeral keys",
    ],
  },
  {
    img: "/clairvoyant.png",
    name: "Clairvoyant",
    role: "Mystic seer revealing hidden identities",
    weapons: ["Assymetric Encryption", "Hash based Signature", "MP 1-n OT"],
  },
  {
    img: "/villager.png",
    name: "Villagers",
    role: "Innocent residents trying to survive",
    weapons: ["Homeomorphic Signing", "Commitment Scheme", "Certification"],
  },
];

const PlayerCard = ({ img, name, role, weapons }: Player) => (
  <Tilt
    glareEnable
    glareMaxOpacity={0.45}
    scale={1.1}
    style={{
      border: "solid 1px rgba(255, 255, 255, 0.4)",
      borderWidth: "1px  0 0 1px",
      borderRadius: 10,
      boxShadow: "rgba(0, 0, 0, 0.2) 6px 6px 8px",
      display: "flex",
      overflow: "hidden",
      backdropFilter: "blur(10px)",
      height: "50vh",
      width: "40vh",
    }}
    className="my-hover"
  >
    <img
      src={img}
      style={{
        position: "absolute",
        objectFit: "cover",
        height: "50vh",
        width: "40vh",
      }}
    />
    <div
      className="my-div"
      style={{
        position: "absolute",
        objectFit: "cover",
        height: "50vh",
        width: "40vh",
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
  </Tilt>
);

export const HeadingSection = ({
  countdown,
  registerExpanded,
  setRegisterExpanded,
}: HeroSectionProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  return (
    <header
      id="home"
      className="z-10 relative px-4 max-w-screen-lg w-auto xl:max-w-screen-xl mx-auto md:pt-9"
    >
      <SectionNavigation
        className="fixed"
        setRegisterExpanded={setRegisterExpanded}
      />
      <h1 className="text-5xl md:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight py-4 text-[#F61B1F]">
        {APP_TEXT.title.toUpperCase()}
      </h1>
      <div
        className="bg-white bg-opacity-5 rounded-md shadow p-4 relative overflow-hidden h-full md:mt-8"
        style={{
          backdropFilter: "blur(2px)",
        }}
      >
        <div className="relative">
          <img
            src="/numbers.png"
            style={{
              filter: "contrast(0) opacity(0.1)",
              position: "absolute",
              right: "-20px",
              bottom: "-20px",
              width: "100%",
            }}
          />
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
            <Carousel showThumbs={false} showStatus={false}>
              {players.map((player, i) => (
                <div
                  key={i}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    height: "60vh",
                    alignItems: "center",
                  }}
                >
                  <PlayerCard {...player} />
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
              <PlayerCard {...player} key={i} />
            ))}
          </div>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              fullScreen: false,
              style: { height: "55vh" },
              fpsLimit: 120,
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.1,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 600,
                  },
                  value: 100,
                },
                opacity: {
                  value: 0.2,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 3 },
                },
              },
              detectRetina: true,
            }}
          />{" "}
        </div>
      </div>
      <div className="flex py-4">
        {Object.keys(countdown).map((key) => (
          <h3
            key={key}
            className="md:text-2xl  lg:text:4xl sm:text-4xl text-2xl leading-none font-bold tracking-tight text-[#F1FAEE]"
          >
            <span className="countdown font-mono sm:text-8xl text-3xl  w-full ">
              <span
                style={
                  {
                    "--value": countdown[key as keyof CountDown],
                  } as React.CSSProperties
                }
              ></span>
            </span>
            {key}
          </h3>
        ))}
      </div>
      {!registerExpanded && (
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto py-4">
          <div className="sm:flex items-center">
            <Button onClick={() => setRegisterExpanded(true)}>
              {APP_TEXT.register}
            </Button>
          </div>
        </div>
      )}
      <div className="absolute right-2 md:right-5 lg:top-0 opacity-50 md:opacity-90"></div>
      <div className="fixed pointer-events-none lg:absolute lg:top-0 left-5 lg:left-auto -bottom-14 lg:right-5 opacity-10 lg:opacity-90">
        <img src="/ajiz-logo.png" className="w-56 h-56" />
      </div>
    </header>
  );
};
