const toValidDate = (value) => {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value;
  }

  const parsedDate = new Date(value);
  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
};

const formatDate = (date) => {
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Berlin",
  });
};

const formatTime = (date) => {
  return date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
  });
};

export const renderRegistrationPeriodText = (startDate, endDate, category) => {
  const now = new Date();
  const validStartDate = toValidDate(startDate);
  const validEndDate = toValidDate(endDate);

  if (!validStartDate || !validEndDate) {
    return <strong>Die Anmeldezeiträume für {category} konnten nicht geladen werden.</strong>;
  }

  if (now < validStartDate) {
    // Anmeldung hat noch nicht begonnen
    return (
      <strong>
        Die Anmeldung für {category} öffnet am{" "}
        {formatDate(validStartDate)}{" "}
        um{" "}
        {formatTime(validStartDate)}{" "}
        Uhr.
      </strong>
    );
  } else if (now >= validStartDate && now <= validEndDate) {
    // Anmeldung läuft
    return (
      <strong>
        Die Anmeldung für {category} läuft bis zum{" "}
        {formatDate(validEndDate)}{" "}
        um{" "}
        {formatTime(validEndDate)}{" "}
        Uhr.
      </strong>
    );
  } else {
    // Anmeldung ist geschlossen
    return (
      <strong>
        Die Anmeldung für {category} ist seit dem{" "}
        {formatDate(validEndDate)}{" "}
        geschlossen.
      </strong>
    );
  }
};
