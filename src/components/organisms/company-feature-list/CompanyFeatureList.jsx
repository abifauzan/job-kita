import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CtaCategory from "../../molecules/cta-category";

const companyList = [
  { title: "Apollo", path: "/" },
  { title: "Google", path: "/" },
  { title: "Microsoft", path: "/" },
  { title: "SpaceX", path: "/" },
  { title: "Apollo", path: "/" },
  { title: "Google", path: "/" },
  { title: "Microsoft", path: "/" },
  { title: "SpaceX", path: "/" },
];
const CompanyFeatureList = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h3>Browse Companies</h3>

      <div className="w-full">
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          updateOnImagesReady={true}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 8,
              spaceBetween: 40,
            },
          }}
        >
          {companyList.map((el, index) => (
            <SwiperSlide key={index}>
              <CtaCategory item={{ title: el.title, path: el.path }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CompanyFeatureList;
