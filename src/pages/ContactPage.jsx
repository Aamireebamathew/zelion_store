import React from "react";

const ContactPage = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📞 Contact Us</h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Leave a Message</h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded p-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded p-2"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border rounded p-2"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Our Location</h2>
          <p>123, Main Street, Your City, Country</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Call Us</h2>
          <p>📱 +91 98765 43210</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Email</h2>
          <p
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText("support@zelionstore.com");
              alert("Email copied to clipboard!");
            }}
          >
            📧 support@zelionstore.com (click to copy)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
