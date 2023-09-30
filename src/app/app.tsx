import { useCountdown } from "./hooks/useCountdown";
import { ContactSection } from "./sections/ContactSection";
import { DetailsSection } from "./sections/DetailsSection";
import { HeadingSection } from "./sections/HeadingSection";
import { TimelineSection } from "./sections/TimelineSection";

function App() {
  const finalDate = new Date("2023-10-07T13:30:00");
  const countdown = useCountdown(finalDate);
  return (
    <main > 
      <HeadingSection {...{countdown}} />
      <DetailsSection />
      <TimelineSection />
      <ContactSection />
    </main>
  );
}

export default App;
