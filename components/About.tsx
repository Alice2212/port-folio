import Image from "next/image";

const About = () => {
  return (
    <section
      className="
     text-black lg:pt-24 pt-0 min-h-[100vh]"
      id="about"
    >
      <div className="container mx-auto ">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-violet-600 pb-2 text-center lg:text-left ">
          About Me
        </h2>
        <div className="about-info flex flex-wrap items-center justify-center md:justify-between">
          <div className=" lg:w-6/12 w-full order-2 lg:order-1">
            <p className="pb-5 pt-8">
              Hi, My Name Is Oyekale Oluwatosin Alice. I am a Frontend
              Developer. I build beautiful websites with React and Tailwind CSS.
            </p>
            <p className="pb-5">
              I am proficient in Frontend skills like React.js, Redux, Redux
              Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
            </p>

            <p>
              In my wind down time I listen to music, hangout and surf the net .
            </p>
          </div>

          <div className="about-img lg:pt-0 pt-8  order-1 lg:order-2 lg:pb-0 pb-12">
            <Image
              src={"/images/skill.webp"}
              alt="coding illustration"
              width={400}
              height={400}
              className="lgw-[80%] md:ml-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
