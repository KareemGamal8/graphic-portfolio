import { currentRoute, Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import logo from "assets/icons/logo.svg";
import { headerSocialLinks, linksData } from "./data";
import "./styles.css";

export default function MainHeader() {
  const route = currentRoute();

  return (
    <div className="lg:block hidden bg-cinder border-ebony-clay border-b-2 sticky top-0 z-50 left-0 right-0 animate-fade-down animate-once animate-duration-700 delay-300 animate-ease-linear">
      <div className="container">
        <div className="flex justify-between py-2 items-center">
          <Link to={URLS.home}>
            <img src={logo} alt="logo" width={130} />
          </Link>
          <div>
            <div className="flex gap-4 items-center">
              {linksData.map((link, index) => (
                <Link
                  key={index}
                  to={link.route}
                  className={`relative text-sm font-medium pb-1 after:h-[1px] text-white after:bg-violet-red after:absolute after:w-0  after:bottom-0 after:left-0 ${route !== link.route ? "hover:after:w-[50%] after:transition-all after:duration-300" : "after:w-[50%]"}`}>
                  {link.text}
                </Link>
              ))}
              <div className="bg-gray-400 h-8 w-[1px]"></div>
              <div className="flex gap-4 items-center">
                {headerSocialLinks.map((link, index) => {
                  const { Icon, url } = link;
                  return (
                    <Link key={index} href={url} target="_blank">
                      <Icon className="hover:text-violet-red text-white hover:transition-all hover:duration-300" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
