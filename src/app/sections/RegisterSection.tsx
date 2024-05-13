import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Card from "components/organisms/card";

export const RegisterSection = () => {
  return (
    <section
      id="register"
      className="px-4 max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4 dark"
    >
      <div className="col-span-10 mb-5">
        <Card title={"Register"} description={""} Icon={RocketLaunchIcon}>
          <div className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium ">
          </div>
        </Card>
      </div>
    </section>
  );
};
