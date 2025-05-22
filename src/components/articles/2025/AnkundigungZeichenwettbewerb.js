import Image from "next/image";
import { StyledLink, DynamicContent } from "@/components/styledComponents";

//Images
import hiruKunstlerImage from "/public/assets/hirus/Hiru_Kunstler.png";

export default function AnkundigungZeichenwettbewerb() {
  return (
    <>
      <h2>Der YumeKai Zeichenwettbewerb</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent $widthpercent={60}>
          <p>
            Hey, du hast diese unglaubliche Kreativität in dir? Perfekt!
            <br />
            <br />
            Wie wäre es, wenn du unser süßes Maskottchen Hiru in deinem ganz eigenen Stil zum Leben
            erweckst? Lass deiner Fantasie freien Lauf! Ob du Hiru als Genderbend darstellst, in
            alternativen Stilen experimentierst oder in einem völlig anderen Genre platzierst –
            alles ist erlaubt, solange Hiru immer noch erkennbar ist. 🎨✨
            <br />
            <br />
            Es wird einen Jury-Favoriten geben, welcher unter anderem einen Pokal erhält! Außerdem
            wird es für jede Kategorie einen Gewinner geben. (Jedes Bild kann nur in einer Kategorie
            gewinnen.)
            <br />
            <br />
            Folgende Kategorien gibt es:
            <br />
            ⭐ Beste Technik
            <br />
            ⭐ Kreativste Idee
            <br />
            ⭐ Qualität des Gesamtbilds
            <br />
            <br />
            Wir sind super gespannt darauf, was du zauberst! Also schnapp dir deine Lieblingsstifte
            oder öffne dein Grafiktablett – und lass Hiru in deiner Kreativität neu erstrahlen! 🖊
            <br />
            Teilnahme am Zeichenwettbewerb:{" "}
            <StyledLink href="/registration/registrationArtContest" target="_blank">
              Anmeldung
            </StyledLink>
          </p>
        </DynamicContent>
        <DynamicContent $widthpercent={40} $align="center" $justify="center">
          <Image
            src={hiruKunstlerImage}
            alt="Künstler Hiru"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </DynamicContent>
      </div>
    </>
  );
}
