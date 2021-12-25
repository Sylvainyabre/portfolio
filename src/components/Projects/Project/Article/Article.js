import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./Article.css";
import { setArticleURL, setAuthorURL, SUCCESS_STATUS } from "../../../../utils/constants";
import Prism from "prismjs";
import "../../../../utils/prism.css"
const HtmlToReactParser = require("html-to-react").Parser;
const htmlToReactParser = new HtmlToReactParser();



const Article = () => {
  const { articleId } = useParams();

  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    axios
      .get(setArticleURL(articleId))
      .then((res) => {
        if (res.statusText === SUCCESS_STATUS) {
          setArticle(res.data);
          setLoading(false);
        }
      });
  }, [articleId]);

  useEffect(() => {
     
    axios
      .get(setAuthorURL(article))
      .then((res) => {
        if (res.statusText === SUCCESS_STATUS) {
          setAuthor(res.data);
          setLoading(false);
        }
      });
  }, [article.author,article]);
  useEffect(() => {
    Prism.highlightAll();
  });

  const result = htmlToReactParser.parse(article.content);
 
  const articleDisplay = (
    <div className="article_display container">
      <h1>
        <span className="display_title article">{article.title}</span>
      </h1>
      <hr className="title_divider" />
      <div className="signature">
        <h6 className="text-muted">
          <i>Published on {new Date(article.pub_date).toDateString()} by {author.first_name} {author.last_name}</i>
        </h6>
      </div>
      <hr />
      <div className="article-content">{result}</div>
    </div>
  );
  return <div className="article_page">{loading ? <h4>loading...</h4> : articleDisplay}</div>;
};

export default Article;
