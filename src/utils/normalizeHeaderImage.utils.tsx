import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

export const normalizedHeaderImages = (array: string[]) => {
  const images = array.map((image) => {
    return (
      <SwiperSlide key={image}>
        <img src={image} alt="" />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      className="assortment-item-header__photo"
      centeredSlides
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={600}
      modules={[Autoplay, Pagination, Navigation]}
      navigation
    >
      {images}
    </Swiper>
  );
};
