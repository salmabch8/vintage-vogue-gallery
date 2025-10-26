import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Articles Récents
          </h2>
          <p className="text-vintage-text-light max-w-2xl mx-auto">
            Plongez dans nos récits inspirants et découvrez des histoires qui 
            célèbrent l'élégance intemporelle et l'art de vivre raffiné.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </main>

      <footer className="bg-card border-t border-border mt-16 md:mt-24">
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

export default Index;
