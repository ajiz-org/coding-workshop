import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import FooterWithSocialMediaIcons from "components/organisms/Footer/Footer";
import Card from "components/organisms/card";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="px-4 max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4"
    >
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
  );
};
