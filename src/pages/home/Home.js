import React from 'react';
import "./Home.css";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Plan from '../../components/plans/Plan';
import { planlist } from '../../Planlist';
function Home() {
  return (
    <>
      {/*Header*/}
      <Header type="homepage" />
      <div className='home'>
        <h1>Unlock worry free parenting for you</h1>
        <p>Get Pediatrician led holistic care for your baby</p>
        <div className='plans'>
          {
            planlist.map( each =>{
              return<Plan key={each.id} each={each}/>
            })
          }
        </div>
      </div>
      {/*Footer*/}
      <Footer />
    </>
  )
}
export default Home