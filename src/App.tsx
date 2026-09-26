import {useEffect, useState} from "react";
import type {Article} from "./types/article.type.ts";
import {ArticleService} from "./services/articleService.ts";
import ArticleList from "./components/ArticleList.tsx";
import "./App.css";

export default function App() {

    const [ articles, setArticles ] = useState<Article[]>([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState<Error>();

    useEffect(() => {
        const articleService = new ArticleService();
        articleService.getArticles()
            .then(articles => setArticles(articles))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }, []);

    return(
        <main className="app">
            <section className="app__hero">
                <p className="app__eyebrow">Découvre, filtre, lis</p>
                <h1 className="app__title">Explorateurs d'articles</h1>
                <p className="app__subtitle">Une petite collection d’articles avec une recherche instantanée.</p>
            </section>

            <section className="app__content">
                {error && <p className="error">{error.message}</p>}

                {isLoading ? (
                    <p className="app__status">Chargement...</p>
                ) : (
                    <ArticleList articles={articles} />
                )}
            </section>

        </main>
    )
}