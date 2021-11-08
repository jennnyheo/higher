import React from "react";
import Image from "next/image";
import bannerStyle from "../../styles/Home.module.css";
const SubBanner = () => {
  return (
    <div className={bannerStyle.SubBannerContainer}>
      <div>
        <Image
          src="https://res.cloudinary.com/jenniecloud/image/upload/v1636390299/images/balloon_1_dysepw.png"
          alt="subnanner"
          width={150}
          height={150}
        />
        <div>
          <strong>더 나은 커리어를 위한 새로운 기회</strong>
          <br />

          <span>
            나에게 딱 맞는 회사를 찾거나 <br />
            나에게 딱 맞는 회사가 커리어를 제안합니다.
          </span>
        </div>
      </div>

      <div className={bannerStyle.dotDivider}></div>
      <div>
        <Image
          src="https://res.cloudinary.com/jenniecloud/image/upload/v1636390295/images/team_wjgrcv.png"
          alt="subnanner"
          width={150}
          height={150}
        />
        <div>
          <strong>실력있는 사람들과 함께하는 성장</strong>
          <br />

          <span>
            강연&밋업에서 이야기를 듣고 공유하며 <br />
            함께 성장하는 기회를 발견합니다.
          </span>
        </div>
      </div>
      <div className={bannerStyle.dotDivider}></div>
      <div>
        <Image
          src="https://res.cloudinary.com/jenniecloud/image/upload/v1636390291/images/lightbulb_zqa3v2.png"
          alt="subnanner"
          width={150}
          height={150}
        />
        <div>
          <strong>원티드와 요즘 직장인이 만드는 행복</strong>
          <br />

          <span>
            직장인 행복을 위한 다양한 이벤트에 참여하고, <br />
            일상 속 여유를 즐기기도 합니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
