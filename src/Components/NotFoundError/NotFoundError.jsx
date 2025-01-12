import React from "react";
import styles from "./NotFoundError.module.css";

export default function NotFoundError() {
  return (
    <>
      <div className={`${styles.errorpage} d-flex align-items-center justify-content-center`}>
        <div className={`${styles.errorContainer} text-center p-4`}>
          <h1 className={`${styles.errorCode} mb-0`}>404</h1>
          <h2 className={`display-6 ${styles.errorMessage} mb-3`}>Page Not Found</h2>
          <p className={`lead ${styles.errorMessage} mb-5`}>
            We can&apos;t seem to find the page you&apos;re looking for.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#" className={`btn ${styles.btnGlass} px-4 py-2`}>
              Return Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
