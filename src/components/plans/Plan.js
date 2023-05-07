import React, { useState } from 'react';
import "./Plan.css";
import { faCheckSquare, faXmarkSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate} from 'react-router-dom';
 
function Plan({each}) {
  const {id, planName, whatsappGrp, basicMedicalQueries, privateChat, videoConsultation, addConsultation, growthTracking, prices} = each;
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState("0 months");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const months=["3 months", "6 months", "1 year"]
  const changePrice= (index) =>{
    setPrice(prices[index-1]);
    setDuration(months[index-1]);
    setErrMsg("");
    console.log("Change function");
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(price===0)
    {
      setErrMsg("Please choose duration*");
    }else
    {
      setErrMsg("");
      navigate('/payment',{state:{id:1,planName: planName,price: price,duration: duration, addConsultation: addConsultation}});
    }
  }
  return (
    <div className='plan'>
      <h1 className='plan-name'>{planName}</h1>
      <div className='features'>
        <span>{whatsappGrp.length===0?<FontAwesomeIcon className='wrong' icon={faXmarkSquare}/>:<FontAwesomeIcon className='check' icon={faCheckSquare}/>} <span className='feature'>WhatsApp group: </span>{whatsappGrp}</span>
        <span><FontAwesomeIcon className='check' icon={faCheckSquare}/> <span className='feature'>Basic Medical Queries: </span>{basicMedicalQueries}</span>
        <span>{privateChat.length === 0?<FontAwesomeIcon className='wrong' icon={faXmarkSquare}/>:<FontAwesomeIcon className='check' icon={faCheckSquare}/>} <span className='feature'>Private Chat: </span>{privateChat.length === 0? "NA": privateChat}</span>
        <span>{videoConsultation[0]===0?<FontAwesomeIcon className='wrong' icon={faXmarkSquare}/>:<FontAwesomeIcon className='check' icon={faCheckSquare}/>} <span className='feature'>Video Consultation: </span>{videoConsultation[0]===0? "No" : videoConsultation[0]} free consultation
        </span>
        <span><FontAwesomeIcon className='check' icon={faCheckSquare}/> <span className='feature'>Additional Consultation: </span>{addConsultation}% Discount</span>
        <span>{growthTracking.length===0?<FontAwesomeIcon className='wrong' icon={faXmarkSquare}/>:<FontAwesomeIcon className='check' icon={faCheckSquare}/>} <span className='feature'>Growth tracking for baby: </span>{growthTracking.length===0?"Not Included": growthTracking}</span>
        <form>
          <h3>Select Duration</h3>
          <input id='threeMonth' type='radio' name='duration' value="3 months"  onChange={()=>changePrice(1)}/>
          <label for="threeMonth">3 months</label>
          <input id='sixMonth' type='radio' name='duration' value="6 months" onChange={()=>changePrice(2)}/>
          <label for="sixMonth">6 months</label>
          <input id='oneYear' type='radio' name='duration' value="1 year" onChange={()=>changePrice(3)}/>
          <label for="oneYear">1 year</label>
        </form>
      </div>
      <div className='pay'>
       <span className='error-message'>{errMsg}</span>
       <button className='pay-button' type='submit' onClick={handleSubmit}>Join for {duration} at ₹{price} </button>
      </div>
    </div>
  )
}

export default Plan