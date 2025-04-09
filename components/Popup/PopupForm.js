import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import axios from "axios";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully sent and we’ll get back to you soon.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
  companyName: "",
  agree: false,
  captcha: "",
};

const PopupForm = ({onClose}) => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setContact((prevState) => ({ ...prevState, [name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text, companyName, captcha } = contact;
      const payload = { name, email, number, subject, text, companyName, captcha };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section >
      <div class="popup_container">
      <div class="popup-header">
        <p>Request a Demo</p>
        <button class="close_btn" onClick={onClose}>&times;</button>
      </div>
           
            <form  onSubmit={handleSubmit}>
      <div className="popup_form">
            <div class="popup_row">
            <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
           <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
        </div>

        <input
                      type="tel"
                      name="number"
                      placeholder="Mobile Number"
                      value={contact.number}
                      onChange={handleChange}
                      required
                    />
                     <input
                      type="text"
                      name="subject"
                      placeholder="Company Name"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="captcha"
                      placeholder="Captcha"
                      value={contact.captcha}
                      onChange={handleChange}
                      required
                    />

        {/* <!-- Checkbox --> */}
        <label class="checkbox-label">
          <input type="checkbox" required />
          <span>
            I authorize <strong>VMC Technologies Pvt Ltd (MCUBE)</strong> and its representatives to Call, SMS, Email, or WhatsApp me about its products and offers. This consent overrides any registration for DND / NDNC.
          </span>
        </label>

        {/* <!-- Submit Button --> */}
        <button type="submit" class="submit-btn">Send Us</button>
      </div>
            </form>
          </div>
    </section>
  );
};

export default PopupForm;
