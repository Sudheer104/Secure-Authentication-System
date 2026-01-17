import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="max-w-4xl w-full p-6 md:p-10 bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
          Contact Us
        </h1>

        <p className="text-gray-300 mb-6">
          If you have any questions, suggestions, or feedback regarding this project, feel free to reach out.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 rounded bg-gray-700 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-gray-700 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full p-2 rounded bg-gray-700 text-white outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
