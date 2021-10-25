import React from "react";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <div>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </div>
  );
};

HeadInfo.defaultProps = {
  title: "hired",
  keyword: "hired career",
  contents: "find your career path",
};

export default HeadInfo;
