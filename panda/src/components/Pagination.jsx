import React from "react";
import "./Pagination.css";
import LeftArrow from "../assets/arrow_left.png";
import RightArrow from "../assets/arrow_right.png";

export default function Pagination({ page, onPageChange, totalPage }) {
  const maxPages = 5;
  let startPage;

  const PrevBtn = () => {
    onPageChange(page - 1);
  };
  const NextBtn = () => {
    onPageChange(page + 1);
  };

  // 현재 페이지를 중심으로 최대 페이지 수의 절반을 계산하여 시작 페이지를 결정
  if (totalPage <= maxPages) {
    // 전체 페이지 수가 최대 페이지 수 이하일 때
    startPage = 1;
  } else {
    // 현재 페이지에서 최대 페이지 수의 절반을 뺀 위치를 시작 페이지로 설정
    startPage = Math.max(page - Math.floor(maxPages / 2), 1);
    // 시작 페이지 + 최대 페이지 수가 전체 페이지 수를 넘지 않도록 조정
    startPage = Math.min(startPage, totalPage - maxPages + 1);
  }

  // 시작 페이지부터 시작하여 최대 페이지 수만큼의 페이지 번호 배열 생성
  const pages = Array.from(
    { length: Math.min(maxPages, totalPage) },
    (_, i) => i + startPage
  );

  return (
    <div className="flex gap-24 my-20">
      <button onClick={PrevBtn} disabled={page === 1} className="paginationBtn">
        <img src={LeftArrow} alt="left arrow" className="w-2 mx-auto my-0" />
      </button>

      {pages.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`paginationBtn ${page === pageNum ? "active" : ""}`}
        >
          {pageNum}
        </button>
      ))}
      <button
        onClick={NextBtn}
        disabled={page === totalPage}
        className="paginationBtn"
      >
        <img src={RightArrow} alt="right arrow" className="w-2 mx-auto my-0" />
      </button>
    </div>
  );
}
