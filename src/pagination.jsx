import React from "react";

const Pagination = ({ btn, setNewPageNum }) => {
  console.log(btn);
  return (
    <div className="flex flex-row items-center justify-between px-10">
      {(btn === "prev" || btn === "both") && (
        <div
          className="ring-2 ring-gray-200 rounded-sm px-4 py-2 cursor-pointer dark:bg-white dark:text-gray-900"
          onClick={() => setNewPageNum("prev")}
        >
          Previous
        </div>
      )}

      <div className="flex-1"></div>

      {(btn === "next" || btn === "both") && (
        <div
          className="ring-2 ring-gray-200 rounded-sm px-4 py-2 cursor-pointer dark:bg-white dark:text-gray-900"
          onClick={() => setNewPageNum("next")}
        >
          Next
        </div>
      )}
    </div>
  );
};

export default Pagination;
