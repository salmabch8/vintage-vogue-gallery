import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="group">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
              Vintage
            </h1>
            <p className="text-xs uppercase tracking-widest text-vintage-text-light font-decorative">
              Magazine
            </p>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors font-decorative"
            >
              Articles
            </Link>
            <a
              href="#"
              className="text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors font-decorative"
            >
              À propos
            </a>
            <a
              href="#"
              className="text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors font-decorative"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
