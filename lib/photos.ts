import heroPortrait from "@/assets/img/hero-portrait.webp";
import heroSkin from "@/assets/img/hero-skin.webp";
import valley from "@/assets/img/m-valley.webp";
import procRoom from "@/assets/img/proc-room.webp";
import safeLoupes from "@/assets/img/safe-loupes.webp";
import safeOr from "@/assets/img/safe-or.webp";
import safeAnesthesia from "@/assets/img/safe-anesthesia.webp";
import safeConsult from "@/assets/img/safe-consult.webp";
import safeSupplies from "@/assets/img/safe-supplies.webp";
import bandAirport from "@/assets/img/band-airport.webp";
import teamLight from "@/assets/img/team-light.webp";
import teamSyringe from "@/assets/img/team-syringe.webp";
import teamDermatoscope from "@/assets/img/team-dermatoscope.webp";
import teamAnesthesia from "@/assets/img/team-anesthesia.webp";
import storyRoom from "@/assets/img/story-room.webp";
import storyCare from "@/assets/img/story-care.webp";
import contactCorridor from "@/assets/img/contact-corridor.webp";

export const photos = {
  heroPortrait,
  heroSkin,
  valley,
  procRoom,
  safeLoupes,
  safeOr,
  safeAnesthesia,
  safeConsult,
  safeSupplies,
  bandAirport,
  teamLight,
  teamSyringe,
  teamDermatoscope,
  teamAnesthesia,
  storyRoom,
  storyCare,
  contactCorridor,
};

export type Credit = { what: string; author: string; url: string; source: string; licence: string; licenceUrl: string };

const BY2 = ["CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/"];
const BY4 = ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/"];
const SA3 = ["CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0/"];
const SA4 = ["CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"];
const CC0 = ["CC0", "https://creativecommons.org/publicdomain/zero/1.0/"];
const PD = ["Public domain", "https://creativecommons.org/publicdomain/mark/1.0/"];

function credit(what: string, author: string, url: string, source: string, [licence, licenceUrl]: string[]): Credit {
  return { what, author, url, source, licence, licenceUrl };
}

export const credits: Credit[] = [
  credit("Retrato / Portrait", "Authentic Stock", "https://stocksnap.io/photo/beauty-skincare-LRSAT4NCLS", "StockSnap", CC0),
  credit("Piel / Skin", "Montavius Howard (TongCreator)", "https://commons.wikimedia.org/wiki/File:Human_skin_close-up.jpg", "Wikimedia Commons", CC0),
  credit("Valle de Medellín / Medellín valley", "CONOCER (Wikivoyage)", "https://commons.wikimedia.org/wiki/File:Valley_of_Medell%C3%ADn-_skyline.jpg", "Wikimedia Commons", PD),
  credit("Sala de tratamiento / Treatment room", "TheExG", "https://commons.wikimedia.org/wiki/File:A_medspa_in_Los_Angeles,_California.jpg", "Wikimedia Commons", SA4),
  credit("Cirujano / Surgeon", "BalikianFacialPlasticSurgery", "https://commons.wikimedia.org/wiki/File:Facial_plastic_surgeon_wearing_surgical_loupes_and_headlight_during_an_operating_room_procedure.jpg", "Wikimedia Commons", BY4),
  credit("Quirófano / Operating room", "Dr. Jayesh Amin", "https://commons.wikimedia.org/wiki/File:Laparoscopic_operating_theatre.jpg", "Wikimedia Commons", SA3),
  credit("Máquina de anestesia / Anaesthesia machine", "Kitmondo Marketplace", "https://commons.wikimedia.org/w/index.php?curid=50226382", "Wikimedia Commons", BY2),
  credit("Consultorio / Consulting room", "Shixart1985", "https://commons.wikimedia.org/wiki/File:Bright_and_modern_beauty_treatment_room.jpg", "Wikimedia Commons", BY2),
  credit("Insumos / Supplies", "Shixart1985", "https://commons.wikimedia.org/wiki/File:Modern_clinic_interior_design.jpg", "Wikimedia Commons", BY2),
  credit("Aeropuerto / Airport", "SajoR", "https://commons.wikimedia.org/wiki/File:Aeropuerto_Jose_Maria_Cordova-Exterior1.JPG", "Wikimedia Commons", PD),
  credit("Foco quirúrgico / Surgical light", "Tyler Frew MD", "https://commons.wikimedia.org/wiki/File:Operating_Room_Surgical_Light_During_Plastic_Surgery_Procedure.jpg", "Wikimedia Commons", SA4),
  credit("Jeringa / Syringe", "ZaldyImg", "https://commons.wikimedia.org/w/index.php?curid=8711582", "Wikimedia Commons", BY2),
  credit("Dermatoscopio / Dermatoscope", "Frank33", "https://commons.wikimedia.org/wiki/File:Dermatoscope1.JPG", "Wikimedia Commons", SA3),
  credit("Equipo de anestesia / Anaesthesia unit", "DiverDave", "https://commons.wikimedia.org/wiki/File:Maquet_Flow-I_anesthesia_machine.jpg", "Wikimedia Commons", SA3),
  credit("Habitación / Recovery room", "norfolkdistrict", "https://www.flickr.com/photos/29327036@N03/4703023576", "Flickr", BY2),
  credit("Acompañamiento / Care", "Direct Media", "https://stocksnap.io/photo/caregiver-nurse-PMZZ7WLOAJ", "StockSnap", CC0),
  credit("Pasillo / Corridor", "Elizabeth Xiong", "https://commons.wikimedia.org/wiki/File:Interior_of_Snow_Clinic_Ansan_branch_in_March_2026.jpg_01.jpg", "Wikimedia Commons", BY4),
];
