import img1 from "../../assets/images/side2s.jpg";
import img2 from "../../assets/images/newadded.jpg";

export default function StorySection() {
  return (
    <section className="w-full bg-[#F6F3EC] px-6 py-16 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE TEXT */}
       <div>
  <h2 className="text-3xl md:text-5xl font-serif italic mb-6">
    Moments, Perfectly Planned
  </h2>

  <p className="text-base md:text-lg leading-relaxed mb-4">
    An event is more than a gathering — it’s an experience, a vision brought to
    life. From thoughtfully curated themes and seamless coordination to
    breathtaking décor, music, and joyful celebrations, every element must work
    in harmony. But without careful planning, even the most beautiful ideas can
    remain unfinished.
  </p>

  <p className="text-base md:text-lg leading-relaxed text-[#4B463E]">
    At ELYSIA, we turn ideas into unforgettable experiences. We plan with
    precision, creativity, and heart — transforming your vision into a flawless
    celebration. From the first concept to the final farewell, we manage every
    detail so you can be present in the moment, while we ensure your event
    unfolds effortlessly and beautifully.
  </p>
</div>


        {/* RIGHT SIDE IMAGES */}
        <div className="relative flex justify-center md:justify-end">
          
          {/* BACK IMAGE */}
          <img
            src={img1}
            loading="lazy"
             decoding="async"
            className="w-[250px] md:w-[400px] lg:w-[450px]  translate-x-26  rounded-lg shadow-lg opacity-90"
          />

          {/* FRONT IMAGE */}
          <img
            src={img2}
             loading="lazy"
             decoding="async"
            className="w-[170px] md:w-[260px] lg:w-[320px] rounded-lg shadow-xl absolute top-10 left-8 md:top-20 md:left-10"
          />
        </div>

      </div>
    </section>
  );
}
