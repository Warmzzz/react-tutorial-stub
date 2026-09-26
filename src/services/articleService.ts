import type {Article} from "../types/article.type.ts";

export class ArticleService {

    private ARTICLE_ENDPOINT = "https://jsonplaceholder.typicode.com/posts"

    async getArticles() {
        const response = await fetch(this.ARTICLE_ENDPOINT);

        if(!response.ok) {
            throw new Error("Erreur lors de la récupération des articles");
        }

        const data = await response.json();
        return data as Article[];
    }

}