import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//Components
import QuestionSlider from "@/components/elements/survey25/QuestionSlider";
import QuestionTextField from "@/components/elements/survey25/QuestionTextField";
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

const GENERAL_TICKET_DAYS = ["Sa", "So", "We", "Go", "Ha", "Ku", "Au"];

//TODO: Datum ändern auf 11.05.2026
const SURVEY_START = new Date("2026-04-11T00:00:00Z");
const SURVEY_DEADLINE = new Date("2026-05-25T21:59:00Z"); // UTC = 23:59 CEST

const nullToDefault = (val, fallback = 99) => val ?? fallback;

export default function Survey2026() {
  const [ratings, setRatings] = useState({
    yumeKai: null,
    stageProgram: null,
    workshop: null,
    vendor: null,
    artist: null,
    gameArea: null,
    price: null,
    cosplayBall: null,
    gold: null,
    haStandPlace: null,
    haPrice: null,
    haSupport: null,
    kuStandPlace: null,
    kuPrice: null,
    kuSupport: null,
    auStandPlace: null,
    auSupport: null,
  });

  const [textFields, setTextFields] = useState({
    bestPart: "",
    improvement: "",
    haImprovement: "",
    kuImprovement: "",
    auImprovement: "",
  });

  const [surveyFinish, setSurveyFinish] = useState(false);
  const [formError, setFormError] = useState("");
  const [loadError, setLoadError] = useState("");

  const [alreadyParticipated, setAlreadyParticipated] = useState(null);
  const [ticketId, setTicketId] = useState(null);
  const [ticketDay, setTicketDay] = useState(null);

  const router = useRouter();

  const now = new Date();
  const isTooEarly = now < SURVEY_START;
  const isDeadlinePassed = now > SURVEY_DEADLINE;

  const setRating = (key) => (value) => setRatings((prev) => ({ ...prev, [key]: value }));

  const setTextField = (key) => (value) => setTextFields((prev) => ({ ...prev, [key]: value }));

  useEffect(() => {
    if (router.isReady) {
      const { query } = router;
      if (query.ticket && query.ticket.length === 5) {
        setTicketId(query.ticket);
      } else {
        setLoadError("Kein gültiger Link gefunden. Bitte verwende den Link aus deiner E-Mail.");
      }
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (!ticketId) return;

    async function checkTicket() {
      try {
        const response = await fetch("https://node.miningmark.de/api/v1/event/survey/validate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ticketId }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data) {
            setAlreadyParticipated(data.message !== "Ticket gültig");
            const ticketDays = data.ticketCategories[0].split(",");
            const cleanedTicketDay = ticketDays.map((day) => day.trim());
            setTicketDay(Array.isArray(cleanedTicketDay) ? cleanedTicketDay : null);
          }
        } else {
          setLoadError("Dieser Link ist nicht gültig oder wurde bereits verwendet.");
        }
      } catch {
        setLoadError("Verbindungsfehler bei der Prüfung. Bitte versuche es später erneut.");
      }
    }

    checkTicket();
  }, [ticketId]);

  async function handleSubmit(event) {
    event.preventDefault();
    setFormError("");

    const isGeneralTicket = GENERAL_TICKET_DAYS.some((d) => ticketDay.includes(d));
    if (isGeneralTicket && ratings.yumeKai === null) {
      setFormError("Bitte bewerte mindestens die YumeKai 2026 insgesamt.");
      return;
    }

    const formData = {
      ticketId,
      conventionRating: ratings.yumeKai,
      stageRating: ratings.stageProgram,
      priceRating: ratings.price,
      workshopRating: ratings.workshop,
      vendorRating: ratings.vendor,
      artistRating: ratings.artist,
      gameAreaRating: ratings.gameArea,
      cosplayBallRating: ratings.cosplayBall,
      specialTicketRating: ratings.gold,
      vendorLocationRating: ratings.haStandPlace,
      vendorPriceRating: ratings.haPrice,
      vendorSupportRating: ratings.haSupport,
      vendorImprovement: textFields.haImprovement,
      artistLocationRating: ratings.kuStandPlace,
      artistPriceRating: ratings.kuPrice,
      artistSupportRating: ratings.kuSupport,
      artistImprovement: textFields.kuImprovement,
      exhibitorLocationRating: ratings.auStandPlace,
      exhibitorSupportRating: ratings.auSupport,
      exhibitorImprovement: textFields.auImprovement,
      bestPart: textFields.bestPart,
      generalImprovement: textFields.improvement,
    };

    try {
      const response = await fetch("https://node.miningmark.de/api/v1/event/survey/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSurveyFinish(true);
      } else {
        setFormError("Beim Speichern ist ein Fehler aufgetreten. Bitte versuche es erneut.");
      }
    } catch {
      setFormError("Verbindungsfehler. Bitte versuche es später erneut.");
    }
  }

  // --- Deadline / Zeitfenster ---
  if (isTooEarly) {
    return (
      <>
        <h1>
          <PrimaryText>YumeKai</PrimaryText>
          <SecondaryText> Umfrage</SecondaryText>
        </h1>
        <p>Die Umfrage startet am 11.05.2026.</p>
        <Image alt={"Logo"} width={150} height={150} src={hiruHandy} fetchPriority="high" />
      </>
    );
  }

  if (isDeadlinePassed) {
    return (
      <>
        <h1>
          <PrimaryText>YumeKai</PrimaryText>
          <SecondaryText> Umfrage</SecondaryText>
        </h1>
        <p>Die Umfrage lief nur bis zum 25.05.2026 23:59 Uhr.</p>
        <p>Danke an alle, die teilgenommen haben!</p>
        <Image alt={"Logo"} width={150} height={150} src={hiruHandy} fetchPriority="high" />
      </>
    );
  }

  // --- Ladefehler (kein Ticket-Parameter o.ä.) ---
  if (loadError) {
    return (
      <>
        <h1>
          <PrimaryText>YumeKai</PrimaryText>
          <SecondaryText> Umfrage</SecondaryText>
        </h1>
        <p style={{ color: "red" }}>{loadError}</p>
        <Image alt={"Logo"} width={150} height={150} src={hiruHandy} fetchPriority="high" />
      </>
    );
  }

  // --- Laden ---
  if (alreadyParticipated === null || ticketDay === null) {
    return (
      <>
        <h1>
          <PrimaryText>YumeKai</PrimaryText>
          <SecondaryText> Umfrage</SecondaryText>
        </h1>
        <p>Umfrage-Daten werden geladen, bitte einen Moment Geduld…</p>
        <Image alt={"Logo"} width={150} height={150} src={hiruHandy} fetchPriority="high" />
      </>
    );
  }

  // --- Bereits teilgenommen ---
  if (alreadyParticipated) {
    return (
      <>
        <h1>
          <PrimaryText>YumeKai</PrimaryText>
          <SecondaryText> Umfrage</SecondaryText>
        </h1>
        <p>Du hast bereits an der Umfrage teilgenommen. Vielen Dank für deine Unterstützung! 😀</p>
        <p>Die Umfrage läuft noch bis zum 25.05.2026, 23:59 Uhr.</p>
        <Image alt={"Logo"} width={150} height={150} src={hiruHandy} fetchPriority="high" />
      </>
    );
  }

  const isGeneralTicket = GENERAL_TICKET_DAYS.some((d) => ticketDay.includes(d));

  return (
    <>
      <h1>
        <PrimaryText>YumeKai</PrimaryText>
        <SecondaryText> Umfrage</SecondaryText>
      </h1>

      {!surveyFinish && (
        <StyledForm onSubmit={handleSubmit}>
          <p>
            Du warst bei uns auf der YumeKai und möchtest mithelfen, die YumeKai noch besser zu
            machen? <br />
            Dann füll doch kurz unsere Umfrage aus! Die Umfrage läuft bis zum 25.05.2026, 23:59 Uhr.
          </p>

          {isGeneralTicket && (
            <>
              <h2>Allgemeine Fragen</h2>
              <QuestionSlider
                question={"Wie gut hat dir die YumeKai 2026 gefallen?"}
                value={ratings.yumeKai}
                onChange={setRating("yumeKai")}
                required
              />
              <QuestionSlider
                question={"Wie zufrieden warst du mit dem Bühnenprogramm?"}
                value={ratings.stageProgram}
                onChange={setRating("stageProgram")}
              />
              <QuestionSlider
                question={"Wie zufrieden warst du mit den Workshops?"}
                value={ratings.workshop}
                onChange={setRating("workshop")}
              />
              <QuestionSlider
                question={"Wie zufrieden warst du mit den Händlern?"}
                value={ratings.vendor}
                onChange={setRating("vendor")}
              />
              <QuestionSlider
                question={"Wie zufrieden warst du mit dem Künstleratelier?"}
                value={ratings.artist}
                onChange={setRating("artist")}
              />
              <QuestionSlider
                question={"Wie zufrieden warst du mit den Spielbereichen?"}
                value={ratings.gameArea}
                onChange={setRating("gameArea")}
              />
              <QuestionSlider
                question={"Fandest du, dass der Preis für das Programm gepasst hat?"}
                value={ratings.price}
                onChange={setRating("price")}
              />
              <QuestionTextField
                question={"Was hat dir am besten gefallen?"}
                value={textFields.bestPart}
                onChange={setTextField("bestPart")}
              />
              <QuestionTextField
                question={"Was könnten wir verbessern?"}
                value={textFields.improvement}
                onChange={setTextField("improvement")}
              />
            </>
          )}

          {ticketDay.includes("Ba") ||
            (ticketDay.includes("Go") && (
              <>
                <h2>Cosplayball</h2>
                <QuestionSlider
                  question={"Wie hat dir der Cosplayball gefallen?"}
                  value={ratings.cosplayBall}
                  onChange={setRating("cosplayBall")}
                />
              </>
            ))}

          {ticketDay.includes("Go") && (
            <>
              <h2>Goldticket</h2>
              <QuestionSlider
                question={"Wie zufrieden warst du mit der Goldtüte?"}
                value={ratings.gold}
                onChange={setRating("gold")}
              />
            </>
          )}

          {ticketDay.includes("Ha") && (
            <>
              <h2>Händlerstand</h2>
              <QuestionSlider
                question={"Wie zufrieden warst du mit der Lage deiner Standfläche als Händler?"}
                value={ratings.haStandPlace}
                onChange={setRating("haStandPlace")}
              />
              <QuestionSlider
                question={"Wie fair fandest du die Standgebühren?"}
                value={ratings.haPrice}
                onChange={setRating("haPrice")}
              />
              <QuestionSlider
                question={"Wie gut war die Organisation und Betreuung für Händler?"}
                value={ratings.haSupport}
                onChange={setRating("haSupport")}
              />
              <QuestionTextField
                question={"Welche Verbesserungen würdest du dir als Händler wünschen?"}
                value={textFields.haImprovement}
                onChange={setTextField("haImprovement")}
              />
            </>
          )}

          {ticketDay.includes("Ku") && (
            <>
              <h2>Künstlerstand</h2>
              <QuestionSlider
                question={"Wie zufrieden warst du mit der Lage deiner Standfläche als Künstler?"}
                value={ratings.kuStandPlace}
                onChange={setRating("kuStandPlace")}
              />
              <QuestionSlider
                question={"Wie fair fandest du die Standgebühren für Künstler?"}
                value={ratings.kuPrice}
                onChange={setRating("kuPrice")}
              />
              <QuestionSlider
                question={"Wie gut war die Organisation und Betreuung für Künstler?"}
                value={ratings.kuSupport}
                onChange={setRating("kuSupport")}
              />
              <QuestionTextField
                question={"Welche Verbesserungen würdest du dir als Künstler wünschen?"}
                value={textFields.kuImprovement}
                onChange={setTextField("kuImprovement")}
              />
            </>
          )}

          {ticketDay.includes("Au") && (
            <>
              <h2>Ausstellerstand</h2>
              <QuestionSlider
                question={"Wie zufrieden warst du mit der Lage deiner Standfläche als Aussteller?"}
                value={ratings.auStandPlace}
                onChange={setRating("auStandPlace")}
              />
              <QuestionSlider
                question={"Wie gut war die Organisation und Betreuung für Aussteller?"}
                value={ratings.auSupport}
                onChange={setRating("auSupport")}
              />
              <QuestionTextField
                question={"Welche Verbesserungen würdest du dir als Aussteller wünschen?"}
                value={textFields.auImprovement}
                onChange={setTextField("auImprovement")}
              />
            </>
          )}

          <br />

          {formError && <p style={{ color: "red" }}>{formError}</p>}

          <StyledButton type="submit">Abschicken</StyledButton>
        </StyledForm>
      )}

      {surveyFinish && (
        <>
          <p>
            Vielen Dank für deine Teilnahme und Unterstützung bei der YumeKai, wir hoffen, dass wir
            dich auch bei unserer nächsten Veranstaltung begrüßen können! 😀
          </p>
          <p>Die Umfrage läuft noch bis zum 25.05.2026, 23:59 Uhr.</p>
          <Image alt={"Logo"} width={150} height={150} src={hiruHandy} fetchPriority="high" />
        </>
      )}
    </>
  );
}
