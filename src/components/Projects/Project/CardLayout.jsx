import { PUBLISHED } from "../../../utils/constants";
import { ArticleCard } from "./ArticleCard";
import "../../../index.css";

export function CardLayout({articles, profile}) {
  const publishedArticles = articles.filter((art) => art.status === PUBLISHED);
  const articlesDisplay = publishedArticles.map((article) => (
    <ArticleCard article={article} profile={profile} key={article.pub_date} />
  ));
  return (
    <>
      <section className="py-6 sm:py-12 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {articlesDisplay}
          </div>
        </div>
      </section>
    </>
  );
}
