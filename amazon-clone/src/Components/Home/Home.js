import React from 'react'
import "./Home.css"

import Product from "../Product/Product"

function Home() {
    return (
        <div className = "home">
            {/* Home Container */}
            <div className = "home__container">
                <img 
                className= "home__image"
                src= "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg" 
                alt = ""
                 />
            </div>
            {/* Home rows */}
            <div className = "home__row">
                

                <Product   
                id = '54121654561'  
                title = "iPhone 12 - 128GB Blue Apple" 
                price = {879.99}
                image = {"data:image/webp;base64,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"}
                rating = {5} />

                <Product 
                    id = '53213123133'
                 title = "Apple - HomePod mini - White" 
                 price = {99.99}
                 image = {"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6377/6377590_sd.jpg;maxHeight=640;maxWidth=550"}
                 rating = {5}/>
            </div>

            <div className = "home__row">
                <Product 
                id = '884651314496'
                 title = "Rawlings R8U Official League Baseball" 
                 price = {3.99}
                 image = {"https://dks.scene7.com/is/image/GolfGalaxy/16RAWUFFCLLGLB3XXBSB?qlt=70&wid=780&fmt=webp"}
                 rating = {4}/>

               

                <Product  
                id = '426632123212'
                title = "Sony PS5 PlayStation 5 Blu-Ray Edition Console (US Plug) White" 
                price = {899.99}
                image = {"https://stockx.imgix.net/products/collectibles/Sony-Playstation-5-Blu-Ray-Edition-Console-White-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1605297464&w=1000"}
                rating = {5}/>

                <Product 
                id = '651565465465456' 
                title = "HYDRO CELL Stainless Steel Water Bottle w/Straw & Wide Mouth Lids" 
                price = {29.99}
                image = {"https://i-deals.net/wp-content/uploads/2020/07/816ima9tDSL._AC_SL1500_-400x233.jpg"}
                rating = {5}/>
            </div>

            <div className = "home__row">
                <Product  
                id = '1111111163335'
                title = "Dyson AM09 Hot + Cool Bladeless Fan/Heater with Jet Focus" 
                price = {349.99}
                image = {"https://i03.hsncdn.com/is/image/HomeShoppingNetwork/prodfull/dyson-am09-hot-cool-bladeless-fanheater-with-jet-focus-d-20191030174542417~669250_BYN.jpg"}
                rating = {4}/>

                <Product  
                id = '45464146265'
                title = "Apple Watch Series 3 GPS - 38mm - Sport Band - Aluminum Case" 
                price = {179.99}
                image = {"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1ZZH5Cicyrsa5Ss-dS-pC85bIiuOALndWNDxHaBsLaPagA6FKpxL8NreqlWC_MEmGFpzuOEkO4EZ9tc2K7POoK-X5lgo5o_N6qb41b8DZzrvDddMihtxg9w&usqp=CAE"}
                rating = {5}/>  
            </div>

        </div>
    )
}

export default Home
