import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container className='bg-transparent'>
      <div className="w-full mb-10">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img
              alt="Ajiz Logo"
              src="/ajiz-logo.png"
              className='w-auto h-40'
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Email" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  contact@ajiz.org
                </Footer.Link>
                <Footer.Link href="#">
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Phone" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  +216 54 10 90 90
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Localisation" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  CyberPark Zarzis 
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Association des Jeunes Ingénieurs de Zarzis"
            href="#"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/ajiz.page.officielle"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/ajiz_zarzis/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://github.com/ajiz-org"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}


