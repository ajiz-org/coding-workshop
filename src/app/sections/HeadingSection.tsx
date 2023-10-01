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
      <div className="bg-white bg-opacity-5 rounded-md shadow p-4 relative overflow-hidden h-full md:mt-8">
        <div className="relative">
          <img
            src="/thumb.jpg"
            alt=""
            className="absolute w-full h-auto rounded-md sm:pt-2"
          />
          <img
            src="/cover.jpg"
            alt=""
            className="absolute w-full h-auto rounded-md sm:pt-2"
          />
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="w-full h-auto rounded-md sm:pt-2"
          />
        </div>
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
