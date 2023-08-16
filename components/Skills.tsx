import Image from "next/image";

export const Skill = () => {
  return (
    <section
      className=" bg-[#FEFBF6]
     text-black min-h-[100vh]"
      id="skill"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-violet-600 pb-2  lg:pt-16 pt-0 text-left">
          Skills
        </h2>
        <div className="flex flex-col mx-auto text-center justify-center items-center">
          {/* heading for title */}
          <h2 className="pb-8">I have built a couple of websites and applications with these technologies</h2>

          <div className="flex flex-wrap flex-row gap-5 mx-auto justify-center lg:gap-4 lg:gap-y-8 gap-y-8 ">
            <Image
              src={"/images/html5.svg"}
              alt="coding illustration"
              width={100}
              height={100}
              className="icon-card grow"
            />
            <Image
              src={"/images/css3.svg"}
              alt="coding illustration"
              width={100}
              height={100}
              className="icon-card grow"
            />

            <Image
              src={"/images/bootstrap.svg"}
              alt="coding illustration"
              width={100}
              height={100}
              className="icon-card grow"
            />

            <Image
              src={"/images/javascript.svg"}
              alt="coding illustration"
              width={100}
              height={100}
              className="icon-card grow"
            />

            <Image
              src={"/images/react.svg"}
              alt="coding illustration"
              width={100}
              height={100}
              className="icon-card grow"
            />

            <Image
              src={"/images/github.svg"}
              alt="coding illustration"
              width={100}
              height={100}
              className="icon-card grow"
            />

            <Image
              src={"/images/tailwind.svg"}
              alt="coding illustration"
              width={100}
              height={100}
              className="icon-card grow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
