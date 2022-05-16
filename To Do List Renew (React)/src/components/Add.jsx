import { Swiper, SwiperSlide } from "swiper/react";
import CardView from "./CardView";
import styles from "../css/Add.module.scss"
import 'swiper/css';

const User = ({ inputs }) => {
  console.log(inputs)
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      centeredSlides={true}
      className={styles.swiper}
    >
      {inputs.map((input, key) => {
        return (
          <SwiperSlide className={styles.swiper__slide}>
            <CardView input={input}/>
          </SwiperSlide>
        )
      })
      }
    </Swiper>
  );
}

export default User