import styled from "styled-components";
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";
import { StyledButton } from "@/components/styledComponents";

const DisabledButton = styled(StyledButton)`
  background-color: gray;
  color: white;
  cursor: not-allowed;
`;

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

const isRegistrationOpen = (startDate, endDate) => {
  const now = new Date();
  return now >= startDate && now <= endDate;
};

export const renderRegistrationButton = (startDate, endDate, link, text) => {
  if (isRegistrationOpen(startDate, endDate)) {
    return (
      <StyledLinkAsButton href={link} target="_blank">
        {text}
      </StyledLinkAsButton>
    );
  }
  return <DisabledButton disabled>{text}</DisabledButton>;
};
