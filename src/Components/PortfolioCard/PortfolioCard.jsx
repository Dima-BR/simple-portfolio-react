// filepath: /c:/Users/User/Documents/fullStackDeveloper/route/react-course/assignments/assignment-1/simple-portfolio/src/Components/PortfolioCard/PortfolioCard.jsx
import React, { useState } from "react";
import styles from "./PortfolioCard.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function PortfolioCard({ index, portfolio }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className={`card ${styles.card}`}>
        <img className="card-img-top" src={portfolio.imgUrl} alt="Card image cap" />
        <div className={styles.overlay} onClick={handleShowModal}>
          <i className="fa fa-plus"></i>
        </div>
      </div>

      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <h3 className="modal-title text-centter">{portfolio.name}</h3>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button> 
              </div>
              <div className="modal-body">
                <img src={portfolio.imgUrl} className="img-fluid" alt={portfolio.name} />
                <p>{portfolio.description}</p>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}