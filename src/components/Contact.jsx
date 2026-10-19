import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_bbc6x2p",
        "template_93b39v7",
        form.current,
        "3lmZL_PotAdv7CfUZ"
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.log("EmailJS Error:", error);
          setStatus("Something went wrong ❌");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <span className="contact-subtitle">CONTACT</span>
        <h2>Let's Work Together</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Have a project idea?</h3>
          <p>
            I'm always interested in creative projects, collaborations, UI/UX
            ideas, and 3D visualizations.
          </p>

          <div className="contact-details">
            <p>📧 mubarak23523@gmail.com</p>
            <p>📍 Tamil Nadu, India</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Your Name" aria-label="Your name" autoComplete="name" required />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            aria-label="Your email"
            autoComplete="email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            aria-label="Your message"
            rows="6"
            required
          ></textarea>

          <button type="submit">Send Message</button>

          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;