import React from "react";

const pagination = () => {
  const pageno = [
    {
      text: "2",
      label: "Page 2",
      txt:""
    },
    {
      text: "3",
      label: "Page 3",
      txt:""
    },
    {
      text: "4",
      label: "Page 4",
      txt:""
    },
  ];
  return (
    <ul className="pagination" role="navigation" aria-label="Pagination">
      <li className="disabled">
        Previous <span className="show-for-sr">page</span>
      </li>
      <li className="current">
        <span className="show-for-sr">You're on page</span> 1
      </li>

      {pageno.map((page, index) => {
        return (
          <li key={index}>
            <a href="#" aria-label={page.label}>
              {page.text}
            </a>
          </li>
        );
      })}

      <li>
        <a href="#" aria-label="Next page">
          Next <span className="show-for-sr">page</span>
        </a>
      </li>
    </ul>
  );
};

export default pagination;
