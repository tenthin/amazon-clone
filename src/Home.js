import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <img
            className="home-image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="" 
        />
        {/* Products id, title, price, rating, img*/}
        <Product
          id="12321341"
          title="The lean startup:"
          price={11.96}
          rating={5}
          image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-main-image-1.2.png"
        />
        {/* Products */}
    </div>
  )
}

export default Home;