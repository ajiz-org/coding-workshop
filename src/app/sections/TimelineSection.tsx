import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { TIMELINE_DATA } from "app/Typography";
import EventTimeline from "components/organisms/EventTimeline/EventTimeline";
import Card from "components/organisms/card";

export const TimelineSection = () => {
  return (
    <section
      id="timeline"
      className="px-4 max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4"
    >
      {TIMELINE_DATA.map((ss, index) => (
        <div key={index} className="col-span-10 sm:col-span-5 mb-5">
          <Card
            title={`Session ${1 + index}: October 28`}
            description=""
            Icon={CalendarDaysIcon}
          >
            {ss.map(({ title, modules }, index) => (
              <>
                {title && (
                  <h3 className="text-2xl font-bold mb-6 text-[#F61B1F]">
                    {title}
                  </h3>
                )}
                <EventTimeline key={index} {...{ modules }} />
              </>
            ))}
          </Card>
        </div>
      ))}
    </section>
  );
};
