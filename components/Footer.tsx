import { useState } from "react";

export const Footer = () => {

   // function to get date
   const getDate = ()=>{
    const today = new Date();
    const year = today.getFullYear ();
    return year;
  }

  // state to manageYear
  const [currentYear, setCurrentYear] = useState(getDate());

 

  return (
    <>
      <footer className="bg-[#675cc5] w-full shadow dark:bg-gray-900 ">
        <div className="container w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <span className="flex justify-between text-md text-white sm:text-center dark:text-gray-400 font-light">
            <a href="" className=" ">
              OA
            </a>
            © {currentYear} All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};
