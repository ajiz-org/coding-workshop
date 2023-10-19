import { useCountdown } from "./hooks/useCountdown";
import { ContactSection } from "./sections/ContactSection";
import { DetailsSection } from "./sections/DetailsSection";
import { HeadingSection } from "./sections/HeadingSection";
import { TimelineSection } from "./sections/TimelineSection";
import { RegisterSection } from "./sections/RegisterSection";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { pathname } from "./routes";
import "../index.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const finalDate = new Date("2023-10-21T13:30:00");
  const countdown = useCountdown(finalDate);
  const [registerExpanded, setRegisterExpanded] = useState(true);

  useEffect(() => {
    if (location.pathname !== pathname) {
      navigate(pathname);
    }
  }, [location.pathname, navigate]);
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
