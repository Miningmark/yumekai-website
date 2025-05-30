import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//Components
import QuestionRadioButton from "@/components/elements/survey25/QuestionRadioButton";
import QuestionSlider from "@/components/elements/survey25/QuestionSlider";
import QuestionTextField from "@/components/elements/survey25/QuestionTextField";
import QuestionNameEmail from "@/components/elements/survey25/QuestionNameEmail";
import StyledForm from "@/components/elements/survey25/StyledForm";
import { StyledButton } from "@/components/styledComponents";

//Images
import hiruHandy from "/public/assets/hirus/Hiru_Handy.png";

const PrimaryText = styled.span`
  color: var(--primary-color);
`;

const SecondaryText = styled.span`
  color: var(--secondary-color);
`;

export default function Survey2025() {
  const [yumeKaiRating, setYumeKaiRating] = useState(null);
  const [stageProgramRating, setStageProgramRating] = useState(null);
  const [workshopRating, setWorkshopRating] = useState(null);
  const [vendorRating, setVendorRating] = useState(null);
  const [artistRating, setArtistRating] = useState(null);
  const [gameAreaRating, setGameAreaRating] = useState(null);
  const [priceRating, setPriceRating] = useState(null);
  const [cosplayBallRating, setCosplayBallRating] = useState(null);
  const [goldRating, setGoldRating] = useState(null);
  const [bestPart, setBestPart] = useState("");
  const [improvement, setImprovement] = useState("");

  const [haStandPlaceRating, setHaStandPlaceRating] = useState(null);
  const [haPriceRating, setHaPriceRating] = useState(null);
  const [haSupportRating, setHaSupportRating] = useState(null);
  const [haImprovement, setHaImprovement] = useState("");

  const [kuStandPlaceRating, setKuStandPlaceRating] = useState(null);
  const [kuPriceRating, setKuPriceRating] = useState(null);
  const [kuSupportRating, setKuSupportRating] = useState(null);
  const [kuImprovement, setKuImprovement] = useState("");

  const [surveyFinish, setSurveyFinish] = useState(false);
  const [formError, setFormError] = useState("");

  const [alreadyParticipated, setAlreadyParticipated] = useState(null);
  const [ticketId, setTicketId] = useState(null);
  const [ticketDay, setTicketDay] = useState(null); //Sa, So, We, Ba, Go, Ha, Ku, Au als array

  const router = useRouter();

  const deadline = new Date("2025-06-09T21:59:00Z"); // UTC entspricht 23:59 CEST
  const now = new Date();
  const isDeadlinePassed = now > deadline;

  console.log("alreadyParticipated", alreadyParticipated);
  console.log("ticketDay", ticketDay);
  console.log("ticketId", ticketId);

  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      if (query.ticket) {
        setTicketId(query.ticket);
      }
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (!ticketId) return;

    async function checkTicket() {
      try {
        const response = await fetch("/api/survey/checkTicket", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ticketId: ticketId,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data) {
            // Speichert den Wert für bereits teilgenommen
            setAlreadyParticipated(data.alreadyUsed ?? null);

            const ticketDays = data.ticketDay[0].split(",");

            console.log("Ticket-Tag:", ticketDays);

            // Falls ticketDay eine Liste zurückgibt, speichere sie als Array
            setTicketDay(Array.isArray(ticketDays) ? ticketDays : null);
          }
        }
      } catch (error) {
        console.error("Fehler bei der Ticket-Prüfung", error);
      }
    }
    checkTicket();
  }, [ticketId]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      ticketId: ticketId,
      yumeKaiRating: yumeKaiRating ?? 99,
      stageProgramRating: stageProgramRating ?? 99,
      priceRating: priceRating ?? 99,
      workshopRating: workshopRating ?? 99,
      vendorRating: vendorRating ?? 99,
      artistRating: artistRating ?? 99,
      gameAreaRating: gameAreaRating ?? 99,
      cosplayBallRating: cosplayBallRating ?? 99,
      goldRating: goldRating ?? 99,
      haStandPlaceRating: haStandPlaceRating ?? 99,
      haPriceRating: haPriceRating ?? 99,
      haSupportRating: haSupportRating ?? 99,
      haImprovement: haImprovement || "",
      kuStandPlaceRating: kuStandPlaceRating ?? 99,
      kuPriceRating: kuPriceRating ?? 99,
      kuSupportRating: kuSupportRating ?? 99,
      kuImprovement: kuImprovement || "",
      bestPart: bestPart || "",
      improvement: improvement || "",
    };

    try {
      const response = await fetch("/api/submit-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        //console.log("Daten erfolgreich eingefügt:", result.insertId); //TODO: Löschen reselt.insertID
        setSurveyFinish(true);
      } else {
        const result = await response.json();
        //console.error("Fehler beim Einfügen der Daten:", result.error); //TODO: allternative bestätigunsseite wegen bereits eingegebener E-Mail
      }
    } catch (error) {
      //console.error("Fehler beim Einfügen der Daten:", error);
    }

    // Reset form error
    setFormError("");
  }

  if (isDeadlinePassed) {
    //Datum Prüfen
    return (
      <>
        <h1>
          <PrimaryText>YumeKai</PrimaryText>
          <SecondaryText> Umfrage</SecondaryText>
        </h1>
        <p>Die Umfrage lief nur bis zum 09.06.2025 23:59 Uhr.</p>
        <p>
          Danke an alle die teilgenommen haben, die gewinner werden am 17.06.2025 bekannt gegeben.
        </p>
        <Image alt={"Logo"} width={150} height={150} src={hiruHandy} fetchpriority="high" />
      </>
    );
  }

  if (alreadyParticipated === null || ticketDay === null) {
    return (
      <>
        <h1>
          <PrimaryText>YumeKai</PrimaryText>
          <SecondaryText> Umfrage</SecondaryText>
        </h1>
        <p>Umfrage Daten werden geladen, bitte einem moment gedult</p>
        <Image alt={"Logo"} width={150} height={150} src={hiruHandy} fetchpriority="high" />
      </>
    );
  }

  if (alreadyParticipated) {
    return (
      <>
        <h1>
          <PrimaryText>YumeKai</PrimaryText>
          <SecondaryText> Umfrage</SecondaryText>
        </h1>
        <p>Du hast bereits an der Umfrage teilgenommen. Vielen Dank für deine Unterstützung! 😀</p>
        <p>
          Die Umfrage läuft noch bis zum 09.06.2025, 23:59 Uhr. Die Gewinner benachrichtigen wir am
          16.06.2025.
        </p>
        <Image alt={"Logo"} width={150} height={150} src={hiruHandy} fetchpriority="high" />
      </>
    );
  }

  return (
    <>
      <h1>
        <PrimaryText>YumeKai</PrimaryText>
        <SecondaryText> Umfrage</SecondaryText>
      </h1>
      {!surveyFinish && (
        <StyledForm onSubmit={handleSubmit}>
          <p>
            Du warst bei uns auf der YumeKai und möchtest mithelfen die YumeKai noch besser zu
            machen? <br />
            Dann füll doch kurz unsere Umfrage aus und mit etwas Glück gehörst du auch zu den
            Gewinnern, denn unter allen Teilnehmenden verlosen wir drei Tickets für die YumeKai
            2026. Die Umfrage läuft noch bis zum 09.06.2025, 23:59 Uhr. Die Gewinner benachrichtigen
            wir am 16.06.2025.
          </p>

          {ticketDay.includes("Sa") || ticketDay.includes("So") || ticketDay.includes("We") ? (
            <>
              <h2>Allgemeine Fragen</h2>
              <QuestionSlider
                question={"Wie gut hat dir die YumeKai 2024 gefallen?"}
                value={yumeKaiRating}
                onChange={setYumeKaiRating}
              />
              <QuestionSlider
                question={"Wie zufrieden warst du mit dem Bühnenprogramm?"}
                value={stageProgramRating}
                onChange={setStageProgramRating}
              />
              <QuestionSlider
                question={"Wie zufrieden warst du mit den Workshops?"}
                value={workshopRating}
                onChange={setWorkshopRating}
              />
              <QuestionSlider
                question={"Wie zufrieden warst du mit den Händlern?"}
                value={vendorRating}
                onChange={setVendorRating}
              />
              <QuestionSlider
                question={"Wie zufrieden warst du mit dem Künstleratelier?"}
                value={artistRating}
                onChange={setArtistRating}
              />
              <QuestionSlider
                question={"Wie zufrieden warst du mit den Spielbereichen?"}
                value={gameAreaRating}
                onChange={setGameAreaRating}
              />
              <QuestionSlider
                question={"Fandest du das der Preis für das Programm gepasst hat?"}
                value={priceRating}
                onChange={setPriceRating}
              />
              <QuestionTextField
                question={"Was hat dir am besten gefallen?"}
                value={bestPart}
                onChange={setBestPart}
              />

              <QuestionTextField
                question={"Was könnten wir verbessern?"}
                value={improvement}
                onChange={setImprovement}
              />
            </>
          ) : null}

          {ticketDay.includes("Ba") ? (
            <>
              <h2>Cosplayball</h2>
              <QuestionSlider
                question={"Wie hat dir der Cosplayball gefallen?"}
                value={cosplayBallRating}
                onChange={setCosplayBallRating}
              />
            </>
          ) : null}

          {ticketDay.includes("Go") ? (
            <>
              <h2>Goldticket</h2>
              <QuestionSlider
                question={"Wie zufrieden warst du mit der Goldtüte?"}
                value={goldRating}
                onChange={setGoldRating}
              />
            </>
          ) : null}

          {ticketDay.includes("Ha") && (
            <>
              <h2>Händlerstand</h2>
              <QuestionSlider
                question={"Wie zufrieden warst du mit der Lage deiner Standfläche als Händler?"}
                value={haStandPlaceRating}
                onChange={setHaStandPlaceRating}
              />
              <QuestionSlider
                question={"Wie fair fandest du die Standgebühren?"}
                value={haPriceRating}
                onChange={setHaPriceRating}
              />
              <QuestionSlider
                question={"Wie gut war die Organisation und Betreuung für Händler?"}
                value={haSupportRating}
                onChange={setHaSupportRating}
              />
              <QuestionTextField
                question={"Welche Verbesserungen würdest du dir als Händler wünschen?"}
                value={haImprovement}
                onChange={setHaImprovement}
              />
            </>
          )}

          {ticketDay.includes("Ku") && (
            <>
              <h2>Künstlerstand</h2>
              <QuestionSlider
                question={"Wie zufrieden warst du mit der Lage deiner Standfläche als Künstler?"}
                value={kuStandPlaceRating}
                onChange={setKuStandPlaceRating}
              />
              <QuestionSlider
                question={"Wie fair fandest du die Standgebühren für Künstler?"}
                value={kuPriceRating}
                onChange={setKuPriceRating}
              />
              <QuestionSlider
                question={"Wie gut war die Organisation und Betreuung für Künstler?"}
                value={kuSupportRating}
                onChange={setKuSupportRating}
              />
              <QuestionTextField
                question={"Welche Verbesserungen würdest du dir als Künstler wünschen?"}
                value={kuImprovement}
                onChange={setKuImprovement}
              />
            </>
          )}

          <br />

          {/*
          <p>
            Für die Teilnehme an der Verlosung brauchen wir noch deine E-Mail-Adresse und deinen
            Namen.
          </p>

          <QuestionNameEmail
            nameValue={name}
            emailValue={email}
            onNameChange={setName}
            onEmailChange={setEmail}
          />
           */}

          {formError && <p style={{ color: "red" }}>{formError}</p>}

          <StyledButton type="submit">Abschicken</StyledButton>
        </StyledForm>
      )}
      {surveyFinish && (
        <>
          <p>
            Vielen Dank für deine Teilnahme und Unterstützung bei der YumeKai, wir hoffen das wir
            dich auch bei unserer nächsten Veranstaltung begrüßen können! 😀
          </p>
          <p>
            Die Umfrage läuft noch bis zum 09.06.2024, 23:59 Uhr. Die Gewinner benachrichtigen wir
            am 15.06.2024.
          </p>
          <Image alt={"Logo"} width={150} height={150} src={hiruHandy} fetchpriority="high" />
        </>
      )}
    </>
  );
}
