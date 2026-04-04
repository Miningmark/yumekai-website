import React from "react";
import { DynamicContent, StyledLink, RegistrationInfobox as Infobox } from "../../styledComponents";
import {
  REGISTRATION_END_COSPLAY_PERFORMANCE,
  REGISTRATION_START_COSPLAY_PERFORMANCE,
} from "@/util/registration_options";
import { renderRegistrationButton } from "@/util/renderRegistrationButton";
import { renderRegistrationPeriodText } from "@/util/renderRegistrationPeriodText";

export default function AnkundigungAnmeldungCosplay() {
    return (
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
           <h2>AnmeldungCosplay Performance Wettbewerb</h2>
           <p>
             Bühne frei für euren großen Auftritt! Bei unserem Cosplay Performance Wettbewerb am
             09.05.2026 steht nicht das Kostüm im Vordergrund, sondern ihr und eure Performance!
             <br />
             <br />
             Egal ob epischer Kampf, emotionale Szene, Comedy-Einlage oder Musical-Nummer: Hier zählt
             allein, wie ihr euren Charakter zum Leben erweckt. Schlüpft in eure Rolle, erzählt eine
             Geschichte und begeistert das Publikum mit eurer Darbietung!
             <br />
             <br />
             Wichtig: Das Cosplay selbst wird nicht bewertet, es geht zu 100 % um Ausdruck,
             Darstellung, Kreativität und Bühnenpräsenz.
             <br />
             Ob Solo oder als Gruppe zeigt uns, was in euch steckt! Nutzt die Bühne, Sound, Licht und
             eure Ideen, um einen unvergesslichen Moment zu schaffen.
             <br />
             <br />
             Bei sonstigen Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
             <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt
             unser <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. Bitte beachtet
             die{" "}
             <StyledLink
               href="/downloads/Cosplay_Performance_Wettbewerb_Teilnahmevorraussetzungen_2026.pdf"
               target="_blank"
             >
               Teilnahmebedingungen für den Cosplay-Performance Wettbewerb
             </StyledLink>
             .
             <br />
             <br />
             {renderRegistrationPeriodText(
               REGISTRATION_START_COSPLAY_PERFORMANCE,
               REGISTRATION_END_COSPLAY_PERFORMANCE,
               "Cosplay-Performance Wettbewerb",
             )}
             <br />
             <br />
             Seid dabei und zeigt uns eure Show!
           </p>
         </DynamicContent>
         <DynamicContent
           $widthpercent={35}
           $maxwidth={300}
           style={{ justifyContent: "center", alignContent: "center" }}
         >
           <Infobox>
             <p>Anmeldung Cosplay-Performance Wettbewerb</p>
             {renderRegistrationButton(
               REGISTRATION_START_COSPLAY_PERFORMANCE,
               REGISTRATION_END_COSPLAY_PERFORMANCE,
               "/registration/cosplayperformance",
               "Anmeldung",
             )}
           </Infobox>
         </DynamicContent>
       </div>
    );
}