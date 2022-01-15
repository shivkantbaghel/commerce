import react from "react";
import Slider from "react-slick";
import {useEffect} from "react";
import Document from "next/document";
import Head from 'next/head'
import s from './NavSlider.modules.css'


function NavSlider() {
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    
    return (
        <>
        <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>
        {/* <nav class="bg-black">
          <div class="container mx-auto">
            <div class="sm:flex justify-center">
              <p class="text-white text-s p-2"><span class="font-bold">FREE SHIPPING</span> On All Prepaid Orders</p>
            </div>
          </div>
          
      </nav> */}

      {/* // Slider starts Here */}
      <div class="cursor-grabbing bg-black p-2 justify-center">
            <Slider  {...settings}>
                <div>
                    <h3 class="text-white text-center"><span class="font-bold ">FREE SHIPPING</span> On All Prepaid Orders</h3>
                </div>
                <div>
                    <h3 class="text-white text-center justify-center"><span class="font-bold">HASSLE FREE RETURNS</span> 30-Day postage paid returns</h3>
                </div>
                <div>
                    <h3 class="text-white text-center"><span class="font-bold">USE CODE : FLAT200OFF</span> for ₹200 off on cart</h3>
                </div>
            </Slider>
            </div>       
{/* // Slider Ends Here */}
        </>
    )
}

export default NavSlider