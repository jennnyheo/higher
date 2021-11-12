import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import searModalSt from "../../styles/SearhModal.module.css";
const SearchModal = ({ setSearchOpend }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  console.log(searchKeyword);
  const router = useRouter();
  const submithandler = () => {
    console.log(searchKeyword);
  };
  return (
    <div className={searModalSt.container}>
      <div className={searModalSt.header}>
        <form
          method="get"
          action="/search/keyword"
          onSubmit={(e) => {
            if (e.key === "Enter") {
              console.log(searchKeyword);
            }
          }}
        >
          <input
            type="text"
            id="keyword"
            name="keyword"
            placeholder="검색어를 입력해주세요"
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
