import { APP_TEXT } from "app/Typography"
import Button from "components/atoms/button"
import { SectionNavigation } from "components/organisms/SectionNavigation/SectionNavigation"

export interface CountDown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
interface HeroSectionProps{
    countdown : CountDown
}
export const HeadingSection = ({countdown}: HeroSectionProps) => {
  return (
    <header className="z-10 relative px-4 max-w-screen-lg w-auto xl:max-w-screen-xl mx-auto md:pt-9">
      <SectionNavigation className="fixed" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight py-4 text-[#F61B1F]">
          {APP_TEXT.title.toUpperCase()}
        </h1>
        <div className="bg-white bg-opacity-5 rounded-md shadow p-4 relative overflow-hidden h-full md:mt-8">
          <img
            src="/cover.png"
            alt=""
            className="w-full h-auto rounded-md sm:pt-2"
          />
        </div>
        <div className="flex py-4">
          {Object.keys(countdown).map((key) => (
            <h3 className="md:text-2xl  lg:text:4xl sm:text-4xl text-2xl leading-none font-bold tracking-tight text-[#F1FAEE]">
              <span className="countdown font-mono sm:text-8xl text-3xl  w-full ">
                <span style={{ "--value": countdown[key] }}></span>
              </span>
              {key}
            </h3>
          ))}
        </div>
        <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto py-4">
          <div className="sm:flex items-center">
            <a href="https://github.com/jvidalv/vital">
              <Button>{APP_TEXT.register}</Button>
            </a>
          </div>
        </div>
        <div className="absolute right-2 md:right-5 lg:top-0 opacity-50 md:opacity-90">
          <img src="/ajiz-logo.png" className="w-56 h-56" />
        </div>
      </header>
  )
}
