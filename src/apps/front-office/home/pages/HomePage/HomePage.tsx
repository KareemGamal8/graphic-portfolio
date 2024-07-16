import Helmet from "@mongez/react-helmet";
import wave from "assets/icons/wave.svg";

export default function HomePage() {
  return (
    <>
      <Helmet title="Home" />
      <div className="min-h-[100vh] text-white relative w-full overflow-hidden">
        <div
          className="w-full h-full absolute animate-fade animate-ease-in animate-fill-backwards 
            animate-duration-[2000ms] animate-delay-1000">
          <div className="absolute flex items-center justify-center w-full h-full animate-ease-in animate-duration-[2000ms] animate-spin animate-once animate-reverse">
            <img
              src={wave}
              alt="wave"
              className="w-[50vw] lg:w-[65vw] block absolute right-1/2 -bottom-12 lg:-bottom-28 [@media(min-width:2150px)]:-bottom-48 max-w-screen-2xl -translate-x-16"
            />
            <img
              src={wave}
              alt={wave}
              className="w-[80vw] block absolute left-1/2 -top-24 lg:-top-36 2xl:-top-48 max-w-screen-2xl transform-x-16"
            />
          </div>
        </div>
      </div>
    </>
  );
}
