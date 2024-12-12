import styled from "styled-components";

//Components
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";
import { Spacer, StyledButton, StyledLink } from "@/components/styledComponents";

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

export default function Voranmeldungen() {
  const registrationStart = new Date("2024-12-05T12:00:00");
  const artistRegistrationEnd = new Date("2025-02-29T23:59:59");
  const vendorRegistrationEnd = new Date("2025-03-15T23:59:59");
  const showactRegistrationEnd = new Date("2025-03-31T23:59:59");
  const workshopRegistrationEnd = new Date("2025-03-31T23:59:59");

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

  return (
    <>
      <h1>Voranmeldungen für die YumeKai 2025</h1>
      {renderInfoText(
        registrationStart,
        "Die Anmeldung ist ab dem 15.12.2024 um 12:00 Uhr möglich."
      )}
      <p>Hier kannst du dich für die YumeKai 2025 voranmelden. Wir freuen uns auf deinen Besuch!</p>

      <ul>
        <li>
          <StyledLink href="#kunstler">Künstler</StyledLink>
        </li>
        <li>
          <StyledLink href="#handler">Händler</StyledLink>
        </li>
        <li>
          <StyledLink href="#showact">Showact</StyledLink>
        </li>
        <li>
          <StyledLink href="#workshopleiter">Workshopleiter</StyledLink>
        </li>
      </ul>

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
            Du möchtest deine Werke auf der YumeKai 2025 ausstellen? Dann ist unsere Künstlerecke
            genau der richtige Ort für dich!
            <br />
            <br />
            Wenn das dein Interesse geweckt hat, fülle das Anmeldeformular für Künstler aus. Sobald
            wir deine Anmeldung erhalten haben, erhältst du von uns eine Bestätigung.
            <br />
            <br />
            Sobald die Bewerbungsphase vorbei ist, werden wir aus allen Anmeldungen eine Auswahl
            treffen und allen Künstler entsprechend Rückmeldung geben.
            <br />
            <br />
            Bei sonstigen Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
            <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt
            unser <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. Bitte beachtet
            die <StyledLink href="">Teilnahme- und Auswahlbedingungen für Künstler</StyledLink>.
            <br />
            <br />
            <strong>Die Anmeldung für Künstler läuft bis zum 29. Februar 2025.</strong>
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
              registrationStart,
              artistRegistrationEnd,
              "/registration/registrationAsArtist",
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
            Ihr wollt einen Stand auf der YumeKai 2025 haben? Dann bewerbt euch jetzt um einen Platz
            für euren Verkaufsstand auf der YumeKai zu bekommen. Alle sind herzlich eingeladen ihre
            Waren rund um die Themen Popkultur und Japanischer Kultur zu verkaufen.
            <br />
            <br />
            Sobald die Bewerbungsphase vorbei ist, werden wir aus allen Anmeldungen eine Auswahl
            treffen und allen Künstler entsprechend Rückmeldung geben.
            <br />
            <br />
            Bei sonstigen Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
            <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt
            unser <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. Bitte beachtet
            die{" "}
            <StyledLink href="">Teilnahme- und Auswahlbedingungen für Verkaufsstände</StyledLink>.
            <br />
            <br />
            <strong>Die Anmeldung für Händler läuft bis zum 15. März 2025.</strong>
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
              registrationStart,
              vendorRegistrationEnd,
              "/registration/registrationAsVendor",
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
            Ihr seid bereit unsere Besucher vom 31.Mai-01.Juni 2025 mit eurem Showact mitzureißen
            und wollt Teil der Veranstaltung werden? 
            <br />
            <br />
            Sobald die Bewerbungsphase vorbei ist, werden wir aus allen Anmeldungen eine Auswahl
            treffen und allen Showacts entsprechend Rückmeldung geben.
            <br />
            <br />
            Bei sonstigen Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
            <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt
            unser <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. Bitte beachtet
            die <StyledLink href="">Teilnahme- und Auswahlbedingungen für Showacts</StyledLink>.
            <br />
            <br />
            <strong>Die Anmeldung für Showact&apos;s läuft bis zum 31. März 2025.</strong>
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
              registrationStart,
              showactRegistrationEnd,
              "/registration/registrationAsShowact",
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
            auch auf der YumeKai 2025 keinesfalls fehlen! Nicht nur informativ, sondern auch der
            fachkundige Austausch über alle Themen rund um Cosplay, Kunst, japanische Kultur und
            vieles mehr machen Workshops so unverzichtbar und großartig.
            <br />
            <br />
            Du hast einen tollen Workshop den du gern auf der YumeKai 2025 vortragen willst? Dann
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
            <strong>Die Anmeldung für Workshopleiter läuft bis zum 31. März 2025.</strong>
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
              registrationStart,
              workshopRegistrationEnd,
              "/registration/registrationAsWorkshop",
              "Anmeldung"
            )}
          </Infobox>
        </DynamicContent>
      </div>

      <Spacer />
    </>
  );
}
