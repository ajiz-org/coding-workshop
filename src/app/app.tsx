import { useCountdown } from "./hooks/useCountdown";
import { ContactSection } from "./sections/ContactSection";
import { DetailsSection } from "./sections/DetailsSection";
import { HeadingSection } from "./sections/HeadingSection";
import { TimelineSection } from "./sections/TimelineSection";
import { RegisterSection } from "./sections/RegisterSection";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Route, Routes } from "react-router-dom";

const pathname = "/game-of-secrets";
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const finalDate = new Date("2023-10-14T13:30:00");
  const countdown = useCountdown(finalDate);
  const [registerExpanded, setRegisterExpanded] = useState(false);

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

export default function () {
  return (
    <Routes>
      <Route path={pathname} element={<App />}></Route>
      <Route path="*" element={<App />}></Route>
    </Routes>
  );
}
