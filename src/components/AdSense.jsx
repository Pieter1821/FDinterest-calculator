import React, { useEffect, useRef } from 'react';

const AdSense = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const adElement = adRef.current;

    if (adElement && adElement.childNodes.length === 0) {
      // Load AdSense script asynchronously
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.onload = () => {
        // Define and initialize AdSense ads after script loads
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="ad-container" ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={import.meta.env.VITE_REACT_APP_AD_CLIENT_ID}
        data-ad-slot={import.meta.env.VITE_REACT_APP_AD_SLOT_ID}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSense;
