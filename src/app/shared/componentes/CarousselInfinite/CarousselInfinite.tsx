import { useEffect } from 'react';
import '../../../../styles/styles.css'

function CarousselInfinite(){

    useEffect(() => {
        const logosContainer = document.querySelector(".logos");
        if (logosContainer && logosContainer.childElementCount < 1) {
          const logosSlide = document.querySelector(".logos-slide");
          if (!logosSlide) return
            const copy = logosSlide.cloneNode(true)
          logosContainer.appendChild(copy);
        }
      }, []);
    
      return (
        <div className="logos">
          <div className="logos-slide">
            <img src='assets/images/logo-lg.png' alt="1M" />
            <img src='assets/images/logo-samsung.png' alt="1M" />
            <img src='assets/images/logo-iphone.png' alt="1M" />
            <img src='assets/images/logo-xiaomi.png' alt="1M" />
            <img src='assets/images/logo-motorola.png' alt="1M" />
            <img src='assets/images/logo-lg.png' alt="1M" />
            <img src='assets/images/logo-samsung.png' alt="1M" />
            <img src='assets/images/logo-iphone.png' alt="1M" />
            <img src='assets/images/logo-xiaomi.png' alt="1M" />
            <img src='assets/images/logo-motorola.png' alt="1M" />
            <img src='assets/images/logo-lg.png'  alt="1M" />

          </div>
        </div>
      );
    }

export default CarousselInfinite