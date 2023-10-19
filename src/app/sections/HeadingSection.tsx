import { APP_TEXT } from "app/Typography";
import Button from "components/atoms/button";
import { SectionNavigation } from "components/organisms/SectionNavigation/SectionNavigation";

interface HeroSectionProps {
  countdown: CountDown;
  registerExpanded: boolean;
  setRegisterExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeadingSection = ({
  countdown,
  registerExpanded,
  setRegisterExpanded,
}: HeroSectionProps) => {
  return (
    <header
      id="home"
      className="z-10 relative px-4 max-w-screen-lg w-auto xl:max-w-screen-xl mx-auto md:pt-9"
    >
      <SectionNavigation
        className="fixed"
        setRegisterExpanded={setRegisterExpanded}
      />
      <h1 className="text-5xl md:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight py-4 text-[#F61B1F]">
        {APP_TEXT.title.toUpperCase()}
      </h1>
      <div className="my-4 flex justify-center" style={{background: 'url(bg.png)'}}>
        <img src="/banner.jpg" />
      </div>
      <div className="flex py-4">
        {Object.keys(countdown).map((key) => (
          <h3
            key={key}
            className="md:text-2xl  lg:text:4xl sm:text-4xl text-2xl leading-none font-bold tracking-tight text-[#F1FAEE]"
          >
            <span className="countdown font-mono sm:text-8xl text-3xl  w-full ">
              <span
                style={
                  {
                    "--value": countdown[key as keyof CountDown],
                  } as React.CSSProperties
                }
              ></span>
            </span>
            {key}
          </h3>
        ))}
      </div>
      {!registerExpanded && (
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto py-4">
          <div className="sm:flex items-center">
            <Button onClick={() => setRegisterExpanded(true)}>
              {APP_TEXT.register}
            </Button>
          </div>
        </div>
      )}
      <div className="absolute right-2 md:right-5 lg:top-0 opacity-50 md:opacity-90"></div>
      <div className="fixed pointer-events-none lg:absolute lg:top-0 left-5 lg:left-auto -bottom-14 lg:right-5 opacity-10 lg:opacity-90">
        <img src="/ajiz-logo.png" className="w-56 h-56" />
      </div>
    </header>
  );
};
