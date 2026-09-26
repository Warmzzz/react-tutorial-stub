import type {Article} from "../types/article.type.ts";
import "./ArticleCard.css";

interface ArticleCardProps {
    article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
    return(
        <article className="article-card">
            <h2>{article.title}</h2>
            <p>{article.body}</p>
        </article>
    )
}