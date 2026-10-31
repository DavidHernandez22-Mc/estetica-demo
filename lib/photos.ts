import bedside from "@/assets/img/s-bedside.jpg";
import valley from "@/assets/img/m-valley.jpg";
import drop from "@/assets/img/t-drop.jpg";
import stair from "@/assets/img/s-stair.jpg";
import calla from "@/assets/img/t-calla.jpg";
import atrium from "@/assets/img/s-atrium.jpg";
import table from "@/assets/img/s-table.jpg";
import white from "@/assets/img/b-white.jpg";
import droplets from "@/assets/img/t-droplets.jpg";
import buds from "@/assets/img/t-buds.jpg";
import windowImg from "@/assets/img/s-window.jpg";
import reading from "@/assets/img/p-reading.jpg";
import balcony from "@/assets/img/s-balcony.jpg";
import dusk from "@/assets/img/p-dusk-city.jpg";
import guayacan from "@/assets/img/m-guayacan.jpg";

export const photos = {
  bedside,
  valley,
  drop,
  stair,
  calla,
  atrium,
  table,
  white,
  droplets,
  buds,
  window: windowImg,
  reading,
  balcony,
  dusk,
  guayacan,
};

export type Credit = { what: string; author: string; source: string; url: string; licence: string };

export const credits: Credit[] = [
  { what: "Mesa de noche / Bedside", author: "David Mao", source: "Unsplash", url: "https://unsplash.com/photos/m0l5J8Lqnzo", licence: "Unsplash License" },
  { what: "Valle de Medellín / Medellín valley", author: "CONOCER (Wikivoyage)", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Valley_of_Medell%C3%ADn-_skyline.jpg", licence: "Public domain" },
  { what: "Guayacán (Tabebuia chrysantha)", author: "Jan Smith", source: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Tabebuia_chrysantha_Flowers.jpg", licence: "CC BY 2.0" },
  { what: "Gota / Leaf drop", author: "Shyamanta Baruah", source: "Unsplash", url: "https://unsplash.com/photos/kxqvE41_07k", licence: "Unsplash License" },
  { what: "Escalera / Staircase", author: "Todd Quackenbush", source: "Unsplash", url: "https://unsplash.com/photos/JJB_K8aCPU4", licence: "Unsplash License" },
  { what: "Cala / Calla lily", author: "Marta Pawlik", source: "Unsplash", url: "https://unsplash.com/photos/yqmlajPxR3Y", licence: "Unsplash License" },
  { what: "Cúpula / Atrium", author: "Drew Patrick Miller", source: "Unsplash", url: "https://unsplash.com/photos/VLT62-JzddA", licence: "Unsplash License" },
  { what: "Sala / Room", author: "Breather", source: "Unsplash", url: "https://unsplash.com/photos/DEdM9Vs6s8w", licence: "Unsplash License" },
  { what: "Fachada / Facade", author: "Julien Moreau", source: "Unsplash", url: "https://unsplash.com/photos/688Fna1pwOQ", licence: "Unsplash License" },
  { what: "Gotas / Droplets", author: "Nithya Ramanujam", source: "Unsplash", url: "https://unsplash.com/photos/fTKetYpEKNQ", licence: "Unsplash License" },
  { what: "Botones / Buds", author: "John French", source: "Unsplash", url: "https://unsplash.com/photos/SNW4DWZEy8I", licence: "Unsplash License" },
  { what: "Ventana / Window", author: "Martin Wessely", source: "Unsplash", url: "https://unsplash.com/photos/NYxxuBSQzp4", licence: "Unsplash License" },
  { what: "Lectura / Reading", author: "hieu le", source: "Unsplash", url: "https://unsplash.com/photos/SrkuyPb3aUk", licence: "Unsplash License" },
  { what: "Balcón / Balcony", author: "Dominik Martin", source: "Unsplash", url: "https://unsplash.com/photos/B6uUPYt7wz4", licence: "Unsplash License" },
  { what: "Atardecer / Dusk", author: "Christopher Sardegna", source: "Unsplash", url: "https://unsplash.com/photos/CMOa3H1SXG0", licence: "Unsplash License" },
];
