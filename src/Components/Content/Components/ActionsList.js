
import style from "../Content.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ActionsList () {

    return (
        
        <section className={style.cWrapper}>
            <h2 className={style.cTitle}>
                Titulo
            </h2>
            <div className={style.cCarousel}>
                <Swiper
                    // modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    >
                    <SwiperSlide className={style.cItem}>Slide 1</SwiperSlide>
                    <SwiperSlide className={style.cItem}>Slide 2</SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default ActionsList;
