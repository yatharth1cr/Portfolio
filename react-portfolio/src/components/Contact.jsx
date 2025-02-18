import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialIcon from "./SocialIcon";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "emailjs-com";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    await emailjs.send(
      "service_cugamnh", // EmailJS service ID
      "template_pbwx7c9", // EmailJS template ID
      values,
      "t0NBrwZ13X2-eqo-1" // EmailJS public key
    );
    console.log("Message sent successfully!");
    resetForm();
  } catch (error) {
    console.log("Failed to send message.", error);
    alert("Failed to send message.");
  } finally {
    setSubmitting(false);
  }
};

const Contact = () => {
  return (
    <>
      <div className="max-w-lg mx-auto py-6 my-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-yellow-500 text-center mb-4 comforter-brush-regular">
          Contact Me
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white p-2 rounded transition ${
                  isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="mt-8">
        <div className="flex justify-center space-x-6 text-2xl">
          <SocialIcon
            href="mailto:yatharthgiri187@gmail.com"
            icon={faEnvelope}
            color="text-yellow-600 hover:text-yellow-400"
            label="Email"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/yatharth-raj-giri-b51579287/"
            icon={faLinkedin}
            color="text-blue-500 hover:text-blue-400"
            label="LinkedIn"
          />
          <SocialIcon
            href="https://github.com/yatharth1cr"
            icon={faGithub}
            color="text-gray-400 hover:text-white"
            label="GitHub"
          />
          <SocialIcon
            href="https://x.com/YatharthGiri108"
            icon={faXTwitter}
            color="text-gray-300 hover:text-white"
            label="Twitter (X)"
          />
          <SocialIcon
            href="https://www.instagram.com/_yatharth1.cr/"
            icon={faInstagram}
            color="text-pink-500 hover:text-pink-400"
            label="Instagram"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
