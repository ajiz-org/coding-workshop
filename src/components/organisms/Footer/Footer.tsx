import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

interface FooterItem {
  title: string;
  href: string;
  text: string;
  target?: "_blank";
}

interface FooterLink {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const footerItems: FooterItem[] = [
  {
    title: "Email",
    href: "mailto:coding@ajiz.org",
    text: "coding@ajiz.org",
  },
  {
    title: "Phone",
    href: "tel:+21620045571",
    text: "20 04 55 71",
  },
  {
    title: "Localisation",
    href: "https://maps.app.goo.gl/hfP9iYxrYByEmQxj8",
    text: "CyberPark Zarzis",
    target: "_blank",
  },
];

const footerLinks: FooterLink[] = [
  {
    href: "https://www.facebook.com/ajiz.page.officielle",
    icon: BsFacebook,
  },
  {
    href: "https://www.instagram.com/ajiz_zarzis/",
    icon: BsInstagram,
  },
  {
    href: "https://github.com/ajiz-org",
    icon: BsGithub,
  },
];

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className="bg-transparent p-0">
      <div className="w-full mb-10">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img alt="Ajiz Logo" src="/ajiz-logo.png" className="w-auto h-40" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            {footerItems.map((item, i) => (
              <div key={i}>
                <Footer.Title title={item.title} />
                <Footer.LinkGroup col>
                  <Footer.Link
                    target={item.target}
                    href={item.href}
                    className="text-[#F61B1F]"
                  >
                    {item.text}
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            ))}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Association des Jeunes Ingénieurs de Zarzis"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {footerLinks.map((link, i) => (
              <Footer.Icon key={i} href={link.href} icon={link.icon} />
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
}
