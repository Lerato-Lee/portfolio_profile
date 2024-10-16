import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

// Send the email
emailjs.send(
  import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  {
    from_name: form.name,
    to_name: 'Lerato',
    from_email: form.email,
    to_email: 'mthimkhululerato72@gmail.com',
    message: form.message,
  }
)
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="my-20 c-space" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
              <h3 className="head-text">Let&apos;s talk</h3>
          <p className="mt-3 text-lg text-white-600">
          I&apos;d love to hear from you! 
          Whether you have a question about my web development services, need IT support,
           or just want to connect, feel free to reach out.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col mt-12 space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="eg. John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email adress</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="eg. johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;