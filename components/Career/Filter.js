import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import careerStyle from "../../styles/Career.module.css";
import "../../styles/Career.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Filter = () => {
  const setting = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className={careerStyle.container}>
        <Slider {...setting}>
          {/* <button>
          <FiChevronLeft />
        </button> */}

          <div>
            <span>전체</span>
          </div>
          <div>
            <span>Higher Plus</span>
          </div>
          <div>
            <span>인사</span>
          </div>
          <div>
            <span>Higher Edit</span>
          </div>
          <div>
            <span>커리어</span>
          </div>
          <div>
            <span>기술/IT</span>
          </div>
          <div>
            <span>UX</span>
          </div>
          <div>
            <span>데이터</span>
          </div>
          <div>
            <span>보안</span>
          </div>
          <div>
            <span>웹 기획</span>
          </div>
          <div>
            <span>금융</span>
          </div>

          {/* <button>
          <FiChevronRight />
        </button> */}
        </Slider>
      </div>
    </div>
  );
};

export default Filter;
