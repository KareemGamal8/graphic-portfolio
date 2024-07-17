import { Link } from "@mongez/react-router";
import { headerAtom } from "../../atoms";
import { cn } from "../../cn";
import { linksData } from "./data";

export default function HeaderDrawerLinks() {
  const opened = headerAtom.useOpened();

  return (
    <div
      className={cn(
        "absolute z-60 bg-cinder shadow-xl left-0 w-full grid grid-rows-[0fr] transition-all duration-500",
        opened && "grid-rows-[1fr]",
      )}>
      <div className="transition-all overflow-hidden">
        <div className="flex flex-col items-center text-white">
          {linksData.map((link, index) => (
            <Link
              key={index}
              onClick={headerAtom.close}
              to={link.route}
              className={`text-md py-4 hover:bg-black-rose border-y-[0.5px] border-y-white border-opacity-50 transition-all duration-500 font-medium text-center w-full`}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
