import Columns2 from "@/components/elements/Columns2";
import ConvexBackground from "@/components/elements/ConvexBackground";
import RectangleContainer from "@/components/elements/RectangleContainer";
import { StyledButton, UnstyledLink, SpacerEmpty } from "@/components/styledComponents";

export default function DasSindWir() {
  return (
    <>
      <h1>Das sind wir</h1>
      <p>Zunächst einmal natürlich die wichtigste Frage: „Was ist eigentlich die YumeKai?“</p>
      <p>
        Die YumeKai ist eine Veranstaltung mit dem Schwerpunkt auf Anime, Manga und japanischer
        Populär- und Jugendkultur. Man könnte sie auch als eine Art „Anime-Manga-Convention“
        bezeichnen.
      </p>
      <p>
        Aber die YumeKai ist mehr als das – sie verkörpert auch eine Idee und gewissermaßen einen
        gemeinsamen Traum, den wir zusammen mit euch und allen Fans leben möchten. Unser gesamtes
        Team und jeder unserer Helfer ist auf irgendeine Weise mit Popkultur aufgewachsen, sei es
        durch Videospiele, Animes, Mangas, Filme oder Bücher. Unser Ziel ist es, unsere Leidenschaft
        für unsere und eure Hobbys in verschiedenen Events erlebbar zu machen und einen Ort zu
        schaffen, auf dem wir alle wir sein können.
      </p>
      <SpacerEmpty />
      <ConvexBackground color={1}>
        <h2>{`Unser Motto lautet: "LEB DEINEN TRAUM"`}</h2>
        <p>
          Man kann sich sicherlich denken, woher dieses Motto stammt – natürlich aus dem legendären
          Digimon-Opening! Für uns ist klar: Wenn man dem, was man liebt folgt werden diese Träume
          auch wahr. Genau das verkörpert die Idee der YumeKai für uns – ein Traum, den wir
          gemeinsam mit EUCH verwirklichen möchten!
        </p>
        <p>Zudem bedeutet „Yume“ aus dem Japanischen übersetzt „Traum“.</p>
      </ConvexBackground>
      <SpacerEmpty />
      <Columns2
        left={
          <>
            <h2>Gemeinsam Begeistern</h2>
            <p>
              Was uns als Team vereint, ist die Leidenschaft für das Fantastische – sei es in einer
              weit, weit entfernten Galaxis, auf der Grand Line oder an der Schwertküste. Und diese
              gemeinsame Begeisterung möchten wir mit allen Interessierten, Freunden und Fans
              teilen.
            </p>
            <p>
              Bereits vor der Pandemie im Jahr 2020 begannen die ersten Planungen für eine
              Convention in Süddeutschland in unseren Köpfen – die Pandemie hat vieles erschwert,
              jedoch blieb eine Sache für uns immer klar: Wir möchten die Anime-, Manga-, Cosplay-
              und Nerdszene stärken und verschiedene Events in diesem Bereich für die Community auf
              die Beine stellen.
            </p>
          </>
        }
        right={
          <>
            <RectangleContainer center={1} color={1}>
              <h2>Yumeko</h2>
              <p>
                Unsere Maskottchens Yumeko und Hiru sind ein fester Teil des YumeKai Teams und seit
                Anfang an mit dabei.
              </p>
              <UnstyledLink href={"/maskottchen"}>
                <StyledButton>mehr über uns</StyledButton>
              </UnstyledLink>
            </RectangleContainer>
            <br />
            <RectangleContainer center={1} color={2}>
              <h2>Die Gründer</h2>
              <p>
                Taucht ein in die Hintergrundgeschichte der Yumekai-Gründer, erfahrt hier
                ausführlich über die kreativen Köpfe hinter der Yumekai.
              </p>
              <UnstyledLink href={"/ueber-uns"}>
                <StyledButton>mehr erfahren</StyledButton>
              </UnstyledLink>
            </RectangleContainer>
          </>
        }
      />
    </>
  );
}
