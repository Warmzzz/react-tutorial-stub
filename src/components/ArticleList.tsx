import type {Article} from "../types/article.type.ts";
import SearchBar from "./SearchBar.tsx";
import ArticleCard from "./ArticleCard.tsx";
import {useState} from "react";
import "./ArticleList.css";

interface ArticleListProps {
    articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {

    const [ search, setSearch ] = useState<string>("");

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase()));

    return(
        <div className="article-list">
            <SearchBar value={search} onChange={setSearch} />
            {filteredArticles.length > 0 ? (
                <div className="article-list__grid">
                    {filteredArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <p className="article-list__empty">Aucun article trouvé.</p>
            )}
        </div>
    )
}