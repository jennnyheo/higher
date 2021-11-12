import React, { useState } from "react";
import resultStyle from "../../styles/Result.module.css";
import SearchModal from "./SearchModal";
const NoResult = () => {
  const [searchOpen, setSearchOpend] = useState(false);
  return (
    <div className={resultStyle.noResultContainer}>
      <div>
        <p>찾으시는 검색결과가 없습니다.</p>

        <button
          onClick={() => {
            setSearchOpend((prev) => (prev ? false : true));
            console.log(searchOpen);
          }}
        >
          다시 검색하기
        </button>
      </div>
      {searchOpen && <SearchModal setSearchOpend={searchOpen} />}
    </div>
  );
};

export default NoResult;
