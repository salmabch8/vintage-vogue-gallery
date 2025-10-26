import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors font-decorative"
            >
              Articles
            </Link>
            <Link
              to="/about"
              className="text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors font-decorative"
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors font-decorative"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors font-decorative py-2"
              >
                Articles
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors font-decorative py-2"
              >
                À propos
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors font-decorative py-2"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
