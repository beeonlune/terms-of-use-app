import React, { useState, useRef } from 'react';
import './App.css';
import termsAndConditionsText from './termsAndConditions';

function HomePage({ setPage }) {
  const [showModal, setShowModal] = useState(false);
  const modalContentRef = useRef(null);
  const agreeButtonRef = useRef(null);

  const handleAgree = () => {
    setShowModal(false);
    setPage('welcome');
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleScrollToBottom = () => {
    const agreeButton = agreeButtonRef.current;
    agreeButton.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return (
    <div className="home-page">
      <button className="button-23" onClick={() => setShowModal(true)}>
        Sign Up
      </button>
      {showModal && (
        <div className="modal">
          <button className="close-button" onClick={handleClose}>
            &#10006;
          </button>
          <div className="modal-content" ref={modalContentRef}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>TERMS & CONDITIONS</h2>
              <button className="button-39 scroll-to-bottom-button" onClick={handleScrollToBottom}>
                Scroll to Bottom
              </button>
            </div>
            <p dangerouslySetInnerHTML={{ __html: termsAndConditionsText }}></p>
            <button ref={agreeButtonRef} className="agree-button" onClick={handleAgree}>
              I Agree
            </button>
          </div>
        </div>
      )}
      <p className="terms-text">
        By creating an account, you agree to our Terms & Conditions and Privacy Policy
      </p>
    </div>
  );
}

function WelcomePage() {
  return <h1>Welcome to my app</h1>;
}

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'welcome' && <WelcomePage />}
    </div>
  );
}

export default App;