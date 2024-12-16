import React from "react";

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden" // 기본 체크박스 숨기기
      />
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 border-gray-300  ${
          checked ? "bg-gray-300" : "bg-gray-300"
        } transition duration-200`}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </label>
  );
};

export default CustomCheckbox;
