import React from 'react';
import "./Footer.css";
import {faLocationDot, faSquareEnvelope, faSquarePhone} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className='footer'>
      <h3>Contact Us</h3>
      <div className='top-container'> 
          <div className='sub-container-details'>
            <FontAwesomeIcon icon={faSquareEnvelope} className='sub-container-icon'/>
            <span> contact@gagahealth.com</span>
          </div>
          <div className='sub-container-details'>
            <FontAwesomeIcon icon={faSquarePhone} className='sub-container-icon'/>
            <span> (+91)9205757093</span>
          </div>
          <div className='sub-container-details'>
            <FontAwesomeIcon icon={faLocationDot} className='sub-container-icon'/>
            <span>5th Floor Two Horizon Centre DLF <br/>vGurugram, Haryana 122002</span>
          </div>
        </div>
      <div className='bottom-container'>
          <p>© Babynama</p>
      </div>
    </div>
  )
}

export default Footer