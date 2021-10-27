import Link from "next/link";

type ArticleListProps = {
  articles: Article[];
};

type Article = {
  filePath: string;
  metadata: {
    title: string;
  };
};

export const ArticleList = ({ articles }: ArticleListProps) => (
  <>
    {articles.length > 0 ? (
      <ul className="py-4">
        {articles.map((article: Article) => (
          <li key={article.filePath} className="pb-8">
            <article>
              <Link href={article.metadata.title}>
                <a>{article.metadata.title}</a>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    ) : (
      <>Sorry there are no articles matching your query</>
    )}
  </>
);
