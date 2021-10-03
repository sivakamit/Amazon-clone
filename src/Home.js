import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
              <div className="home__container">
                  <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser2/GW/4-Desktop-Hero1x_english_._CB418777802_.jpg" />
                  <div className="home__row">
                       <Product id="12321341"
                                title="The Lean Startup: How Constant
                                innovation Creats Radically Successful
                                Business Paperback" 
                                price={29.99}  
                                image="https://kbimages1-a.akamaihd.net/11e082bf-9af2-45ed-a8ee-2b96613d6c78/1200/1200/False/the-lean-startup-3.jpg" 
                                rating={4} />
                       <Product id="49538094"
                                title="Kenwood Kmix Stand Mixer for Baking,
                                Stylish Kitchen Mixer with K-beater, Dough 
                                Hook and Whisk, 5 Litre Glass Bowl"
                                price={239.0}
                                rating={4}
                                image="https://m.media-amazon.com/images/I/618JSuzAhXL._AC_SS350_.jpg" />
                  </div>
                  <div className="home__row">
                       <Product id="2605191199"
                                title="KW10 Android Sports Watch for women, 
                                Smart fitness Bracelet IP68, Waterproof and Heartbeat Monitor"
                                price={149.99}
                                rating={3}
                                image="https://res.tinkleo.com/uploads/goods/14/20190920/850dab2adc224c34a068b9146695c7d7_400X400.jpg" />
                       <Product id="23445930"
                                title="Amazon Echo (3rd generation) | Smart
                                speaker with Alexa, Charcoal Fabric"
                                price={98.99}
                                rating={5}
                                image="https://www.buyitdirect.ie/Images/B0792KWK57_3_LargeProductImage.jpg?v=1" />
                       <Product id="3254354345"
                                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 
                                128GB) - Silver (4th Generation)"
                                price={598.99}
                                rating={4}
                                image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583551131102" />
                  </div>
                  <div className="home__row">
                       <Product id="4903850"
                                title="Samsung LC49RG90SSUXEN 49' Curved
                                LED Gaming Monitor"
                                price={199.99}
                                rating={5}
                                image="https://m.media-amazon.com/images/I/6125mFrzr6L._AC_SS350_.jpg" />
                  </div>
               </div>   
        </div>
    )
}

export default Home
