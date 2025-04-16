import React from 'react'
import { Link } from 'react-router'

import earrings from "../assets/images/earrings_gif_3.gif"
import rings from "../assets/images/rings_gif_6.gif"
import neckpieces from "../assets/images/neckpieces_gif_4.gif"
import braceletes from "../assets/images/bracelets_gif_4.gif"
import anklets from "../assets/images/copy_of_category_gif_3.gif"
import hairAccess from "../assets/images/hair_accessories_gif_1.gif"
import firstBig from "../assets/images/desi-girl1.jpg"
import secBig from "../assets/images/under-99-1.jpg"
import thirdBig from "../assets/images/ececutive-ensemble-1.jpg"
import forthBig from "../assets/images/party-night1.jpg"
import fifthBig from "../assets/images/funks-quirks-1.jpg"
import whatsApp from "../assets/images/WhatsApp.svg.webp"

const Home = () => {
  return (
    <>
      <div className='bg-white'>
        <ul className='flex'>
          <li> <Link to='/products'><img src={earrings} alt="earrings" /> </Link></li>
          <li> <Link to='/products'><img src={rings} alt="rings" /> </Link></li>
          <li> <Link to='/products'><img src={neckpieces} alt="neckpieces" /> </Link></li>
          <li> <Link to='/products'><img src={braceletes} alt="braceletes" /> </Link></li>
          <li> <Link to='/products'><img src={anklets} alt="anklets" /> </Link></li>
          <li> <Link to='/products'><img src={hairAccess} alt="hairAccessessories" /> </Link></li>
        </ul>

        <Link to='https://wa.me/919389417062'>
        <div className='h-14 w-18 bottom-8 ml-[94%] fixed'>
            <img src={whatsApp} alt="whatsApp" />
        </div>
        </Link>

        <div id='Big-Images' className='gap-10'>
          <div className='justify-center align-center flex p-0.5'>
            <Link to='/products'><img src={firstBig} alt="" /></Link>
          </div>
          <div className='justify-center align-center flex p-0.5'>
            <Link to='/products'><img src={secBig} alt="" /></Link>
          </div>
          <div className='justify-center align-center flex p-0.5'>
            <Link to='/products'><img src={thirdBig} alt="" /></Link>
          </div>
          <div className='justify-center align-center flex p-0.5'>
            <Link to='/products'><img src={forthBig} alt="" /></Link>
          </div>
          <div className='justify-center align-center flex p-0.5'>
            <Link to='/products'><img src={fifthBig} alt="" /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
