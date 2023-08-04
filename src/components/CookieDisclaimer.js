import React, { useState } from 'react';

function CookieDisclaimer() {
  // Controlla se l'utente ha già accettato i cookie
  const hasAcceptedCookies = localStorage.getItem('cookieAccepted') === 'true';

  // Stato per mostrare o nascondere il disclaimer
  const [showDisclaimer, setShowDisclaimer] = useState(!hasAcceptedCookies);

  const handleAcceptCookies = () => {
    // Memorizza l'accettazione dei cookie nel localStorage
    localStorage.setItem('cookieAccepted', 'true');
    setShowDisclaimer(false);
  };

  if (!showDisclaimer) {
    return null; // Non mostrare il disclaimer se l'utente ha già accettato i cookie
  }

  return (
    <div className="cookie-disclaimer">
      <h4 className='text-center mt-2'>Consenso Cookie</h4>
      <p className='m-3'>
        Questo Sito utilizza cookie tecnici necessari per il corretto funzionamento dello stesso,
        nonché cookie statistici e di profilazione anche di terze parti. 
        Se vuoi saperne di più consulta la <a href='/cookie-policy'>Cookie Policy.</a> Cliccando su Accetta,
        acconsenti all’utilizzo dei Cookie. 

        <div className='d-flex justify-content-center p-1'>
          <button onClick={handleAcceptCookies} className='fs-4 btn btn-outline-danger font-rintix mb-2 mt-2 me-2'>Accetta</button>
        </div>

      </p>
    </div>
  );
}

export default CookieDisclaimer;
