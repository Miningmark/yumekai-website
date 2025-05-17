import Image from "next/image";
import { StyledLink, DynamicContent } from "@/components/styledComponents";

//Images
import Spendenubergabe24Image from "/public/assets/images/yumekai-night-2-2024/Spendenubergabe_CoHeKi.jpg";

export default function AnkundigungCosplayVersteigerung() {
  return (
    <>
      <h2>Cosplayer-Versteigerung für den guten Zweck!</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent
          $widthpercent={40}
          //$maxwidth={300}
          $align="center"
          $justify="center"
        >
          <Image
            src={Spendenubergabe24Image}
            alt="Spendenübergabe 2024"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </DynamicContent>
        <DynamicContent $widthpercent={60}>
          <p>
            Auch dieses Jahr freuen wir uns, auf unserer Convention die beliebte
            Cosplayer-Versteigerung gemeinsam mit CoHeKi e.V. (Cosplayer helfen
            Kindern e.V.) durchzuführen! Hier haben Besucher die einzigartige
            Gelegenheit, für eine Stunde am Samstag Nachmittag einen Cosplayer
            zu ersteigern und dabei gleichzeitig etwas Gutes zu tun. Der gesamte
            Erlös der Auktion geht an den Förderkreis für chronisch nierenkranke
            Kinder und Jugendliche Memmingen e. V. (kurz
            &quot;Nierenkinder&quot;).
            <br />
            <br />
            Werde Teil dieser besonderen Aktion!
            <br />
            Letztes Jahr konnten wir gemeinsam unglaubliche 1.555€ durch die
            Cosplayer-Versteigerung und den Spenden am Stand auf der YumeKai
            sammeln. Die Spendenübergabe fand bei der YumeKai - Night live auf
            der Bühne statt, wo die erste Vorsitzende des Vereins, Linda
            Fremuth, die Spende persönlich entgegennehmen durfte. Auch in diesem
            Jahr hoffen wir auf eine große Beteiligung, um erneut eine stolze
            Summe für den guten Zweck zu sammeln!
            <br />
            <br />
            Wie kannst du mitmachen?
            <br />
            Wenn du als Cosplayer Lust hast, dich für den guten Zweck
            &quot;ersteigern&quot; zu lassen, und du mindesten 18 Jahre alt
            bist, dann melde dich jetzt an! Die Teilnehmer der Versteigerung
            stellen sich am Samstag Nachmittag auf der Bühne vor, und die
            Besucher haben die Möglichkeit, auf eine Stunde mit ihrem
            Lieblingscharakter zu bieten.
            <br />
            <br />
            Es gibt keine Anmeldefrist, wir nehmen Cosplayer an, solange der
            Platz reicht. Auch vor Ort sind Anmeldungen noch möglich, sofern es
            noch freie Plätz gibt.
            <br />
            Bewerbung für Cosplayer:{" "}
            <StyledLink
              href="/registration/registrationCosplayAuction"
              target="_blank"
            >
              Anmeldung
            </StyledLink>
            <br />
            <br />
            Lasst uns gemeinsam erneut eine große Summe für die Nierenkinder
            sammeln! Wir freuen uns auf euch!
          </p>
        </DynamicContent>
      </div>
    </>
  );
}
