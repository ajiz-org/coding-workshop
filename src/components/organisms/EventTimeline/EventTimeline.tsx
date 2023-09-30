import { Timeline } from "flowbite-react";
import { TimelineData } from "../../../app/Typography";

export default function EventTimeline({
  modules,
}: {
  modules: TimelineData["modules"];
}) {
  return (
    <Timeline className="w-full">
      {modules.map(({ title, time, subModuleTitles }, key) => (
        <Timeline.Item {...{ key }}>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time className="text-red-500">{time}</Timeline.Time>
            <Timeline.Title className="text-[#F1FAEE]">{title}</Timeline.Title>
            <Timeline.Body>
              {subModuleTitles?.map((subModuleTitle, key) => (
                <h3 {...{ key }}>{subModuleTitle}</h3>
              ))}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
