import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { articles } from "@/data/articles";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-vintage-text-light hover:text-primary transition-colors mb-8 font-decorative"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux articles
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm uppercase tracking-wider text-vintage-text-light font-decorative">
              {article.category}
            </span>
            <span className="text-sm text-vintage-text-light">•</span>
            <time className="text-sm text-vintage-text-light">{article.date}</time>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-vintage-text-light leading-relaxed mb-6">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 text-sm text-vintage-text-light">
            <span className="font-decorative">Par</span>
            <span className="font-semibold">{article.author}</span>
          </div>
        </div>

        <div className="image-zoom-container mb-12 rounded-sm overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="image-zoom w-full aspect-[16/10] object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="text-lg leading-relaxed text-foreground space-y-6">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-primary">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-display font-bold mb-6">Continuer la lecture</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {articles
                .filter((a) => a.id !== article.id)
                .slice(0, 3)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/article/${relatedArticle.id}`}
                    className="group"
                  >
                    <div className="image-zoom-container aspect-[4/5] rounded-sm overflow-hidden mb-3">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="image-zoom w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-display font-semibold group-hover:text-primary transition-colors">
                      {relatedArticle.title}
                    </h4>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-2">Vintage</h3>
            <p className="text-sm text-vintage-text-light font-decorative mb-6">
              Magazine d'élégance et de raffinement
            </p>
            <p className="text-xs text-vintage-text-light">
              © 2024 Vintage Magazine. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetail;
