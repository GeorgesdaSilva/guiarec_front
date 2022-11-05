import React from "react";
import { VideoPreviewCard } from "./VideoPreviewCard";

import * as Dialog from "@radix-ui/react-dialog";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export const vitrineitens = [
  {
    id: "1",
    title: "Carol Santos",
    linkImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    linkvideo: "https://www.youtube.com/watch?v=K4TOrB7at0Y",
  },
  {
    id: "2",
    title: "Guilherme Aguiar",
    linkImg:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    linkvideo: "https://www.youtube.com/watch?v=q_a2_0t5-Ss",
  },
  {
    id: "3",
    title: "Gabriella Rodrigues",
    linkImg:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    linkvideo: "https://www.youtube.com/watch?v=-395GG6wzOg",
  },
  {
    id: "4",
    title: "Silvia Maia",
    linkImg:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    linkvideo: "https://www.youtube.com/watch?v=yP9qLjeKGHk",
  },
  {
    id: "5",
    title: "Higor Miguel",
    linkImg:
      "https://images.unsplash.com/photo-1637249772031-df4717fc3f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    linkvideo: "https://www.youtube.com/watch?v=-395GG6wzOg",
  },
  {
    id: "6",
    title: "Carlos Miguel",
    linkImg:"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkvideo: "https://www.youtube.com/watch?v=-395GG6wzOg",
  },
];

export const VideoPreviewSlider = () => {


  return (
    <div className="ml-2 lg:mx-16">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="ml-6 md:mx-4">
          {vitrineitens.map((item, index) => {
            return (
              <div key={index}>
                <SwiperSlide>
                  <VideoPreviewCard
                    title={item.title}
                    linkImg={item.linkImg}
                    linkvideo={item.linkvideo}
                  />
                </SwiperSlide>
              </div>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};
