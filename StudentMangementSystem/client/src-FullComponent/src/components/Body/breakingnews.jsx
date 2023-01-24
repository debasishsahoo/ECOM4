import React from "react";

const breakingnews = (props) => {
  const newsdata = [
    {
      className: "column",
      image: {
        hight: "400",
        width: "370",
        text: "Look at me!",
        alt: "image for article1",
      },
    },
    {
      className: "column",
      image: {
        hight: "400",
        width: "370",
        text: "Look at me!",
        alt: "image for article2",
      },
    },
    {
      className: "column",
      image: {
        hight: "400",
        width: "370",
        text: "Look at me!",
        alt: "image for article3",
      },
    },
    {
      className: "column show-for-medium",
      image: {
        hight: "400",
        width: "370",
        text: "Look at me!",
        alt: "image for article4",
      },
    },
    {
      className: "column show-for-large",
      image: {
        hight: "400",
        width: "370",
        text: "Look at me!",
        alt: "image for article5",
      },
    },
  ];
  return (
    <div className="row small-up-3 medium-up-4 large-up-5">
      {newsdata.map((news, index) => {
        return (
          <div className={news.className} key={index}>
            <img
              src={`https://via.placeholder.com/${news.image.hight}x${news.image.width}&text=${news.image.text}`}
              alt={news.image.alt}
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default breakingnews;
