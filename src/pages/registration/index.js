import styled from "styled-components";

//Components
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";
import { Spacer, StyledButton, StyledLink } from "@/components/styledComponents";
import {
  REGISTRATION_START_ARTIST,
  REGISTRATION_END_ARTIST,
  REGISTRATION_START_VENDOR,
  REGISTRATION_END_VENDOR,
  REGISTRATION_START_SHOWACT,
  REGISTRATION_END_SHOWACT,
  REGISTRATION_START_WORKSHOP,
  REGISTRATION_END_WORKSHOP,
  REGISTRATION_START_EXHIBITOR,
  REGISTRATION_END_EXHIBITOR,
} from "@/util/registration_options";

const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $widthpercent }) => `calc(${$widthpercent}% - 10px)`};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}px;`}

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Infobox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: var(--secondary-color);
  border-radius: 10px;
  padding: 35px;

  p {
    color: #363537;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

const DisabledButton = styled(StyledButton)`
  background-color: gray;
  color: white;
  cursor: not-allowed;
`;

const isRegistrationOpen = (startDate, endDate) => {
  const now = new Date();
  return now >= startDate && now <= endDate;
};

const hasRegistrationStarted = (startDate) => {
  const now = new Date();
  return now >= startDate;
};

const hasRegistrationEnded = (endDate) => {
  const now = new Date();
  return now > endDate;
};

export default function Voranmeldungen() {
  const jetzt = new Date();

  // Get earliest registration start date for info message
  const earliestStart = new Date(
    Math.min(
      REGISTRATION_START_ARTIST,
      REGISTRATION_START_VENDOR,
      REGISTRATION_START_EXHIBITOR,
      REGISTRATION_START_SHOWACT,
      REGISTRATION_START_WORKSHOP
    )
  );

  const renderButton = (startDate, endDate, link, text) => {
    if (isRegistrationOpen(startDate, endDate)) {
      return (
        <StyledLinkAsButton href={link} target="_blank">
          {text}
        </StyledLinkAsButton>
      );
    }
    return <DisabledButton disabled>{text}</DisabledButton>;
  };

  const renderInfoText = (startDate, infoText) => {
    if (!hasRegistrationStarted(startDate)) {
      return <h2>{infoText}</h2>;
    }
    return null;
  };

  const renderRegistrationPeriodText = (startDate, endDate, category) => {
    const now = new Date();

    if (now < startDate) {
      // Anmeldung hat noch nicht begonnen
      return (
        <strong>
          Die Anmeldung für {category} öffnet am{" "}
          {startDate.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
          um{" "}
          {startDate.toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          Uhr.
        </strong>
      );
    } else if (now >= startDate && now <= endDate) {
      // Anmeldung läuft
      return (
        <strong>
          Die Anmeldung für {category} läuft bis zum{" "}
          {endDate.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
          um{" "}
          {endDate.toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          Uhr.
        </strong>
      );
    } else {
      // Anmeldung ist geschlossen
      return (
        <strong>
          Die Anmeldung für {category} ist seit dem{" "}
          {endDate.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
          geschlossen.
        </strong>
      );
    }
  };

  return (
    <>
      <h1>Voranmeldungen für die YumeKai 2026</h1>
      {renderInfoText(
        earliestStart,
        `Die Anmeldung ist ab dem ${earliestStart.toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })} um ${earliestStart.toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
        })} Uhr möglich.`
      )}
      <p>
        Sei dabei bei der YumeKai 2026! Melde dich jetzt an und gestalte die Convention mit uns
        gemeinsam.
      </p>

      <ul>
        {/*
        <li>
          <StyledLink href="#helfer">Helfer</StyledLink>
        </li> */}
        <li>
          <StyledLink href="#kunstler">Künstler</StyledLink>
        </li>
        <li>
          <StyledLink href="#handler">Händler</StyledLink>
        </li>
        <li>
          <StyledLink href="#vereine">Fan-Gruppen/Vereine</StyledLink>
        </li>
        <li>
          <StyledLink href="#showact">Showact</StyledLink>
        </li>
        <li>
          <StyledLink href="#workshopleiter">Workshopleiter</StyledLink>
        </li>
      </ul>

      <Spacer id="helfer" />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent $widthpercent={65}>
          <h2>Helfer Anmeldung</h2>
          <p>
            Du wolltest schon immer wissen, wie eine Convention hinter den Kulissen abläuft? Als
            Helfer der YumeKai hast du die einzigartige Chance, spannende Einblicke zu gewinnen,
            neue Leute kennenzulernen und unvergessliche Erlebnisse zu sammeln.
            <br />
            <br />
            Ohne engagierte Helfer und ehrenamtliche Teammitglieder wäre die YumeKai nicht möglich.
            Deshalb freuen wir uns über jeden, der uns unterstützt und die Convention mitgestaltet.
            <br />
            <br />
            Hast du Lust, Teil unseres Teams zu werden und gemeinsam mit uns die YumeKai auf die
            Beine zu stellen? Dann bewirb dich jetzt als Helfer und werde ein wichtiger Teil unseres
            Events!
            <br />
            <br />
            Bei sonstigen Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an{" "}
            <StyledLink href="mailto:helfer@yumekai.de">helfer@yumekai.de</StyledLink> wenden oder
            benutzt unser <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>.
          </p>
        </DynamicContent>
        <DynamicContent
          $widthpercent={35}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Infobox>
            <p>Anmeldung als Helfer</p>
            <StyledLinkAsButton href={"/helfer"}>{"Anmeldung"}</StyledLinkAsButton>
          </Infobox>
        </DynamicContent>
      </div>

      <Spacer id="kunstler" />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent $widthpercent={65}>
          <h2>Anmeldung als Künstler</h2>
          <p>
            Du möchtest deine Werke auf der YumeKai 2026 ausstellen? Dann ist unsere Künstlerecke
            genau der richtige Ort für dich!
            <br />
            <br />
            Wenn das dein Interesse geweckt hat, fülle das Anmeldeformular für Künstler aus. Sobald
            wir deine Anmeldung erhalten haben, erhältst du von uns eine Bestätigung.
            <br />
            <br />
            Sobald die Bewerbungsphase vorbei ist, werden wir aus allen Anmeldungen eine Auswahl
            treffen und allen Künstlern entsprechend Rückmeldung geben.
            <br />
            <br />
            Bei sonstigen Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
            <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt
            unser <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. Bitte beachtet
            die{" "}
            <StyledLink href="/downloads/Teilnahmebedingungen_Kuenstler_2026.pdf" target="_blank">
              Teilnahme- und Auswahlbedingungen für Künstler
            </StyledLink>
            .
            <br />
            <br />
            {renderRegistrationPeriodText(
              REGISTRATION_START_ARTIST,
              REGISTRATION_END_ARTIST,
              "Künstler"
            )}
            <br />
            <br />
            Wir freuen uns auf eure Bewerbung!
          </p>
        </DynamicContent>
        <DynamicContent
          $widthpercent={35}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Infobox>
            <p>Anmeldung als Künstler</p>
            {renderButton(
              REGISTRATION_START_ARTIST,
              REGISTRATION_END_ARTIST,
              "/registration/artist",
              "Anmeldung"
            )}
          </Infobox>
        </DynamicContent>
      </div>

      <Spacer id="handler" />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent $widthpercent={65}>
          <h2>Anmeldung als Händler</h2>
          <p>
            Ihr wollt einen Stand auf der YumeKai 2026 haben? Dann bewerbt euch jetzt um einen Platz
            für euren Verkaufsstand auf der YumeKai zu bekommen. Alle sind herzlich eingeladen ihre
            Waren rund um die Themen Popkultur und Japanischer Kultur zu verkaufen.
            <br />
            <br />
            Sobald die Bewerbungsphase vorbei ist, werden wir aus allen Anmeldungen eine Auswahl
            treffen und allen Händlern entsprechend Rückmeldung geben.
            <br />
            <br />
            Bei sonstigen Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
            <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt
            unser <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. Bitte beachtet
            die{" "}
            <StyledLink href="/downloads/Teilnahmebedingungen_Haendler_2026.pdf" target="_blank">
              Teilnahme- und Auswahlbedingungen für Händler
            </StyledLink>
            .
            <br />
            <br />
            {renderRegistrationPeriodText(
              REGISTRATION_START_VENDOR,
              REGISTRATION_END_VENDOR,
              "Händler"
            )}
            <br />
            <br />
            Wir freuen uns auf eure Bewerbung!
          </p>
        </DynamicContent>
        <DynamicContent
          $widthpercent={35}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Infobox>
            <p>Anmeldung als Händler</p>
            {renderButton(
              REGISTRATION_START_VENDOR,
              REGISTRATION_END_VENDOR,
              "/registration/vendor",
              "Anmeldung"
            )}
          </Infobox>
        </DynamicContent>
      </div>

      <Spacer id="vereine" />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent $widthpercent={65}>
          <h2>Anmeldung als Fan-Gruppe/Verein</h2>
          <p>
            Du möchtest als Fan-Gruppe/Verein auf der YumeKai 2026 dabei sein? Dann ist dies deine
            Chance!
            <br />
            <br />
            Als Fan-Gruppe/Verein hast du die Möglichkeit, deine Produkte, Dienstleistungen oder
            Projekte einem interessierten Publikum zu präsentieren. Ob Vereine, Organisationen oder
            kommerzielle Fan-Gruppe/Verein – wir freuen uns über alle, die die YumeKai mit ihrer
            Präsenz bereichern möchten.
            <br />
            <br />
            Sobald die Bewerbungsphase vorbei ist, werden wir aus allen Anmeldungen eine Auswahl
            treffen und allen Fan-Gruppe/Verein entsprechend Rückmeldung geben.
            <br />
            <br />
            Bei sonstigen Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
            <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt
            unser <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>.
            <br />
            <br />
            {renderRegistrationPeriodText(
              REGISTRATION_START_EXHIBITOR,
              REGISTRATION_END_EXHIBITOR,
              "Fan-Gruppe/Verein"
            )}
            <br />
            <br />
            Wir freuen uns auf eure Bewerbung!
          </p>
        </DynamicContent>
        <DynamicContent
          $widthpercent={35}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Infobox>
            <p>Anmeldung als Fan-Gruppe/Verein</p>
            {renderButton(
              REGISTRATION_START_EXHIBITOR,
              REGISTRATION_END_EXHIBITOR,
              "/registration/exhibitor",
              "Anmeldung"
            )}
          </Infobox>
        </DynamicContent>
      </div>

      <Spacer id="showact" />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent $widthpercent={65}>
          <h2>Anmeldung als Showact</h2>
          <p>
            Zeigt euer Können auf der großen Bühne vor einem Live-Publikum und begeistert die
            Massen!
            <br />
            <br />
            Ihr seid bereit unsere Besucher vom 09.-10. Mai 2026 mit eurem Showact mitzureißen und
            wollt Teil der Veranstaltung werden?
            <br />
            <br />
            Sobald die Bewerbungsphase vorbei ist, werden wir aus allen Anmeldungen eine Auswahl
            treffen und allen Showacts entsprechend Rückmeldung geben.
            <br />
            <br />
            Bei sonstigen Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
            <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt
            unser <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. Bitte beachtet
            die{" "}
            <StyledLink href="/downloads/Infoblatt_Showacts_2026.pdf" target="_blank">
              Teilnahme- und Auswahlbedingungen für Showacts
            </StyledLink>
            .
            <br />
            <br />
            {renderRegistrationPeriodText(
              REGISTRATION_START_SHOWACT,
              REGISTRATION_END_SHOWACT,
              "Showact's"
            )}
            <br />
            <br />
            Wir freuen uns auf eure Bewerbung!
          </p>
        </DynamicContent>
        <DynamicContent
          $widthpercent={35}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Infobox>
            <p>Anmeldung als Showact</p>
            {renderButton(
              REGISTRATION_START_SHOWACT,
              REGISTRATION_END_SHOWACT,
              "/registration/showact",
              "Anmeldung"
            )}
          </Infobox>
        </DynamicContent>
      </div>

      <Spacer id="workshopleiter" />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent $widthpercent={65}>
          <h2>Anmeldung als Workshopleiter</h2>
          <p>
            Großartige Workshops gehören einfach zu einer gelungenen Convention, deshalb dürfen Sie
            auch auf der YumeKai 2026 keinesfalls fehlen! Nicht nur informativ, sondern auch der
            fachkundige Austausch über alle Themen rund um Cosplay, Kunst, japanische Kultur und
            vieles mehr machen Workshops so unverzichtbar und großartig.
            <br />
            <br />
            Du hast einen tollen Workshop den du gern auf der YumeKai 2026 vortragen willst? Dann
            bewirb dich hier.
            <br />
            <br />
            Sobald die Bewerbungsphase vorbei ist, werden wir aus allen Anmeldungen eine Auswahl
            treffen und allen Workshopleitern entsprechend Rückmeldung geben.
            <br />
            <br />
            Bei sonstigen Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
            <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt
            unser <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>.
            <br />
            <br />
            {renderRegistrationPeriodText(
              REGISTRATION_START_WORKSHOP,
              REGISTRATION_END_WORKSHOP,
              "Workshopleiter"
            )}
            <br />
            <br />
            Wir freuen uns auf eure Bewerbung!
          </p>
        </DynamicContent>
        <DynamicContent
          $widthpercent={35}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Infobox>
            <p>Anmeldung als Workshopleiter</p>
            {renderButton(
              REGISTRATION_START_WORKSHOP,
              REGISTRATION_END_WORKSHOP,
              "/registration/workshop",
              "Anmeldung"
            )}
          </Infobox>
        </DynamicContent>
      </div>

      <Spacer />
    </>
  );
}
