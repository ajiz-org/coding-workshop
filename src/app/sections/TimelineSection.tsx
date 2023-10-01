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
      {TIMELINE_DATA.map(({ title, modules }, index) => (
        <div key={index} className="col-span-10 sm:col-span-5 mb-5">
          <Card
            title={`Day ${index + 1}: October ${index + 14}`}
            description={title}
            Icon={CalendarDaysIcon}
          >
            <EventTimeline {...{ modules }} />
          </Card>
        </div>
      ))}
    </section>
  );
};
