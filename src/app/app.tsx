import { useCountdown } from "./hooks/useCountdown";
import { ContactSection } from "./sections/ContactSection";
import { DetailsSection } from "./sections/DetailsSection";
import { HeadingSection } from "./sections/HeadingSection";
import { TimelineSection } from "./sections/TimelineSection";
import { RegisterSection } from "./sections/RegisterSection";
import { useState } from "react";

function App() {
  const finalDate = new Date("2023-10-07T13:30:00");
  const countdown = useCountdown(finalDate);
  const [registerExpanded, setRegisterExpanded] = useState(false);
  return (
    <main>
      <HeadingSection
        {...{ countdown, registerExpanded, setRegisterExpanded }}
      />
      {registerExpanded && <RegisterSection />}
      <DetailsSection />
      <TimelineSection />
      <ContactSection />
    </main>
  );
}

export default App;
