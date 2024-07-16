import wave from "assets/icons/wave.svg";
import personal from "assets/images/personal.png";
import { useInView } from "react-intersection-observer";

export default function DisplayCounter() {
  const { ref: waveRef, inView: waveInView } = useInView({
    triggerOnce: false,
  });
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
  });
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: false });

  return (
    <>
      {/* <Helmet title="Home" /> */}
      <div className="min-h-[45rem] text-white relative w-full overflow-hidden flex justify-between items-center">
        <div className="w-full h-full absolute -z-30 animate-fade-in animate-ease-in animate-fill-backwards animate-duration-[2000ms] animate-delay-1000">
          <div
            ref={waveRef}
            className={`absolute flex items-center justify-center w-full h-full ${waveInView ? "animate-spin" : ""} animate-ease-in animate-duration-[1500ms] animate-once animate-reverse`}>
            <img
              src={wave}
              alt="wave"
              className="w-[80vw] lg:w-[65vw] block absolute right-1/2 -bottom-0 [@media(min-width:2150px)]:-bottom-48 max-w-screen-2xl -translate-x-16"
            />
            <img
              src={wave}
              alt="wave"
              className="w-[80vw] block absolute left-1/2 -top-0 2xl:-top-48 max-w-screen-2xl transform-x-16"
            />
          </div>
        </div>
        <div className="container">
          <div className="flex lg:justify-between justify-center items-center md:flex-row flex-col-reverse gap-8">
            <div
              ref={textRef}
              className={`${textInView ? "animate-fade-right" : ""} animate-fade-up animate-duration-[3000ms] animate-ease-out animate-delay-200`}>
              <p className="font-edu absolute -top-4 -left-2 bg-gradient-to-t italic from-cinder via-violet-red to-black-rose text-transparent bg-clip-text lg:text-4xl text-2xl font-extrabold">
                HI There!
              </p>
              <h2 className="lg:text-6xl md:text-4xl sm:text-4xl text-3xl font-bold uppercase lg:leading-[4.5rem]">
                I am Hisham Ashraf. <br /> A graphic designer
              </h2>
            </div>
            <img
              ref={imgRef}
              src={personal}
              alt="personal"
              className={`${imgInView ? "animate-fade-left" : ""} animate-fade-down lg:w-[25rem] w-[19rem] animate-duration-[3000ms] animate-delay-500 animate-ease-out`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
