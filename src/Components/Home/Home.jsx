// import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <header>
        <section className={`${styles.homeSection} py-5`} style={{ width: "100%" }}>
              <div className="container-fluid px-5">
                <div className="row mb-4">
                  <div className="col text-center">
                    <img src="assets/images/avataaars.svg" alt=""  />
                    <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className="py-5" alt="" width={'250px'}  />
                    <h2 className="display-1">start Framework</h2>
                    <div className={styles.devider}>
                      <i className={`fa-solid fa-star fa-xlg ${styles.star}`}></i>
                    </div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                  </div>
                </div>
              </div>
            </section>
       </header>
    </>
  );
}
