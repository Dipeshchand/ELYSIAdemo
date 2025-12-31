import React from "react";
import cover1 from "../../assets/images/side2s.jpg"
import cover2 from  "../../assets/images/main-4.jpg"
import cover3 from "../../assets/images/main3.jpg"
import cover4 from "../../assets/images/corporate.jpg"
export default function CapturedMoments() {
  const couples = [
    { 
      id: 1, 
      name: "Akhilesh & Akshaya", 
      desc: "A thoughtfully planned proposal event, curated to create a meaningful and unforgettable experience.",
      image: cover1 
    },
    {
      id:4,
      name:"Corporate Event",
      desc:"Americano with Aamir",
      image:cover4
    },
    { 
      id: 2, 
      name: "Afreein & Faisal", 
      desc: "A journey of friendship that blossomed into a beautiful forever.",
      image: cover2
    },
    { 
      id: 3, 
      name: "Sneha & Rohan", 
      desc: "Two hearts, one rhythm — a love story told through unspoken words.",
      image: cover3 
    },
  ];

  return (
    <section className="w-full bg-[#F6F3EC] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-baskervville  mb-4">
          Explore each celebration and witness seamless experiences unfold.
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 font-baskervville ">
          Click on each event to see how we brought the vision to life.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {couples.map((c) => (
            <div key={c.id} className="cursor-pointer">
              
              {/* Image */}
              <div className="overflow-hidden rounded-lg shadow-sm group">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-2xl font-serif ">
                {c.name}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                {c.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
