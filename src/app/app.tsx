import { CalendarDaysIcon, PaperAirplaneIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Button from "components/atoms/button";
import EventTimeline from "components/organisms/EventTimeline/EventTimeline";
import FooterWithSocialMediaIcons from "components/organisms/Footer/Footer";
import { SectionNavigation } from "components/organisms/SectionNavigation/SectionNavigation";
import Card from "components/organisms/card";
import { useEffect, useState } from "react";
import { APP_TEXT, TIMELINE_DATA } from "./Typography";
import { CountDown, HeadingSection } from "./sections/HeadingSection";

function App() {
  const finalDate = new Date("2023-10-07T13:30:00");

  // Calculate the initial time remaining
  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeRemaining = finalDate - now;

    if (timeRemaining <= 0) {
      // Countdown has reached the final date, stop the timer
      clearInterval(timer);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  // Declare a state variable for the countdown time
  const [countdown, setCountdown] = useState<CountDown>(calculateTimeRemaining());

  // Use useEffect to set up a timer to update the countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000); // Update the countdown every 1000 milliseconds (1 second)

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <main > 
      <HeadingSection {...{countdown}} />
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
      <section id="timeline" className="px-4 max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
        {TIMELINE_DATA.map(({ title, modules }, index) => (
          <div key={index} className="col-span-10 sm:col-span-5">
            <Card
              title={`Day ${index + 1}`}
              description={title}
              Icon={CalendarDaysIcon}
              href="/"
            >
              <EventTimeline {...{ modules }} />
            </Card>
          </div>
        ))}
      </section>
      <section id="contact" className="px-4 max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
        <div className="col-span-10 mb-5">
          <Card
            title={"Contact Us"}
            description={""}
            Icon={PaperAirplaneIcon}
            href="/"
          >
            <FooterWithSocialMediaIcons />
          </Card>
        </div>
      </section>
    </main>
  );
}

export default App;
