import styled from "styled-components";
import Script from "next/script";
import Banner from "@/components/shop/Banner";
import { StyledLink } from "@/components/styledComponents";
import { DynamicContent } from "@/components/styledComponents";
import Image from "next/image";

import crowdfundingImage_1 from "/public/assets/images/crowdfunding/Yumekai_collage_1.png";
import crowdfundingImage_2 from "/public/assets/images/crowdfunding/Yumekai_collage_2.png";
import crowdfundingImage_3 from "/public/assets/images/crowdfunding/Yumekai_collage_3.png";
import crowdfundingImage_4 from "/public/assets/images/crowdfunding/Yumekai_collage_4.png";
import crowdfundingImage_5 from "/public/assets/images/crowdfunding/Yumekai_collage_5.png";
import crowdfundingImage_6 from "/public/assets/images/crowdfunding/Yumekai_collage_6.png";
import crowdfundingImage_7 from "/public/assets/images/crowdfunding/Yumekai_collage_7.png";
import crowdfundingImage_8 from "/public/assets/images/crowdfunding/Yumekai_collage_8.png";
import crowdfundingImage_9 from "/public/assets/images/crowdfunding/Yumekai_collage_9.png";
import crowdfundingImage_10 from "/public/assets/images/crowdfunding/Yumekai_collage_10.png";
import crowdfundingImage_11 from "/public/assets/images/crowdfunding/Yumekai_collage_11.png";
import crowdfundingImage_12 from "/public/assets/images/crowdfunding/Yumekai_collage_12.png";

const DynamicContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export default function Shop() {
  return (
    <>
      <Script
        src="https://pretix.eu/widget/v1.de.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />

      <h1>YumeKai Crowdfunding</h1>
      <p>
        Wir sind die YumeKai, eine kleine, leidenschaftlich organisierte Convention im Süden
        Bayerns. Am 31. Mai und 1. Juni 2025 durften wir bereits zum zweiten Mal zahlreiche
        Besucherinnen und Besucher in Memmingen willkommen heißen.
        <br />
        Unser Ziel ist es, Menschen jeden Alters die japanische und westliche Popkultur
        näherzubringen und ihnen ein unvergessliches Wochenende zu bereiten. Besonders stolz sind
        wir auf unser vielfältiges Bühnenprogramm und unsere interaktiven Workshops - in diesem Jahr
        bereichert durch ganz besondere Highlights: japanische Ehrengäste (MION und Mayumi Nagashi).
        <br />
        Veranstaltet wird die YumeKai von der DreamFly-Events UG. Auch wenn wir offiziell als
        Unternehmen geführt werden, arbeiten alle Teammitglieder, vom Helfer bis zur
        Geschäftsführung ehrenamtlich und ohne finanzielle Vergütung. Was uns besonders macht: Wir
        sind keine Massenveranstaltung. Bei uns steht die Nähe zur Community im Mittelpunkt. <br />
        Wir sind Fans - genau wie unsere Besucher.
      </p>
      <h2>Warum Crowdfunding?</h2>
      <p>
        Das Jahr 2025 war für die YumeKai kein Leichtes. Leider konnten wir nicht so viele Gäste
        begrüßen wie erhofft. Gleichzeitig sind die Kosten in vielen Bereichen stark gestiegen, wie
        etwa für Raummiete, Technik, Sicherheitsdienst und zahlreiche weitere essentielle
        Bestandteile, die eine Convention überhaupt erst möglich machen.
        <br />
        Deshalb wenden wir uns nun an euch, unsere großartige Community und bitten um eure
        Unterstützung. Jeder einzelne Cent aus diesem Crowdfunding fließt direkt in die Planung und
        Umsetzung der nächsten YumeKai. Eure Hilfe ist der Grundstein dafür, dass wir auch 2026
        wieder ein unvergessliches Event auf die Beine stellen können.
      </p>
      <h2>Verschiedene Stufen:</h2>
      <p>
        Mit jeder höheren Stufe erhältst du automatisch auch alle Belohnungen der vorherigen Stufen.
        Wenn du also das 35€-Paket wählst, bekommst du zusätzlich die Belohnungen der 5€-, 10€-,
        15€- und 20€- Stufe.
        <br />
        Die limitierte Version von unserer Supporter Hiru 2025 gibt es nur während unserem
        Crowdfunding bei uns im Shop oder an unseren Infoständen zu kaufen.
      </p>
      <p>
        <strong>Wichtig: Die Produktbilder können von der Ware abweichen.</strong>
      </p>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_1}
            alt="YumeKai Crowdfunding 1"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>5€ - Hirus kleiner Helfer</h3>
          <ul>
            <li>Nennung auf der Supporter-Seite unserer Webseite</li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_2}
            alt="YumeKai Crowdfunding 2"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>10€ - Yumekos Band der Freundschaft</h3>
          <ul>
            <li>Festivalbändchen aus Stoff mit Hiru als Abbildung.</li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_3}
            alt="YumeKai Crowdfunding 3"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>15€ - Hirus Sticker-Schmiede</h3>
          <ul>
            <li>Nennung im Programmheft der YumeKai 2026</li>
            <li>Stickerbogen</li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_4}
            alt="YumeKai Crowdfunding 4"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>20€ - Yumekos Gläsernes Atelier</h3>
          <ul>
            <li>Graviertes Trinkglas</li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_5}
            alt="YumeKai Crowdfunding 5"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>35€ - Hirus Schlüsselbund</h3>
          <ul>
            <li>Acryl Schlüsselanhänger</li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_6}
            alt="YumeKai Crowdfunding 6"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>50€ - Hirus Ehrenemblem</h3>
          <ul>
            <li>Enamel Pin</li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_7}
            alt="YumeKai Crowdfunding 7"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>75€ - Hirus Lichterparade</h3>
          <ul>
            <li>Penlight</li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_8}
            alt="YumeKai Crowdfunding 8"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>100€ - Hirus Plüsch-Patrol</h3>
          <ul>
            <li>Hiru Plüschtier Anhänger (7cm)</li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_9}
            alt="YumeKai Crowdfunding 9"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>150€ - Stickerbuch der Hiru-Künste</h3>
          <ul>
            <li>Wiederverwendbares A6 Stickerbuch</li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_10}
            alt="YumeKai Crowdfunding 10"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>200€ - Yumekos Goldene Einladung</h3>
          <ul>
            <li>
              Goldticket
              <ul>
                <li>Wochenendticket</li>
                <li>Merchendise Tüte</li>
                <li>30 Minuten früherer Einlass</li>
                <li>Weitere überaschungen</li>
              </ul>
            </li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_11}
            alt="YumeKai Crowdfunding 11"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>250€ - Yumekos Stoffgeheimnis</h3>
          <ul>
            <li>T-Shirt</li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <DynamicContentWrapper>
        <DynamicContent $widthpercent={40}>
          <Image
            src={crowdfundingImage_12}
            alt="YumeKai Crowdfunding 12"
            width={400}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60} $align="center" $justify="start">
          <h3>550€ - Hirus Private Suite</h3>
          <ul>
            <li>Ein zweites Goldticket</li>
            <li>Hotelübernachtung für zwei Personen im Doppelzimmer inkl. Frühstück von Sa - So</li>
          </ul>
        </DynamicContent>
      </DynamicContentWrapper>

      <h2>Ehrenmitglied des Hiru-Clubs</h2>
      <p>
        Die Top fünf Spender bekommen jeweils unterschriebene Autogrammkarten aller Ehrengäste der
        YumeKai 2026.
      </p>

      <h2>Hiru-Imagineer</h2>
      <p>
        Die Top 2 Unterstützer dürfen jeweils eine Designidee für ein neues Hiru einreichen. Bitte
        beachte: Wir behalten uns das letzte Wort bei der Umsetzung vor. Vorschläge mit
        rassistischen, diskriminierenden, beleidigenden oder anzüglichen Inhalten werden nicht
        berücksichtigt.
      </p>

      <h2>Top-Unterstützer</h2>
      <ol>
        <li>HerrHomie</li>
        <li>Karokitty</li>
        <li>Sara Hetges</li>
        <li>Joey Jäger</li>
        <li>Kio der Schwabenotter</li>
      </ol>

      <p>
        <br />
        Falls das Widget nicht lädt kannst du den Ticketshop unter{" "}
        <StyledLink href="https://pretix.eu/Dreamfly-Events/crowdfunding/" target="_blank">
          pretix.eu/Dreamfly-Events/crowdfunding/
        </StyledLink>{" "}
        erreichen.
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <pretix-widget event="https://pretix.eu/Dreamfly-Events/crowdfunding/" single-item-select="button"></pretix-widget>
            <noscript>
                <div class="pretix-widget">
                    <div class="pretix-widget-info-message">
                        JavaScript ist in Ihrem Browser deaktiviert. Um unseren Ticketshop ohne JavaScript aufzurufen, klicken Sie bitte <a target="_blank" rel="noopener" href="https://pretix.eu/Dreamfly-Events/yumekai-25/">hier</a>.
                    </div>
                </div>
            </noscript>
            `,
        }}
      />

      <Banner />
    </>
  );
}
