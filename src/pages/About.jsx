import cover1 from "../assets/images/cover1.png";
import cover3 from "../assets/images/teamS.jpeg";
import cover4 from "../assets/images/teamS1.jpeg";
import boss from "../assets/images/boss.jpeg";

export default function About() {
  return (
    <section className="w-full bg-[#F7F4ED] py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Image + Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mt-10">
          {/* Image 1 */}
          <div className="overflow-hidden rounded-3xl shadow-md mt-18">
            <img
              src={cover3}
              alt="Elysia Event Planner"
              className="w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover"
            />
          </div>

          {/* About Content */}
          <div className="text-left">
            <p className="font-light text-sm md:text-base mb-4">
              Hello there, we are ELYSIA
            </p>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
              A luxury event planner with a passion for creating seamless,
              elegant celebrations. Deeply inspired by the richness of Indian
              culture and traditions, we design and execute thoughtfully curated
              events, focusing on meaningful details, refined aesthetics, and
              flawless coordination — turning every occasion into an
              unforgettable experience.
            </p>

            {/* Image 2 */}
            <div className="overflow-hidden rounded-3xl shadow-md mb-8">
              <img
                src={cover4}
                alt="Elysia Event Planning Team"
                className="w-full h-[240px] sm:h-[300px] md:h-[380px] object-cover"
              />
            </div>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Weddings are among life’s most meaningful milestones. With
              thoughtful planning and attention to detail, we create refined
              celebrations that honor love, tradition, and family — experiences
              meant to be cherished for generations.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-md mt-18">
          <img
            src={boss}
            alt="Elysia Event Planner"
            className="
      w-full
      h-[450px]        /* mobile */
      sm:h-[300px]     /* small screens */
      md:h-[400px]     /* tablets */
      lg:h-[1200px]     /* desktop */
      object-cover
      object-center
    "
          />
        </div>
        <p className="font-serif italic mt-5 text-xl">Managing Director</p>
        <p className="font-serif italic text-3xl">Sunil SL</p>

        {/* Quote */}
        <p
          className="text-base sm:text-lg md:text-xl mt-12 md:mt-16 font-serif italic"
          style={{ fontFamily: "Baskervville, serif" }}
        >
          So we’re extremely delighted to be part of your celebration.
        </p>
      </div>

      {/* Bottom Full Image */}
      <div className="mt-16 md:mt-20">
        <img
          src={cover1}
          alt="Elysia Decorative"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}
