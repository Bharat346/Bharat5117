import React, { useState } from "react";
import emailjs from "emailjs-com"; // Make sure you install emailjs-com
import "./email.css";
import Btn from "../btn";

function sendEmailToOwner(name, emailId, msg) {
  try {
    emailjs
      .send("service_euam6gp", "template_u412h3g", {
        to_name: "Bharat Kumar",
        from_name: name,
        email_id: emailId,
        message: msg,
        reply_to: "reply",
        email_to: "231210034@nitdelhi.ac.in",
        subject: `Reply from ${name} about your Web-site`,
      })
      .then(function (response) {
        console.log("Email sent successfully:", response);
        window.alert("Email Sent Successfully....");
        location.reload();
      })
      .catch(function (error) {
        console.log("Error sending email:", error);
        //alert("Error sending email. Please try again later.");
      });
  } catch (error) {
    console.log("Error", error);
  }
}

function sendEmailToUser(name, emailId, msg) {
  try {
    emailjs
      .send("service_euam6gp", "template_xg7i6am", {
        to_name: name,
        from_name: "Bharat Kumar",
        email_id: emailId,
        message: msg,
        reply_to: "reply",
        email_to: "231210034@nitdelhi.ac.in",
        subject: `Thanks For suggest and contact us`,
      })
      .then(function (response) {
        console.log("Email sent successfully:", response);
        location.reload();
      })
      .catch(function (error) {
        console.log("Error sending email:", error);
        window.alert("Error to sending Email")
        //alert("Error sending email. Please try again later.");
      });
  } catch (error) {
    console.log("Error", error);
  }
}

function verify_email(email) {
  let domain = email.split("@")[1];
  let sub_dom = domain.split(".");
  console.log(domain);
  console.log(sub_dom);

  if (sub_dom.length === 2) {
    if (domain === "gmail.com" || domain === "outlook.com") {
      return true;
    }
    alert("InCorrect Email Address");
    return false;
  } else if (sub_dom.length === 3) {
    if (
      (sub_dom[1] === "ac" && sub_dom[2] === "in") ||
      (sub_dom[1] === "gov" && sub_dom[2] === "in")
    ) {
      return true;
    }
    window.alert("InCorrect Email Address");
    return false;
  }
}

function EmailPage() {
  const [name, setName] = useState("");
  const [eid, setEid] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verify_email(eid)) {
        sendEmailToOwner(name, eid, msg);
        sendEmailToUser(name, eid, msg);
    }
  };

  return (
    <>
      <div className="email">
        <h3>Contact-me</h3>
        <h6>Here You can give any sussestion</h6>
        <hr />
        <div className="mail-content">
          <div className="img">
            <img src="./src/assets/img/mail.png" alt="mail" />
          </div>
          <div className="mail-form">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="Email-id"
                  placeholder="Enter your Email"
                  onChange={(e) => setEid(e.target.value)}
                  required
                />
              </div>
              <div>
                <textarea
                  name="msg"
                  id="msg"
                  placeholder="Enter your Message to suggest me"
                  onChange={(e) => setMsg(e.target.value)}
                  required
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>
      <script type="text/javascript">
        (function () {emailjs.init("lYkVLeLudMaGVE5Ho")})();
      </script>
    </>
  );
}

export default EmailPage;
