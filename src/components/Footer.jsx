import React from "react";
import Styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={Styles.containerFooter}>
      <div className={Styles.footer}>
        <div className={Styles.technologies}>
          <h2 className={Styles.technologiesTitle}>TECHNOLOGiES</h2>
          <a
            href="https://developer.mozilla.org/es/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
            className={Styles.icon}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
              alt="Html5 icon"
              height="20"
              width="20"
            />
          </a>

          <a
            href="https://developer.mozilla.org/es/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
            className={Styles.icon}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              alt="CSS3 icon"
              height="20"
              width="20"
            />
          </a>

          <a
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
            className={Styles.icon}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="JS icon"
              height="20"
              width="20"
            />
          </a>

          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            className={Styles.icon}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
              alt="REACT JS icon"
              height="20"
              width="20"
            />
          </a>

          <a
            href="https://redux.js.org"
            target="_blank"
            rel="noreferrer"
            className={Styles.icon}
          >
            <img
              src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
              alt="REDUX-JS"
              width="20"
              height="20"
            />
          </a>
        </div>
        <div className={Styles.developed}>Developed by Marlon</div>
        <div className={Styles.contactMe}>
          <h2>CONTACT ME</h2>
          <a
            href="https://www.linkedin.com/in/marlon-rivera-coronel-a75083249/"
            target="_blank"
            rel="noreferrer"
            className={Styles.icon}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="Linkedin Profile"
              height="20"
              width="20"
            />
          </a>

          <a
            href="https://github.com/marlon-rivera"
            target="_blank"
            rel="noreferrer"
            className={Styles.icon}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
              alt="github icon"
              width="20"
              height="20"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=573507310045&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className={Styles.icon}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111728.png"
              alt="whatsapp icon"
              width="20"
              height="20"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
