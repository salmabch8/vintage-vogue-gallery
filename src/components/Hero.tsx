import heroImage from "@/assets/hero-vintage.jpg";

const Hero = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] bg-muted overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Champs de lavande au coucher du soleil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />
      </div>
      
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-16 md:pb-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-white/90 mb-3 font-decorative">
            Histoires Intemporelles
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">
            L'Art de Vivre à l'Ancienne
          </h2>
          <p className="text-lg text-white/90 max-w-xl leading-relaxed">
            Une collection soigneusement sélectionnée d'articles sur la mode, l'art, 
            la culture et les traditions qui façonnent notre appréciation du beau.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
