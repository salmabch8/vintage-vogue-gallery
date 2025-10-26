import Header from "@/components/Header";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl text-vintage-text-light leading-relaxed">
            Nous serions ravis d'échanger avec vous
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display font-bold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-decorative uppercase tracking-wider mb-2 text-foreground">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-decorative uppercase tracking-wider mb-2 text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-decorative uppercase tracking-wider mb-2 text-foreground">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-decorative uppercase tracking-wider mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-sm font-decorative uppercase tracking-wider hover:bg-primary/90 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Informations de contact</h2>
              <p className="text-vintage-text-light leading-relaxed mb-8">
                N'hésitez pas à nous contacter pour toute question, suggestion ou collaboration. Nous répondons généralement sous 48 heures.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-vintage-rose rounded-full flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Email</h3>
                  <p className="text-vintage-text-light">contact@vintagemagazine.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-vintage-sage rounded-full flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Téléphone</h3>
                  <p className="text-vintage-text-light">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-vintage-cream rounded-full flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Adresse</h3>
                  <p className="text-vintage-text-light">
                    12 Rue de la Paix<br />
                    75002 Paris, France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-vintage-rose/20 to-vintage-sage/20 p-8 md:p-12 rounded-sm border border-border text-center animate-fade-in">
          <h2 className="text-2xl font-display font-bold mb-4">
            Horaires d'ouverture
          </h2>
          <div className="max-w-md mx-auto text-vintage-text-light space-y-2">
            <p>Lundi - Vendredi : 9h00 - 18h00</p>
            <p>Samedi : 10h00 - 16h00</p>
            <p>Dimanche : Fermé</p>
          </div>
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

export default Contact;
