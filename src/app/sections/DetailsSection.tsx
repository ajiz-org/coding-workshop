import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Card from "components/organisms/card";

export const DetailsSection = () => {
  return (
    <section
      id="details"
      className="px-4 max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4"
    >
      <div className="col-span-10 mb-5">
        <Card
          title={"Cryptographic Foundations Workshop"}
          description={""}
          Icon={QuestionMarkCircleIcon}
        >
          <div className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium ">
            <p className="mb-10 sm:mb-11 mt-2">
              This{" "}
              <code className="font-mono text-[#F61B1F] font-bold">
                Workshop
              </code>{" "}
              is a part of a series curated by our{" "}
              <code className="font-mono text-[#F61B1F] font-bold">
                developers community
              </code>
              . Our aim is to foster knowledge exchange and collaboration among
              its members.
            </p>
            <p className="mb-10 sm:mb-11 mt-2">
              Dive into the world of cryptography from the ground up, using an
              engaging{" "}
              <code className="font-mono text-[#F61B1F] font-bold">
                game-centric approach
              </code>
              .
            </p>
            <p className="mb-10 sm:mb-11 mt-2">
              Participants will embark on a journey to construct the{" "}
              <code className="font-mono text-[#F61B1F] font-bold">
                first-ever decentralized werewolves game
              </code>
              , ensuring a comprehensive exploration of fundamental{" "}
              <code className="font-mono text-[#F61B1F] font-bold">
                cryptographic
              </code>{" "}
              concepts.
            </p>
            <p className="mb-10 sm:mb-11 mt-2">
              <code className="font-mono text-[#F61B1F] font-bold">
                Join us
              </code>{" "}
              in this unique blend of{" "}
              <code className="font-mono text-[#F61B1F] font-bold">
                education and entertainment
              </code>
              , and unlock the mysteries of cryptography!
            </p>
            <p className="mb-10 sm:mb-11 mt-2">
              Participation Fee:{" "}
              <code className="font-mono text-[#F61B1F] font-bold">10DT</code>.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
