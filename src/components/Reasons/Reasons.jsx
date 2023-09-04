import React from 'react';
import './Reasons.css';
import image1 from '../../assets/ronyrushi.png';
import image2 from '../../assets/bulider.png';
import image3 from '../../assets/Transformtion.jpg';
import image4 from '../../assets/wani.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
      {/* left */}
      <div className='left-r'>
        <img src={image1} alt='' />
        <img src={image2} alt='' />
        <img src={image3} alt='' />
        <img src={image4} alt='' />
      </div>

      {/* right */}
      <div className='right-r'>
        <span>some reasons</span>
        <div>
          <span className='stroke-text'>why</span>
          <span> choose us?</span>
        </div>

        {/* details */}
        <div className='details-r'>
          <div>
            <img src={tick} alt=''></img>
            <span>OVER 10+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>3 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt='' />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: 'var(--gray)',
            fontWeight: 'normal',
          }}
        >
          OUR PARTNERS
        </span>

        <div className='partners'>
          <img src={nike} alt='' />
          <img src={adidas} alt='' />
          <img src={nb} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
