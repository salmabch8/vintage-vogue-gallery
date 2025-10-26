import Header from "@/components/Header";
import { BookOpen, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            À Propos de Vintage
          </h1>
          <p className="text-xl text-vintage-text-light leading-relaxed">
            Un magazine dédié à l'élégance intemporelle et à l'art de vivre raffiné
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <div className="text-lg leading-relaxed text-foreground space-y-6 animate-fade-in">
            <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-primary">
              Vintage Magazine est né d'une passion pour l'élégance d'antan et d'un désir de préserver les arts et traditions qui ont façonné notre appréciation du beau. Dans un monde en constante accélération, nous croyons en la valeur des choses intemporelles, des savoir-faire ancestraux et de l'attention aux détails.
            </p>
            <p>
              Notre mission est de célébrer la richesse culturelle du passé tout en explorant sa pertinence dans le monde contemporain. Chaque article est une invitation à ralentir, à contempler et à apprécier la beauté qui nous entoure.
            </p>
            <p>
              À travers nos publications, nous explorons divers domaines - de la mode à la gastronomie, de l'architecture à la musique - toujours avec le même souci d'excellence et d'authenticité.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-card rounded-sm border border-border hover:shadow-md transition-shadow animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vintage-rose rounded-full mb-4">
              <BookOpen className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">Notre Vision</h3>
            <p className="text-vintage-text-light">
              Préserver et célébrer l'élégance intemporelle à travers des récits inspirants
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-sm border border-border hover:shadow-md transition-shadow animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vintage-sage rounded-full mb-4">
              <Heart className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">Nos Valeurs</h3>
            <p className="text-vintage-text-light">
              Authenticité, qualité et respect des traditions qui enrichissent nos vies
            </p>
          </div>

          <div className="text-center p-8 bg-card rounded-sm border border-border hover:shadow-md transition-shadow animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vintage-cream rounded-full mb-4">
              <Users className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">Notre Communauté</h3>
            <p className="text-vintage-text-light">
              Des passionnés qui partagent l'amour de la beauté et du raffinement
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-vintage-rose/20 to-vintage-sage/20 p-8 md:p-12 rounded-sm border border-border animate-fade-in">
          <h2 className="text-3xl font-display font-bold mb-4 text-center">
            Rejoignez Notre Histoire
          </h2>
          <p className="text-center text-vintage-text-light max-w-2xl mx-auto">
            Vintage Magazine, c'est avant tout une communauté de personnes qui croient que l'élégance et le raffinement ne se démodent jamais. Ensemble, célébrons la beauté intemporelle.
          </p>
        </div>
      </main>

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

export default About;
