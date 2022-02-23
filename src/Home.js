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
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup: How Constant Innovation Created"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
          />
          <Product
            id="12321341"
            title="The lean startup: How Constant Innovation Created"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup: How Constant Innovation Created"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
          />
          <Product
            id="12321341"
            title="The lean startup: How Constant Innovation Created"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
          />
          <Product
            id="12321341"
            title="The lean startup: How Constant Innovation Created"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup: How Constant Innovation Created"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
          />
        </div>
        {/* Products */}
    </div>
  )
}

export default Home;