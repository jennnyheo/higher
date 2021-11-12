import React from "react";
import Link from "next/link";
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

          <Link href="/career">
            <a>
              <span>전체</span>
            </a>
          </Link>

          <Link href="/career/category?category=Higher Plus">
            <a>
              <span>Higher Plus</span>
            </a>
          </Link>
          <Link href="/career/category?category=인사">
            <a>
              <span>인사</span>
            </a>
          </Link>
          <Link href="/career/category?category=Higher Edit">
            <a>
              <span>Higher Edit</span>
            </a>
          </Link>
          <Link href="/career/category?category=커리어">
            <a>
              <span>커리어</span>
            </a>
          </Link>
          <Link href="/career/category?category=기술/IT">
            <a>
              <span>기술/IT</span>
            </a>
          </Link>
          <Link href="/career/category?category=UX">
            <a>
              <span>UX</span>
            </a>
          </Link>
          <Link href="/career/category?category=데이터">
            <a>
              <span>데이터</span>
            </a>
          </Link>
          <Link href="/career/category?category=보안">
            <a>
              <span>보안</span>
            </a>
          </Link>
          <Link href="/career/category?category=웹 기획">
            <a>
              <span>웹 기획</span>
            </a>
          </Link>
          <Link href="/career/category?category=금융">
            <a>
              <span>금융</span>
            </a>
          </Link>

          {/* <button>
          <FiChevronRight />
        </button> */}
        </Slider>
      </div>
    </div>
  );
};

export default Filter;
