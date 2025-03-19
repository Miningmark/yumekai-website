/*

Cosplayer-Versteigerung für den guten Zweck!
Auch dieses Jahr freuen wir uns, auf unserer Convention die beliebte Cosplayer-Versteigerung
gemeinsam mit CoHeki e.V. (Cosplayer helfen Kindern e.V.) durchzuführen! Hier haben Besucher die
einzigartige Gelegenheit, für eine Stunde am Samstag Nachmittag einen Cosplayer zu ersteigern und
dabei gleichzeitig etwas Gutes zu tun.
Der gesamte Erlös der Auktion geht an den Förderkreis für chronisch nierenkranke Kinder und
Jugendliche Memmingen e. V. (kurz "Nierenkinder").
Werde Teil dieser besonderen Aktion!
Letztes Jahr konnten wir gemeinsam unglaubliche 1.555€ durch die Cosplayer-Versteigerung
sammeln. Die Spendenübergabe fand bei unserem nächsten Event, der YumeKai - Night live auf der
Bühne statt, wo die erste Vorsitzende des Vereins, Linda Fremuth, die Spende persönlich
entgegennehmen durfte. Auch in diesem Jahr hoffen wir auf eine große Beteiligung, um erneut eine
stolze Summe für den guten Zweck zu sammeln!
Wie kannst du mitmachen?
Wenn du als Cosplayer Lust hast, dich für den guten Zweck "ersteigern" zu lassen, und du mindesten
18 Jahre alt bist, dann melde dich jetzt an! Die Teilnehmer der Versteigerung stellen sich am Samstag
Nachmittag auf der Bühne vor, und die Besucher haben die Möglichkeit, auf eine Stunde mit ihrem
Lieblingscharakter zu bieten.
Es gibt keine Anmeldefrist, wir nehmen Cosplayer an, solange der Platz reicht. Auch vor Ort sind
Anmeldungen noch möglich, sofern es noch freie Plätz gibt.
Bewerbung für Cosplayer:
ANMELDEBUTTON / LINK
Unterstützung durch Sachspenden
Letztes Jahr gab es zu jedem ersteigerten Cosplayer noch ein weiteres Goodie, welches durch
Händler, Künstler und unsere Sponsoren bereitgestellt wurde. Gerne können auch in diesem Jahr
wieder Sachspenden abgegeben werden, um die Versteigerung zu unterstützen. Falls ihr uns auf diese
Weise helfen möchtet, meldet euch gerne über unser Kontaktformular (mit dem Bereich „Bühne“) bei
uns!
Lasst uns gemeinsam erneut eine große Summe für die Nierenkinder sammeln! Wir freuen uns auf
euch!
GERNE DIE BILDER DER COSPLAY VERSTEIGERUNG +
SPENDENÜBERGABE DAZU PACKEN

*/

import Image from "next/image";
import { StyledLink } from "@/components/styledComponents";
import styled from "styled-components";

//Images
import Spendenubergabe24Image from "/public/assets/images/yumekai-night-2-2024/Spendenubergabe_CoHeKi.jpg";


const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $widthpercent }) => `calc(${$widthpercent}% - 10px)`};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}px;`}

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default function AnkundigungCosplayVersteigerung(){

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
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
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
                Auch dieses Jahr freuen wir uns, auf unserer Convention die beliebte Cosplayer-Versteigerung
                gemeinsam mit CoHeki e.V. (Cosplayer helfen Kindern e.V.) durchzuführen! Hier haben Besucher die
                einzigartige Gelegenheit, für eine Stunde am Samstag Nachmittag einen Cosplayer zu ersteigern und
                dabei gleichzeitig etwas Gutes zu tun.
                <br />
                <br />
                Der gesamte Erlös der Auktion geht an den Förderkreis für chronisch nierenkranke Kinder und
                Jugendliche Memmingen e. V. (kurz "Nierenkinder").
                <br />
                <br />
                Werde Teil dieser besonderen Aktion!
                <br/>
                Letztes Jahr konnten wir gemeinsam unglaubliche 1.555€ durch die Cosplayer-Versteigerung
                sammeln. Die Spendenübergabe fand bei unserem nächsten Event, der YumeKai - Night live auf der
                Bühne statt, wo die erste Vorsitzende des Vereins, Linda Fremuth, die Spende persönlich
                entgegennehmen durfte. Auch in diesem Jahr hoffen wir auf eine große Beteiligung, um erneut eine
                stolze Summe für den guten Zweck zu sammeln!
                <br />
                <br />
                Wie kannst du mitmachen?
                <br />
                Wenn du als Cosplayer Lust hast, dich für den guten Zweck "ersteigern" zu lassen, und du mindesten
                18 Jahre alt bist, dann melde dich jetzt an! Die Teilnehmer der Versteigerung stellen sich am Samstag
                Nachmittag auf der Bühne vor, und die Besucher haben die Möglichkeit, auf eine Stunde mit ihrem
                Lieblingscharakter zu bieten.
                <br />
                <br />
                Es gibt keine Anmeldefrist, wir nehmen Cosplayer an, solange der Platz reicht. Auch vor Ort sind
                Anmeldungen noch möglich, sofern es noch freie Plätz gibt.
                Bewerbung für Cosplayer:
                <StyledLink href="/registration/registrationCosplayAuction" target="_blank">
                    Anmeldung
                </StyledLink>
                <br />
                <br />
                Lasst uns gemeinsam erneut eine große Summe für die Nierenkinder sammeln! Wir freuen uns auf
                euch!
            </p>
        </DynamicContent>
      </div>
    </>
    )
}