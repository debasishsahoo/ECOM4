import React from "react";

const articleRow = () => {
  const articles = [
    {
      image: {
        hight: "600",
        width: "370",
        text: "Look at me!",
        alt: "article preview image",
      },
      title: "'Death Star' Vaporizes Its Own Planet",
      span: [
        {
          name: "fi-torso",
          text: "By Thadeus",
        },
        {
          name: "fi-calendar",
          text: "11/23/16",
        },
        {
          name: "fi-comments",
          text: "6 comments",
        },
      ],
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: {
        hight: "600",
        width: "370",
        text: "Look at me!",
        alt: "article preview image",
      },
      title: "'NASA's SLS Rocket Sheds Saturn V Color Scheme in Design Review",
      span: [
        {
          name: "fi-torso",
          text: "By Thadeus",
        },
        {
          name: "fi-calendar",
          text: "11/23/16",
        },
        {
          name: "fi-comments",
          text: "6 comments",
        },
      ],
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: {
        hight: "600",
        width: "370",
        text: "Look at me!",
        alt: "article preview image",
      },
      title: "Ingredients for Life Were Always Present on Earth, Comet Suggests",
      span: [
        {
          name: "fi-torso",
          text: "By Thadeus",
        },
        {
          name: "fi-calendar",
          text: "11/23/16 ",
        },
        {
          name: "fi-comments",
          text: "6 comments",
        },
      ],
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: {
        hight: "600",
        width: "370",
        text: "Look at me!",
        alt: "article preview image",
      },
      title: "Astronaut's Watch Worn on the Moon Sells for Record $1.6 Million",
      span: [
        {
          name: "fi-torso",
          text: "By Thadeus ",
        },
        {
          name: "fi-calendar",
          text: "11/23/16 ",
        },
        {
          name: "fi-comments",
          text: "6 comments",
        },
      ],
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: {
        hight: "600",
        width: "370",
        text: "Look at me!",
        alt: "article preview image",
      },
      title: "Interstellar Dust on the Galaxy's Magnetic Field | Space Wallpaper",
      span: [
        {
          name: "fi-torso",
          text: "By Thadeus",
        },
        {
          name: "fi-calendar",
          text: "11/23/16",
        },
        {
          name: "fi-comments",
          text: "6 comments",
        },
      ],
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: {
        hight: "600",
        width: "370",
        text: "Look at me!",
        alt: "article preview image",
      },
      title: "Explore the Moon (Virtually) with These Awesome Global Maps",
      span: [
        {
          name: "fi-torso",
          text: "By Thadeus",
        },
        {
          name: "fi-calendar",
          text: "11/23/16",
        },
        {
          name: "fi-comments",
          text: "6 comments",
        },
      ],
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: {
        hight: "600",
        width: "370",
        text: "Look at me!",
        alt: "article preview image",
      },
      title: "Best Space Books and Sci-Fi: A Space.com Reading List",
      span: [
        {
          name: "fi-torso",
          text: "By Thadeus ",
        },
        {
          name: "fi-calendar",
          text: "11/23/16",
        },
        {
          name: "fi-comments",
          text: "6 comments",
        },
      ],
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    }
  ];
  return (
    <>
      {articles.map((article, index) => {
        return (
          <React.Fragment key={index}>
          <div className="row" >
            <div className="large-6 columns">
              <p>
                <img
                  src={`https://via.placeholder.com/${article.image.hight}x${article.image.width}&text=${article.image.text}`}
                  alt={article.image.alt}
                ></img>
              </p>
            </div>
            <div className="large-6 columns">
              <h5>
                <a href="#">{article.title}</a>
              </h5>
              <p>
                {article.span.map((item, index) => {
                  return (
                    <span key={index}>
                      <i className={item.name}> {item.text}&nbsp;&nbsp;</i>
                    </span>
                  );
                })}
              </p>
              <p>{article.description}</p>
            </div>
          </div>
         <hr></hr>
         </React.Fragment>
          

        );
      })}
 
    
    </>
  );
};
export default articleRow;
