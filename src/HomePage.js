import React from 'react'
import "./HomePage.css"
import Products from './Products'
import banner from './MetronicsBanner.gif'
function HomePage() {
    return (
        <div className="Home">
            <div className="home-container">
                    <img className="home-image" src="https://images.unsplash.com/photo-1592480859808-9c93f6e8218e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                

            <div className="home-row">
            <Products 
            id="1"
             title="OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage) "
             info="OxygenOS | Qualcomm Snapdragon 765G 5G | 48MP + 8MP + 5MP + 2MP Quad-Rear Camera | 32MP + 8MP Front Dual-Camera   "
             image="https://m.media-amazon.com/images/I/71gag816F7L._AC_UY327_FMwebp_QL65_.jpg"
             rating={4}
             price={27999} 
             />
            <Products 
            id="2"
            title="Apple iPhone 12 Pro Max"
            info="256GB ROM, 17.02 cm(6.7 inch), Super Retina XDR Display, A14 Bionic Chip, 12MP + 12MP + 12MP | 12MP Front Camera  (Pacific Blue)"
            image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
            price={134990}
            />
            <Products
            id="3"
            title="Sony WH-CH710N"
            info="Noise Cancelling Wireless Headphones: Bluetooth Over The Ear Headset with Mic for Phone-Call, 35 Hours Battery Life,Google Assistant-Blue"
            image="https://m.media-amazon.com/images/I/61rEoEQqn0L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
            price={7990}
            />            
            </div>

            <div className="home-row">
            <Products
            id="4" 
            title="Acer Aspire 5" info="Slim A515-55 15.6-inch Laptop (Core i5-1035G1/8GB/1TB HDD + 256GB SSD/Window 10, Home, 64Bit/Intel UHD Graphics), Silver"
            image="https://m.media-amazon.com/images/I/71swcuBZOBL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
            price={59990}
            />
            <Products
            id="5" 
             title="MSI NVIDIA GeForce RTX 3070"
             info="Ventus 3X OC 8GB GDDR6 Gaming Graphic Card I PCI Express Gen 4 I 256-bit I DisplayPort x 3 (v1.4a) / HDMI 2.1 x 1"
             image="https://m.media-amazon.com/images/I/71uvMZnDThL._AC_UY327_FMwebp_QL65_.jpg"
             rating={5}
             price={67999}
            />


            </div>

            <div className="home-row">
                <Products
                id="6"
                title="CyberPunk 2077 (PS4)"
                image="https://m.media-amazon.com/images/I/81oT6HYD5sL._AC_UY327_FMwebp_QL65_.jpg"
                rating={4}
                price={3999} />

                <Products
                id="7"
                title="Call of Duty Black Ops Cold War (PS4)"
                info=""
                image="https://m.media-amazon.com/images/I/81cYBaaAQKL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                price={4990} />
                <Products
                id="8"
                title="Marvel's Spider-Man:Miles Morales (PS4)"
                image="https://m.media-amazon.com/images/I/811umGHYORL._AC_UY327_FMwebp_QL65_.jpg"
                rating={4}
                price={3499} />
                <Products
                id="9"
                title="FIFA 21 Champions Edition (PS4)"
                image="https://m.media-amazon.com/images/I/81-sClzQ2AL._AC_UY327_FMwebp_QL65_.jpg"
                rating={3}
                price={5499}
                />
                  <Products
                  id="10"
                title="Ghost of Tsushima (PS4)"
                image="https://m.media-amazon.com/images/I/81jyRkf9qjL._AC_UY327_FMwebp_QL65_.jpg"
                rating={3}
                price={5499}
                />

            </div>



            </div>
            
        </div>
    )
}

export default HomePage
