import aboutus from "../assets/images/about.jpeg";

export default function Contact() {
  return (
    <div className="w-full bg-[#F7F4ED]">
      <div className="relative w-full h-[50vh] md:h-[85vh] mt-20 overflow-hidden bg-[#F7F4ED]">
  <img
    src={aboutus}
    alt="cover"
    className="absolute inset-0 w-full h-full object-cover md:object-contain"
  />
</div>

      {/* CONTACT FORM SECTION */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-6">
          Contact us
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-4">
          Please provide detailed information in the form below to help us
          tailor an accurate quote. We typically respond within 24 hours, but if
          it's urgent or you haven't heard from us, don't hesitate to reach out
          via the contact details below.
        </p>

        {/* EMAIL + PHONE */}
        <p className="text-center text-gray-900 font-medium">
          elysiaevents45@gmail.com
        </p>
        <p className="text-center text-gray-900 font-medium mb-10">
          +91 8296632740
        </p>

        {/* FORM */}
        <form className="bg-{#F8F5EF} p-10 rounded-xl shadow-lg space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Contact Number
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
            />
          </div>

          {/* Event Details */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Event Details
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
            />
          </div>

          {/* Date/Duration */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Date/Duration
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
            />
          </div>

          {/* Preferred form of contact */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Preferred Form of Contact
            </label>
            <select className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none">
              <option>Select</option>
              <option>Call</option>
              <option>E-mail</option>
              <option>WhatsApp Message</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-opacity-80 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
