import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";
import article5 from "@/assets/article-5.jpg";
import article6 from "@/assets/article-6.jpg";
import article7 from "@/assets/article-7.jpg";
import article8 from "@/assets/article-8.jpg";
import article9 from "@/assets/article-9.jpg";

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "L'Élégance Intemporelle",
    category: "Mode",
    excerpt: "Redécouvrez les silhouettes classiques des années 50 et leur influence sur la mode contemporaine.",
    image: article1,
    date: "15 Mars 2024",
    author: "Sophie Beaumont",
    content: "La mode des années 1950 incarne l'élégance raffinée et la féminité classique. Les silhouettes cintrées, les robes midi et les accessoires délicats définissent une ère de sophistication intemporelle. Aujourd'hui, ces codes stylistiques continuent d'inspirer les créateurs et les amateurs de mode du monde entier.\n\nLes créateurs puisent dans cet héritage pour créer des collections qui marient tradition et modernité. Les tissus nobles, les coupes impeccables et l'attention aux détails restent au cœur de cette esthétique intemporelle."
  },
  {
    id: "2",
    title: "Entre les Pages Anciennes",
    category: "Littérature",
    excerpt: "Une exploration poétique des bibliothèques oubliées et des trésors littéraires qu'elles renferment.",
    image: article2,
    date: "12 Mars 2024",
    author: "Marie Laurent",
    content: "Les vieux livres possèdent une âme particulière. Leurs pages jaunies racontent non seulement l'histoire qu'elles contiennent, mais aussi celle de tous les lecteurs qui les ont feuilletées. Dans le silence d'une bibliothèque ancienne, chaque volume devient un pont entre les époques.\n\nL'odeur du papier ancien, le craquement de la reliure, les annotations marginales... Tous ces éléments témoignent d'une vie littéraire riche et d'un amour des mots qui traverse les générations."
  },
  {
    id: "3",
    title: "Saveurs d'Automne",
    category: "Gastronomie",
    excerpt: "Les recettes traditionnelles qui réchauffent le cœur et célèbrent les produits de saison.",
    image: article3,
    date: "8 Mars 2024",
    author: "Jean Moreau",
    content: "La cuisine d'automne évoque la chaleur du foyer, les longues cuissons mijotées et les saveurs réconfortantes. C'est le temps des courges dorées, des champignons forestiers et des fruits confits qui embaument la maison.\n\nChaque recette traditionnelle transmet un savoir-faire ancestral, une façon de préparer les aliments avec patience et respect des saisons. La gastronomie devient ainsi un art de vivre qui honore le temps qui passe."
  },
  {
    id: "4",
    title: "Mélodies Oubliées",
    category: "Musique",
    excerpt: "Les trésors du jazz vintage et leur influence sur la musique contemporaine.",
    image: article4,
    date: "5 Mars 2024",
    author: "Claire Dubois",
    content: "Le jazz des années 1920 aux années 1950 représente l'âge d'or d'une musique sophistiquée et émotionnelle. Les mélodies des grands maîtres résonnent encore aujourd'hui, influençant de nombreux artistes contemporains.\n\nDes clubs enfumés aux salles de concert prestigieuses, cette musique a traversé le temps en conservant son pouvoir d'évocation unique. Chaque note raconte une histoire, chaque improvisation capture un instant d'émotion pure."
  },
  {
    id: "5",
    title: "L'Âme des Portraits",
    category: "Photographie",
    excerpt: "L'art du portrait argentique et la magie de la chambre noire dans un monde numérique.",
    image: article5,
    date: "1 Mars 2024",
    author: "Antoine Roche",
    content: "La photographie argentique possède une qualité intemporelle que le numérique peine à reproduire. Le grain du film, les nuances subtiles des tirages, le rituel du développement - tout contribue à créer des images dotées d'une profondeur particulière.\n\nDans la chambre noire, chaque photographie devient une œuvre unique. Le photographe ne se contente pas de capturer un instant, il le façonne, le révèle lentement, créant ainsi une véritable alchimie visuelle."
  },
  {
    id: "6",
    title: "Jardins Secrets",
    category: "Nature",
    excerpt: "À la découverte des jardins cachés d'Europe et de leurs histoires millénaires.",
    image: article6,
    date: "28 Février 2024",
    author: "Henri Bernard",
    content: "Les jardins anciens d'Europe sont des havres de paix préservés du tumulte moderne. Derrière de hauts murs de pierre se cachent des écosystèmes minutieusement entretenus depuis des siècles, témoins silencieux de l'histoire.\n\nChaque jardin raconte l'histoire de ceux qui l'ont créé et entretenu. Les allées bordées de buis, les fontaines moussues, les rosiers centenaires - tous ces éléments composent un tableau vivant qui évolue au fil des saisons."
  },
  {
    id: "7",
    title: "Architectures Éternelles",
    category: "Architecture",
    excerpt: "L'élégance des bâtiments art déco et leur influence sur le design moderne.",
    image: article7,
    date: "25 Février 2024",
    author: "Isabelle Fontaine",
    content: "L'architecture art déco des années 1920 et 1930 incarne le luxe et la modernité de son époque. Les lignes géométriques, les matériaux nobles et les détails ornementaux créent une esthétique à la fois raffinée et audacieuse.\n\nCes bâtiments témoignent d'une époque où l'architecture était considérée comme un art total. Chaque façade, chaque détail intérieur était pensé pour créer une expérience esthétique complète, harmonieuse et élégante."
  },
  {
    id: "8",
    title: "Rituels du Matin",
    category: "Art de Vivre",
    excerpt: "Les traditions matinales qui transforment chaque jour en une célébration de l'instant présent.",
    image: article8,
    date: "20 Février 2024",
    author: "Théophile Garnier",
    content: "Le matin établit le ton de toute la journée. Les rituels matinaux - qu'il s'agisse de préparer un café avec soin, de méditer quelques minutes ou de lire quelques pages - créent un espace de calme avant l'agitation quotidienne.\n\nCes moments de solitude et de contemplation sont précieux dans notre monde moderne. Ils nous reconnectent à l'essentiel et nous permettent d'aborder chaque journée avec intention et présence."
  },
  {
    id: "9",
    title: "Cinéma d'Antan",
    category: "Cinéma",
    excerpt: "L'âge d'or du cinéma français et l'élégance intemporelle de ses plus grandes œuvres.",
    image: article9,
    date: "15 Février 2024",
    author: "Camille Rousseau",
    content: "Le cinéma français des années 1950 et 1960 représente un sommet artistique inégalé. Les films de cette époque, en noir et blanc ou en couleurs délicates, capturent une essence de la vie parisienne qui continue de fasciner.\n\nLes acteurs emblématiques, les dialogues ciselés, la photographie soignée - chaque élément contribue à créer des œuvres qui transcendent leur époque. Ces films sont des fenêtres ouvertes sur un monde de sophistication et d'élégance."
  }
];
