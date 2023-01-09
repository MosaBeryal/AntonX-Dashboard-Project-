// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import images
import img1 from '../assets/img/antonx1.jpg'
import img2 from '../assets/img/antonx2.jpg'
import img3 from '../assets/img/antonx3.jpg'
import img4 from '../assets/img/antonX4.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/styles/index.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="img1 " className="rounded"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img2" className="rounded"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img3" className="rounded"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img4" className="rounded"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
