
import React from "react";
import testmonals1 from "../../src/assets/images/A&F.png";
import testmonals2 from "../../src/assets/images/testimonals2.png";
import testmonals3 from "../../src/assets/images/A&A.png";
import testmonals4 from "../../src/assets/images/R&S.png";
import testmonals5 from "../../src/assets/images/S&A.png";
import testmonals6 from "../../src/assets/images/testimonals6.png";

function Testimonial() {
  return (
    <div className="mt-[53%] md:mt-24 lg:mt-30 bg-[#F7F4ED] px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        
        <img
          src={testmonals1}
          alt="testimonial"
          className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[600px] object-contain"
        />

        <img
          src={testmonals2}
          alt="testimonial"
          className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[600px] object-contain"
        />

        <img
          src={testmonals3}
          alt="testimonial"
          className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[600px] object-contain"
        />

        <img
          src={testmonals4}
          alt="testimonial"
          className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[600px] object-contain"
        />
        <img
          src={testmonals5}
          alt="testimonial"
          className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[600px] object-contain"
        />
        <img
          src={testmonals6}
          alt="testimonial"
          className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[600px] object-contain"
        />

      </div>
    </div>
  );
}

export default Testimonial;
