import { ComponentProps } from "react";
import {
  CalendarDaysIcon,
  PaperAirplaneIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

interface NavigationList {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const navigationList: NavigationList[] = [
  {
    title: "Register",
    href: "#register",
    icon: <RocketLaunchIcon color="#F61B1F" className="h-5 w-5" />,
  },
  {
    title: "Home",
    href: "#home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Details",
    href: "#details",
    icon: <QuestionMarkCircleIcon color="currentColor" className="h-5 w-5" />,
  },
  {
    title: "Timeline",
    href: "#timeline",
    icon: <CalendarDaysIcon color="currentColor" className="h-5 w-5" />,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: <PaperAirplaneIcon color="currentColor" className="h-5 w-5" />,
  },
];

export const SectionNavigation = (
  props: ComponentProps<"ul"> & {
    setRegisterExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  }
) => {
  return (
    <ul
      className="menu bg-base-200 rounded-box fixed bottom-5 right-5 z-50 "
      {...{ props }}
    >
      {navigationList.map(({ title, href, icon: Icon }, index) => (
        <li key={index}>
          <a
            className="tooltip tooltip-left"
            onClick={index ? undefined : () => props.setRegisterExpanded(true)}
            data-tip={title}
            href={href}
          >
            {Icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
