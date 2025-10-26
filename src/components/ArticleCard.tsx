import { Link } from "react-router-dom";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link
      to={`/article/${article.id}`}
      className="group block"
    >
      <article className="h-full bg-card rounded-sm overflow-hidden border border-border shadow-sm transition-all duration-300 hover:shadow-md">
        <div className="image-zoom-container aspect-[4/5] bg-muted">
          <img
            src={article.image}
            alt={article.title}
            className="image-zoom w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-wider text-vintage-text-light font-decorative">
              {article.category}
            </span>
            <span className="text-xs text-vintage-text-light">•</span>
            <time className="text-xs text-vintage-text-light">{article.date}</time>
          </div>
          <h2 className="text-xl font-display font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
            {article.title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
          <div className="mt-4 flex items-center text-sm text-vintage-text-light">
            <span className="font-decorative">Par {article.author}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
