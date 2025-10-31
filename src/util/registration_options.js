export const REGISTRATION_START_ARTIST = new Date("2025-10-05T12:00:00");
export const REGISTRATION_END_ARTIST = new Date("2025-12-17T18:00:00");

export const REGISTRATION_START_VENDOR = new Date("2025-10-05T12:00:00");
export const REGISTRATION_END_VENDOR = new Date("2025-12-17T18:00:00");

export const REGISTRATION_START_EXHIBITOR = new Date("2025-10-05T12:00:00");
export const REGISTRATION_END_EXHIBITOR = new Date("2025-12-17T18:00:00");

export const REGISTRATION_START_SHOWACT = new Date("2025-10-05T12:00:00");
export const REGISTRATION_END_SHOWACT = new Date("2025-12-17T18:00:00");

export const REGISTRATION_START_WORKSHOP = new Date("2025-10-05T12:00:00");
export const REGISTRATION_END_WORKSHOP = new Date("2025-12-17T18:00:00");

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

export function checkRegistrationPeriod(startDate, endDate) {
  const now = new Date();

  const isActive = now >= startDate && now <= endDate;
  const startsIn = startDate > now ? Math.ceil((startDate - now) / (1000 * 60 * 60 * 24)) : null;
  const endsIn = endDate > now ? Math.ceil((endDate - now) / (1000 * 60 * 60 * 24)) : null;

  let message = "";

  if (now < startDate) {
    message = `Die Anmeldung öffnet am ${startDate.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })} Uhr`;
  } else if (now > endDate) {
    message = `Die Anmeldung ist seit dem ${endDate.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })} Uhr geschlossen`;
  } else {
    message = `Anmeldung möglich bis ${endDate.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })} Uhr`;
  }

  return {
    isActive,
    message,
    startsIn,
    endsIn,
    startDate,
    endDate,
  };
}
