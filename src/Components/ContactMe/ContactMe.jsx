import React from "react";
import styles from "./ContactMe.module.css";

export default function ContactMe() {
  return (
    <section >
    <div id="contact" className="container-fluid py-5 mt-5" style={{ width: "100%", padding: "0", margin: "0" }}>
      <div className="row my-4">
        <div className="col text-center">
          <h2 className="display-1">CONTACT Section</h2>
          <div className={styles.devider}>
            <i className={`fa-solid fa-star fa-xlg ${styles.star}`}></i>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className={`form-control ${styles.inputBorder}`}
                id="username"
                placeholder="userName"
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className={`form-control ${styles.inputBorder}`}
                id="age"
                placeholder="userAge"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className={`form-control ${styles.inputBorder}`}
                id="email"
                placeholder="userEmail"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className={`form-control ${styles.inputBorder}`}
                id="password"
                placeholder="userPassword"
              />
            </div>
            <button
              type="submit"
              className={`btn d-flex justify-content-start ${styles.btnSuccess}`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
}
