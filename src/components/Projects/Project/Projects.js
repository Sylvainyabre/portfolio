import React, { useEffect, useState } from "react";
import "./Projects.css";
import "../Project.css"
import axios from "axios";
import ReactPaginate from "react-paginate";
import { ArticleCard } from './ArticleCard';
import {Row,Spinner} from "react-bootstrap"
import { API_URL ,PROFILE_URL,SUCCESS_STATUS} from "../../../utils/constants";
import { CustomPagination } from "./Pagination";


function Projects() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [profile, setProfile] = useState("");
  const articlesPerPage = 4;
  const articlesSeen = pageNumber * articlesPerPage;
  const pageCount = Math.ceil(articles.length / articlesPerPage);
  const pageArticles = articles.slice(
    articlesSeen,
    articlesSeen + articlesPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      if (res.statusText === SUCCESS_STATUS) {
        setArticles(res.data);
        setLoading(false);
      }
    });

  }, []);
  useEffect(() => {
    axios
      .get(PROFILE_URL)
      .then((res) => {
        if (res.statusText === SUCCESS_STATUS) {
          setProfile(res.data);
          setLoading(false);
        }
      });
  }, []);

  const publishedArticles = pageArticles.filter((art)=>art.status === "published").map((article) => (
    
    <ArticleCard article={article}  profile={profile} key={article.pub_date} />
    
  ));
  return (
    <div className="projects-wrapper">
      <div className="projects ">
        {loading ? <Spinner/> : <Row xs={1} md={2} className ="cards">{publishedArticles}</Row>}
        <ReactPaginate
          previousLabel="<<"
          nextLabel=">>"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination-container"
          previousLinkClassName="previous-link"
          nextLinkClassName="next-link"
          disabledClassName="disabled-pagination"
          activeClassName="pagination-active"
        />
        
      </div>
    </div>
  );
}

export default Projects;
