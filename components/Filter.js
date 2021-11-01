import React from "react";
import searchStyle from "../styles/Search.module.css";
import Image from "next/image";

const Filter = () => {
  return (
    <div>
      <div className={searchStyle.filterContainer}>
        <ul className={searchStyle.menus}>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635225321/images/searchmenus/webdeveloper_rgo6bs.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>웹 개발자</span>
          </li>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635225325/images/searchmenus/frontend2_n85iln.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>프론트 엔드</span>
          </li>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635225329/images/searchmenus/backend_ccvi97.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>백엔드</span>
          </li>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635225327/images/searchmenus/security_e6pz8s.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>정보보안</span>
          </li>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635225320/images/searchmenus/fontend_bf6owh.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>게임</span>
          </li>
          <li>
            <Image
              src="https://res.cloudinary.com/jenniecloud/image/upload/v1635226358/images/searchmenus/firmbee-com-gcsNOsPEXfs-unsplash_qmpfo4.jpg"
              width={150}
              height={100}
              alt="photo"
            />
            <span>웹 기획</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
