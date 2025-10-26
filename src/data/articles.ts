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
    content: "La mode des années 1950 incarne l'élégance raffinée et la féminité classique. Les silhouettes cintrées, les robes midi et les accessoires délicats définissent une ère de sophistication intemporelle. Aujourd'hui, ces codes stylistiques continuent d'inspirer les créateurs et les amateurs de mode du monde entier."
  },
  {
    id: "2",
    title: "Entre les Pages Anciennes",
    category: "Littérature",
    excerpt: "Une exploration poétique des bibliothèques oubliées et des trésors littéraires qu'elles renferment.",
    image: article2,
    date: "12 Mars 2024",
    author: "Marie Laurent",
    content: "Les vieux livres possèdent une âme particulière. Leurs pages jaunies racontent non seulement l'histoire qu'elles contiennent, mais aussi celle de tous les lecteurs qui les ont feuilletées. Dans le silence d'une bibliothèque ancienne, chaque volume devient un pont entre les époques."
  },
  {
    id: "3",
    title: "Matins Parisiens",
    category: "Voyage",
    excerpt: "L'art de vivre à la française à travers les rituels du petit-déjeuner dans les cafés parisiens.",
    image: article3,
    date: "8 Mars 2024",
    author: "Jean Moreau",
    content: "Il y a quelque chose de magique dans les matins parisiens. La lumière douce qui filtre à travers les fenêtres des cafés, l'arôme du café fraîchement préparé, la texture parfaite d'un croissant tout juste sorti du four. Ces moments simples constituent l'essence même de l'art de vivre français."
  },
  {
    id: "4",
    title: "Herbier Nostalgique",
    category: "Nature",
    excerpt: "L'art ancestral de la conservation des fleurs et sa renaissance dans l'esthétique contemporaine.",
    image: article4,
    date: "5 Mars 2024",
    author: "Claire Dubois",
    content: "L'herbier est bien plus qu'une simple collection de plantes séchées. C'est une forme d'art qui capture la beauté éphémère de la nature pour l'éternité. Chaque fleur pressée raconte une histoire, évoque un souvenir, préserve un instant de beauté naturelle."
  },
  {
    id: "5",
    title: "Sanctuaire de Lecture",
    category: "Décoration",
    excerpt: "Créer des espaces de lecture intimes qui invitent au voyage littéraire et à la contemplation.",
    image: article5,
    date: "1 Mars 2024",
    author: "Antoine Roche",
    content: "Un coin lecture bien conçu est un refuge pour l'esprit. La combinaison d'un fauteuil confortable, d'un bon éclairage et d'une atmosphère chaleureuse crée l'environnement parfait pour se perdre dans un bon livre. C'est un sanctuaire personnel où le temps s'arrête."
  },
  {
    id: "6",
    title: "Ruelles d'Antan",
    category: "Voyage",
    excerpt: "À la découverte des vieilles rues européennes et de leur charme architectural intemporel.",
    image: article6,
    date: "28 Février 2024",
    author: "Henri Bernard",
    content: "Les vieilles rues pavées d'Europe racontent mille histoires. Chaque pierre, chaque façade, chaque détail architectural témoigne d'un passé riche. Se promener dans ces ruelles, c'est voyager dans le temps, découvrir l'âme des villes anciennes."
  },
  {
    id: "7",
    title: "Thé au Jardin",
    category: "Art de Vivre",
    excerpt: "Le rituel du thé dans les jardins fleuris, une tradition de raffinement et de convivialité.",
    image: article7,
    date: "25 Février 2024",
    author: "Isabelle Fontaine",
    content: "Le thé au jardin est une célébration des plaisirs simples de la vie. Entouré de fleurs parfumées, dans la douceur d'un après-midi ensoleillé, chaque tasse devient une expérience sensorielle unique. C'est un moment de partage et de sérénité."
  },
  {
    id: "8",
    title: "Lettres d'Hier",
    category: "Culture",
    excerpt: "L'art perdu de la correspondance manuscrite et son élégance dans un monde numérique.",
    image: article8,
    date: "20 Février 2024",
    author: "Théophile Garnier",
    content: "À l'ère du numérique, l'art de la lettre manuscrite retrouve sa noblesse. Chaque mot tracé à la plume possède une âme, une intention que le clavier ne peut reproduire. Écrire une lettre, c'est offrir un morceau de soi, immortalisé sur le papier."
  },
  {
    id: "9",
    title: "Atelier d'Artiste",
    category: "Art",
    excerpt: "L'intimité créative des ateliers d'artistes et l'inspiration qui naît de ces espaces lumineux.",
    image: article9,
    date: "15 Février 2024",
    author: "Camille Rousseau",
    content: "L'atelier d'artiste est un sanctuaire créatif. La lumière naturelle qui caresse la toile, le désordre organisé des pinceaux et des couleurs, l'odeur de la peinture fraîche - tout contribue à créer une atmosphère propice à l'inspiration et à la création artistique."
  }
];
