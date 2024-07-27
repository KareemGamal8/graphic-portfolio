import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import logo from "assets/icons/logo.svg";
import { headerSocialLinks } from "./data";
import HeaderDrawer from "./HeaderDrawer";
import HeaderDrawerLinks from "./HeaderDrawerLinks";
import "./styles.css";
export default function MobileHeader() {
  return (
    <div className="sticky lg:hidden bg-cinder border-ebony-clay border-b-2 block top-0 left-0 right-0 z-50 animate-fade-down animate-once animate-duration-500 animate-ease-linear">
      <div>
        <div>
          <div className="container">
            <div className="flex justify-between py-2 items-center text-white">
              <Link to={URLS.home}>
                <img src={logo} alt="logo" width={120} />
              </Link>
              <div className="flex gap-4 items-center">
                {headerSocialLinks.map((link, index) => {
                  const { Icon, url } = link;
                  return (
                    <Link key={index} href={url} target="_blank">
                      <Icon className="transition-all hover:text-violet-red delay-75" />
                    </Link>
                  );
                })}
              </div>
              <HeaderDrawer />
            </div>
          </div>
        </div>
      </div>
      <HeaderDrawerLinks />
    </div>
  );
}
