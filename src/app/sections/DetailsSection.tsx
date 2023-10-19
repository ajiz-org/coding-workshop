import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Card from "components/organisms/card";

export const DetailsSection = () => {
  const content: string[][] = [
    [
      'Dive into the realm of "',
      "Asynchronous Processing with RabbitMQ",
      '", where we uncover the magic of ',
      "message queues",
      " together.",
    ],
    [
      "Through ",
      "hands-on projects",
      ", delve into RabbitMQ's ",
      "core components",
      ", engaging in a practical exploration of asynchronous communication.",
    ],
    [
      "This session propels our communal journey further, blending ",
      "tech discovery",
      " with collaborative learning, as we shape a ",
      "lively and engaging",
      " workshop series together.",
    ],
    [
      "Together, we'll unlock new dimensions of asynchronous processing, forging a community enriched by every shared insight and creation",
    ],
  ];
  return (
    <section
      id="details"
      className="px-4 max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4"
    >
      <div className="col-span-10 mb-5">
        <Card
          title={"Asynchronous Processing with RabbitMQ"}
          description={""}
          Icon={QuestionMarkCircleIcon}
        >
          <div className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium ">
            {content.map((c, i) => (
              <p className="mb-10 sm:mb-11 mt-2" key={i}>
                {c.map((c, i) =>
                  i & 1 ? (
                    <code className="font-bold text-red-500 underline" key={i}>
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
