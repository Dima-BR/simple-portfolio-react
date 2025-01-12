import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`${styles.aboutSection} py-5`} style={{ width: "100%" }} id="about">
      <div className="container-fluid px-5">
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="display-1">About</h2>
            <div className={styles.devider}>
              <i className={`fa-solid fa-star fa-xlg ${styles.star}`}></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="lead text-start">
              Freelancer is a free Bootstrap theme created by Route. The
              download includes the complete source files, including HTML, CSS,
              and JavaScript, as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6">
            <p className="lead text-start">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
