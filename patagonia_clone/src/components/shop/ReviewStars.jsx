import React from "react";

const ReviewStars = ({ rating, reviewCount }) => {
  // 리뷰 개수가 0이면 아무것도 렌더링하지 않음
  if (reviewCount === 0) {
    return null;
  }

  // 별 모양을 반복해서 만들기 위한 함수
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} style={{ color: "#000000" }}>
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} style={{ color: "#ddd" }}>
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div>
      {/* 별점 표시 */}
      <div className="text-lg">
        {renderStars()} <span className="font-bold ml-1">({reviewCount})</span>
      </div>
    </div>
  );
};

export default ReviewStars;
