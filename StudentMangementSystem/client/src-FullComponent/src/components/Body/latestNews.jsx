import React from 'react'
import ArticleRow from './articleRow';
import Pagination from './pagination';
import Followers from './followers';
import Trending from './trending';
import SideHeading from './sideHeading';
const latestNews = () => {
  return (
    <div className="row">
    <div className="large-8 columns" style={{'borderRight':'1px solid #E3E5E8'}}>
      <article>
       <ArticleRow/>

      <Pagination/>
      </article>
    </div>

    <div className="large-4 columns">
      <aside>
        <div className="row small-up-3">
         <Followers/>
        </div>

        <br></br>

        <div className="row column">
          <SideHeading class="lead" text="FROM OUR FRIENDS"/>
         
          <p>
            <img
              src="https://via.placeholder.com/400x300&text=Buy Me!"
              alt="advertisement of ShamWow"
            ></img>
          </p>
        </div>

        <br></br>

        <div className="row column">
          <SideHeading class="lead" text="TRENDING POSTS"/>
          <Trending/>
        </div>
      </aside>
    </div>
  </div>
  )
}

export default latestNews
