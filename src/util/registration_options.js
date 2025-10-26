export const EVENT_ID = 2;

export const TICKET_COST = 42;

export const POWER_COST = 30;

export const WLAN_COST = 10;

export const LOCATION_OPTIONS = [
  { label: "Stadthalle", value: "STADTHALLE", vendor: 50, artist: 10 }, //Künstler 10x9
  { label: "Kolbehaus", value: "KOLBEHAUS", vendor: 40, artist: 8 }, //Künstler 8x9
  { label: "Egal", value: "WHEREEVER", vendor: 50, artist: 10 },
];

export const PROGRAMM_BOOKLET_OPTIONS = [
  { label: "Nein", value: "NO", price: 0 },
  { label: "Viertel Seite (35€)", value: "QUARTER_SITE", price: 35 },
  { label: "Halbe Seite (50€)", value: "HALF_SITE", price: 50 },
  { label: "Ganze Seite (85€)", value: "FULL_SITE", price: 85 },
];

export const VENDOR_STANDSIZE_OPTIONS = [
  { label: "2m x 2m", value: "2X2", price: 4 },
  { label: "2m x 3m", value: "2X3", price: 6 },
  { label: "2m x 4m", value: "2X4", price: 8 },
  { label: "2m x 5m", value: "2X5", price: 10 },
  { label: "2m x 6m", value: "2X6", price: 12 },
  { label: "2m x 7m", value: "2X7", price: 14 },
  { label: "Individuel (Preis auf Anfrage)", value: "INDIVIDUAL", price: 0 },
];

export const ARTIST_STANDSIZE_OPTIONS = [
  { label: "Halber Tisch", value: "HALF_TABLE", price: 5 },
  { label: "Ganzer Tisch", value: "FULL_TABLE", price: 9 },
];

export const COUNTRIES = [
  "Germany",
  "Austria",
  "Belgium",
  "Bulgaria",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Netherlands",
  "Poland",
  "Portugal",
  "Romania",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Croatia",
  "Cyprus",
];

export const SHOWACT_ACCOMODATION_OPTIONS = [
  "Nicht benötigt",
  "wäre gut, aber nicht notwendig",
  "zwingend benötigt",
];
