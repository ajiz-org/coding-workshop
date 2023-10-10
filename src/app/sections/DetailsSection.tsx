import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Card from "components/organisms/card";

export const DetailsSection = () => {
  const content: string[][] = [
    [
      "Embark on a journey where we, ",
      "developers",
      ", ",
      "enthusiasts",
      ", and ",
      "curious minds",
      ", come together to form a vibrant, new community. ",
    ],
    [
      "Our first workshop invites you to explore and co-create a decentralized werewolves game, blending ",
      "learning",
      " and ",
      "entertainment",
      " in a unique, collaborative setting. ",
    ],
    [
      "This isn’t just an event; it’s the ",
      "starting point",
      " of a series where we'll dive into various ",
      "technological",
      " and ",
      "developmental themes",
      ", all through a hands-on, enjoyable approach. ",
    ],
    [
      "Let’s navigate, learn, and build together, shaping a community where every member is a vital piece of the puzzle!",
    ],
  ];
  return (
    <section
      id="details"
      className="px-4 max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4"
    >
      <div className="col-span-10 mb-5">
        <Card
          title={"Game of Secrets: A Start to a Series of Journeys"}
          description={""}
          Icon={QuestionMarkCircleIcon}
        >
          <div className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium ">
            {content.map((c, i) => (
              <p className="mb-10 sm:mb-11 mt-2" key={i}>
                {c.map((c, i) =>
                  i & 1 ? (
                    <code
                      className="font-mono text-[#F61B1F] font-bold"
                      key={i}
                    >
                      {c}
                    </code>
                  ) : (
                    <span key={i}>{c}</span>
                  )
                )}
              </p>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
