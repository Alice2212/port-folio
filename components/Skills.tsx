import Image from "next/image";

export const Skill = () => {
  return (
    <section
      className="bg-primary
     text-white px-5 pb-48 min-h-[70vh]"
      id="skill"
    >
      <div className="skills flex flex-col mx-auto text-center justify-center items-center">
        {/* heading for title */}
        <h2 className="pb-8">I have experience with these technologies</h2>
        {/* <div className="grid grid-cols-3 gap-5 auto-rows-auto lg:grid-cols-8 lg:gap-14"> */}
        <div className="flex flex-wrap flex-row gap-5 mx-auto justify-center lg:gap-16">
          <Image
            src={"/images/bootstrap.svg"}
            alt="coding illustration"
            width={100}
            height={100}
          />
          <Image
            src={"/images/css3.svg"}
            alt="coding illustration"
            width={100}
            height={100}
          />
          <Image
            src={"/images/github.svg"}
            alt="coding illustration"
            width={100}
            height={100}
          />
          <Image
            src={"/images/html5.svg"}
            alt="coding illustration"
            width={100}
            height={100}
          />
          <Image
            src={"/images/javascript.svg"}
            alt="coding illustration"
            width={100}
            height={100}
          />
          <Image
            src={"/images/nextjs.svg"}
            alt="coding illustration"
            width={100}
            height={100}
          />
          <Image
            src={"/images/react.svg"}
            alt="coding illustration"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};
