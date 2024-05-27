import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/doctor_who_bg.jpg'
import hero_title from '../../assets/dvd_logo.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Mavi kulübeli çılgın bir adam.</p>
          <div className="doctor_buttons">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark_btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Klasik Filmler"} category={"top_rated"}/>
      <TitleCards title={"Değeri Bilinmeyenler"} category={"popular"}/>
      <TitleCards title={"Adam Sandıklarımız"} category={"upcoming"}/>
      <TitleCards title={"İlgini Çekebilecekler"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home