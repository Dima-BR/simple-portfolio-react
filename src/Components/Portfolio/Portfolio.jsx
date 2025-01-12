import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  const portfolios = [
    {
      name: "LOG CABIN",
      imgUrl:
        "https://hamza-noah.github.io/Start-React-App/static/media/cabin.4417330275f78faa31c3.png",
      imgAlt: "LOG CABIN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. ",
    },
    {
      name: "TASTY CAKE",
      imgUrl:
        "https://hamza-noah.github.io/Start-React-App/static/media/cake.6554473016d32b343f02.png",
      imgAlt: "LOG CABIN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "CIRCUS TENT",
      imgUrl:
        "https://hamza-noah.github.io/Start-React-App/static/media/circus.494a4a914b5471b41f3e.png",
      imgAlt: "LOG CABIN",
      description:
        "CIRCUS TENT Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "CONTROLER",
      imgUrl:
        "https://hamza-noah.github.io/Start-React-App/static/media/game.a940b57aa7bab2eacc52.png",
      imgAlt: "CONTROLER",
      description:
        "CONTROLER Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "LOCKED SAFE",
      imgUrl:
        "https://hamza-noah.github.io/Start-React-App/static/media/safe.01792c0bdc342bf4bf9c.png",
      imgAlt: "LOCKED SAFE",
      description:
        "LOCKED SAFE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      name: "SUBMARINE",
      imgUrl:
        "https://hamza-noah.github.io/Start-React-App/static/media/submarine.48c9704ca7f8ce901038.png",
      imgAlt: "SUBMARINE",
      description:
        "SUBMARINE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
  ];
  return (
    <>
      <section id="portfolio" className="py-5 mt-5">
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="display-1">Portfolio</h2>
            <div className={styles.devider}>
              <i className={`fa-solid fa-star fa-xlg ${styles.star}`}></i>
            </div>
          </div>
        </div>
        {console.log(portfolios)}
        <div className="container my-4">
          <div className="row g-3 d-flex justify-content-center">
            {portfolios.map((portfolio, index) => {
              return (
                <>
                  <div className="col-md-4">
                    <PortfolioCard portfolio={portfolio} index={index} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
