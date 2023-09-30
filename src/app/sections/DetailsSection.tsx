import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid"
import Card from "components/organisms/card"

export const DetailsSection = () => {
  return (
    <section id="details" className="px-4 max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
        <div className="col-span-10 mb-5">
          <Card
            title={"Description"}
            description={""}
            Icon={QuestionMarkCircleIcon}
            href="/"
          >
            <p className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium mb-10 sm:mb-11 mt-2">
              Embark on a{" "}
              <code className="font-mono text-[#F61B1F] font-bold">
                Cryptographic
              </code>{" "}
              Journey: Where{" "}
              <code className="font-mono text-[#F61B1F] font-bold">
                Secrecy
              </code>{" "}
              Meets Strategy and Trust is Forged in{" "}
              <code className="font-mono text-[#F61B1F] font-bold">Code</code>.
              Unravel the Enigma of{" "}
              <code className="font-mono text-[#F61B1F] font-bold">
                CryptoCraft
              </code>{" "}
              - Where Every Move is a Cipher and Every Decision, a{" "}
              <code className="font-mono text-[#F61B1F] font-bold">Key</code> to
              Victory."
            </p>
          </Card>
        </div>
      </section>
  )
}
