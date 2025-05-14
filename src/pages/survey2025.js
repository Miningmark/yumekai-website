import Image from "next/image";
import styled from "styled-components";

//Components


//Images


const StyledBG = styled.div`
  background-color: var(--background-color);
  width: 100vw;
  max-width: 1200px;
  padding: 0 0 30px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default function Survey2025(){
     const [selectedDay, setSelectedDay] = useState("");
  const [yumeKaiRating, setYumeKaiRating] = useState(5);
  const [stageProgramRating, setStageProgramRating] = useState(5);
  const [workshopRating, setWorkshopRating] = useState(5);
  const [vendorRating, setVendorRating] = useState(5);
  const [artistRating, setArtistRating] = useState(5);
  const [gameAreaRating, setGameAreaRating] = useState(5);
  const [priceRating, setPriceRating] = useState(5);
  const [bestPart, setBestPart] = useState("");
  const [improvement, setImprovement] = useState("");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [surveyFinish, setSurveyFinish] = useState(false);
  const [formError, setFormError] = useState("");

  const [ipCheckError, setIpCheckError] = useState(false);


    useEffect(() => {
    async function checkIp() {
      try {
        const response = await fetch("/api/check-ip");
        const data = await response.json();
        if (data.exists) {
          setIpCheckError(true);
        }
      } catch (error) {
        //console.error("Fehler bei der IP-Prüfung:", error);
      }
    }
    checkIp();
  }, []);

  async function handleSubmit() {
    event.preventDefault();

    // Validierung
    if (!selectedDay) {
      setFormError("Bitte gebe an wann du auf der YumeKai warst.");
      return;
    }

    const formData = {
      email,
      name,
      selectedDay,
      yumeKaiRating,
      stageProgramRating,
      priceRating,
      workshopRating,
      vendorRating,
      artistRating,
      gameAreaRating,
      bestPart,
      improvement,
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
      } else {
        const result = await response.json();
        //console.error("Fehler beim Einfügen der Daten:", result.error); //TODO: allternative bestätigunsseite wegen bereits eingegebener E-Mail
      }
      setSurveyFinish(true);
    } catch (error) {
      //console.error("Fehler beim Einfügen der Daten:", error);
    }

    // Reset form error
    setFormError("");
  }

  if (ipCheckError) {
    return (
      <StyledBG>
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
      </StyledBG>
    );
  }

    return (<><h1>YumeKai 2025 Umfrage</h1></>)
}