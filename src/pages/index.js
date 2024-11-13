import styled, { keyframes } from "styled-components";
import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";
import Columns4 from "@/components/elements/Columns4";
import ConvexBackground from "@/components/elements/ConvexBackground";
import ImageCarousel from "@/components/elements/ImageCarousel";
import {
  StyledLink,
  StyledButton,
  UnstyledLink,
  Spacer,
  SpacerEmpty,
} from "@/components/styledComponents";
import FlippingCard from "@/components/elements/FlippingCard";
import SponsorsComponent from "@/components/home/Sponsors";

//Images
import fylyCosplayImgae from "/public/assets/images/yumekai2024/Fyly_Cosplay.jpg";
import tinyfufuCosplayImage from "/public/assets/images/yumekai2024/Tinyfufu_Cosplay.jpg";
import onyxCosplayImage from "/public/assets/images/yumekai2024/Onyx_Cosplay.jpg";
import scarlettCosplayImage from "/public/assets/images/yumekai2024/Scarlett_Sirene_Cosplay.jpg";

import emytsuuImage from "/public/assets/images/yumekai2024/Emytsuu.jpg";
import leloImage from "/public/assets/images/yumekai2024/LeLo.jpg";
import miruImage from "/public/assets/images/yumekai2024/Miru.jpg";
import stellaImage from "/public/assets/images/yumekai2024/Stella.jpg";

import yumekaiNightImage1 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-1.jpg";
import yumekaiNightImage2 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-2.jpg";
import yumekaiNightImage3 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-3.jpg";
import yumekaiNightImage4 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-4.jpg";
import yumekaiNightImage5 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-5.jpg";
import yumekaiNightImage6 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-6.jpg";
import yumekaiNightImage7 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-7.jpg";
import yumekaiNightImage8 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-8.jpg";
import yumekaiNightImage9 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-9.jpg";
import yumekaiNightImage10 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-10.jpg";
import yumekaiNightImage11 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-11.jpg";
import yumekaiNightImage12 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-12.jpg";
import yumekaiNightImage13 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-13.jpg";
import yumekaiNightImage14 from "/public/assets/images/yumekai-night-1-2024/YumeKai-Night-14.jpg";

//logos
import hiruHandy from "/public/assets/logo/Hiru-Handy.webp";
import yumekoImage from "/public/assets/logo/Yumeko.png";
import HomeSlider from "@/components/home/HomeSlider";

const yumeKaiNightImages = [
  { image: yumekaiNightImage1, name: "", link: "" },
  { image: yumekaiNightImage2, name: "", link: "" },
  { image: yumekaiNightImage3, name: "", link: "" },
  { image: yumekaiNightImage4, name: "", link: "" },
  { image: yumekaiNightImage5, name: "", link: "" },
  { image: yumekaiNightImage6, name: "", link: "" },
  { image: yumekaiNightImage7, name: "", link: "" },
  { image: yumekaiNightImage8, name: "", link: "" },
  { image: yumekaiNightImage9, name: "", link: "" },
  { image: yumekaiNightImage10, name: "", link: "" },
  { image: yumekaiNightImage11, name: "", link: "" },
  { image: yumekaiNightImage12, name: "", link: "" },
  { image: yumekaiNightImage13, name: "", link: "" },
  { image: yumekaiNightImage14, name: "", link: "" },
];

const StyledImageHome = styled(Image)`
  width: 100%;
  border-radius: var(--border-radius-large);
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-15px) translateX(15px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
`;

const StyledYumekoImage = styled(Image)`
  animation: ${floatAnimation} 5s ease-in-out infinite;
`;

export default function Home() {
  return (
    <>
      <HomeSlider />
      <h1>Aktuelles</h1>
      <p>
        In der Rubrik „Aktuelles“ kannst du erfahren, was gerade bei YumeKai geschieht. Hier
        erwarten dich fortlaufend neue und fesselnde Nachrichten rund um die YumeKai.
      </p>

      <SpacerEmpty />
      <ConvexBackground color={1}>
        <h2>{`Conventions: Überblick und Tipps für Eltern`}</h2>
        <p>
          Entdecken Sie die faszinierende Welt der Anime-Conventions – ein Ort, an dem Fantasie und
          Realität miteinander verschmelzen! Für viele Eltern kann diese bunte und oft
          überwältigende Welt jedoch eine Herausforderung sein. Um Ihnen zu helfen, haben wir einen
          informativen Artikel verlinkt, der speziell für Eltern geschrieben wurde.
        </p>
        <p>
          Erfahren Sie in diesem Artikel von C&A, wie Anime-Conventions funktionieren, welche
          Vorteile sie für Kinder und Jugendliche bieten und wie Sie als Eltern das Beste aus diesen
          einzigartigen Veranstaltungen herausholen können.
        </p>
        <p>
          Klicken Sie hier, um mehr zu erfahren:{" "}
          <StyledLink
            href={"https://www.c-and-a.com/de/de/shop/comic-und-manga-conventions"}
            target="_blank"
          >
            Comic- und Manga-Conventions: Überblick und Tipps für Eltern
          </StyledLink>
        </p>
      </ConvexBackground>
      <SpacerEmpty />
      <div>
        <h2>Gewinner unseres Cosplay Performance Wettbewerbs</h2>
        <p>
          Bei unserem Cosplay Performance Wettbewerb am Samstag hatten wir unglaublich talentierte
          Teilnehmer. Da ist es für unsere Jury, die aus{" "}
          <StyledLink href={"https://www.instagram.com/evelyn_cosplay/"} target="_blank">
            Evelyn Cosplay
          </StyledLink>
          ,{" "}
          <StyledLink href={"https://www.instagram.com/imoneecosplay/"} target="_blank">
            Imoneecosplay
          </StyledLink>
          ,{" "}
          <StyledLink href={"https://www.instagram.com/n4ru_cosplay/"} target="_blank">
            Naru Cosplay
          </StyledLink>
          ,{" "}
          <StyledLink href={"https://www.instagram.com/imoneecosplay/"} target="_blank">
            Mero
          </StyledLink>
          {" & "}
          <StyledLink href={"https://www.instagram.com/yunyte/"}>Yunyte</StyledLink> bestand gar
          nicht so leicht gefallen die Gewinner zu küren.
        </p>
        <Columns4
          column1={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}>Platz 1</p>
              <StyledImageHome
                src={onyxCosplayImage}
                alt="Onyx als Toybox
                Hatsune Miku von Vocaloid"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/onyx_costumes/"} target="_blank">
                  Onyx
                </StyledLink>{" "}
                als Toybox Hatsune Miku von Vocaloid
              </p>
            </>
          }
          column2={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}>Platz 2</p>
              <StyledImageHome
                src={fylyCosplayImgae}
                alt="Fyly als Shea Haulia
                von Arifureta S2"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/fyly_cosplays/"} target="_blank">
                  Fyly
                </StyledLink>{" "}
                als Shea Haulia von Arifureta S2
              </p>
            </>
          }
          column3={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}> Platz 3</p>
              <StyledImageHome
                src={scarlettCosplayImage}
                alt="Scarlett Sirene als
                Soraka Koi von League of Legends"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/scarlettsirene2/"} target="_blank">
                  Scarlett Sirene
                </StyledLink>{" "}
                als Soraka Koi von League of Legends
              </p>
            </>
          }
          column4={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}>Platz 4</p>
              <StyledImageHome
                src={tinyfufuCosplayImage}
                alt="Tinyfufu als Amity Blight
                von The Owl House"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/tinyfufu/"} target="_blank">
                  Tinyfufu
                </StyledLink>{" "}
                als Amity Blight von The Owl House
              </p>
            </>
          }
        />
      </div>
      <Spacer />
      <Columns2
        left={
          <>
            <h2>YumeKai Zeichenwettbewerb</h2>
            <p>
              Hey, du hast diese unglaubliche Kreativität in dir? Perfekt! Wie wäre es, wenn du
              unser süßes Maskottchen Yumeko in deinem ganz eigenen Stil zum Leben erweckst? Lass
              deiner Fantasie freien Lauf! Ob du Yumeko als Genderbend darstellst, in alternativen
              Stilen experimentierst oder sie in einem völlig anderen Genre platzierst – alles ist
              erlaubt, solange Yumeko immer noch leicht erkennbar ist. Wir sind super gespannt
              darauf, was du zauberst! Also schnapp dir deine Lieblingsstifte, öffne dein
              Grafiktablett oder lass einfach die Finger über die Tasten tanzen – und lass Yumeko
              neu erstrahlen!
            </p>
            <div style={{ justifyContent: "center" }} className="responsive-container">
              <div style={{ width: "60%", height: "auto" }}>
                <StyledYumekoImage
                  src={yumekoImage}
                  alt="Maskottchen Yumeko"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </>
        }
        right={
          <>
            <Columns2
              mobile={2}
              left={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Beste Technik</p>
                  <StyledImageHome
                    src={miruImage}
                    alt="Yumeko Interpretation von Miru"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink href={"https://www.instagram.com/mirukusagii/"} target="_blank">
                      Miru
                    </StyledLink>
                  </p>
                </>
              }
              right={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Kreativste Idee</p>
                  <StyledImageHome
                    src={leloImage}
                    alt="Yumeko Interpretation von LeLo"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink href={"https://www.instagram.com/hydrangea_bunny/"} target="_blank">
                      LeLo
                    </StyledLink>
                  </p>
                </>
              }
            />
            <Columns2
              mobile={2}
              left={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Gesamtbild Qualität</p>
                  <StyledImageHome
                    src={emytsuuImage}
                    alt="Yumeko Interpretation von Emytsuu"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink href={"https://www.instagram.com/emytsuu/"} target="_blank">
                      Emytsuu
                    </StyledLink>
                  </p>
                </>
              }
              right={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Favorit der Jury</p>
                  <StyledImageHome
                    src={stellaImage}
                    alt="Yumeko Interpretation von Stella"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>von: Stella</p>
                </>
              }
            />
          </>
        }
      />
      <Spacer />
      <Columns2
        left={
          <>
            <FlippingCard
              cardHeight={400}
              frontContent={
                <>
                  <h3>Hier könnt ihr uns treffen:</h3>
                  <ul>
                    <li>09-11.08.2024 DGT in Aach am Bodensee</li>
                    <li>10.08.2024 Natsucon in Coburg</li>
                    <li>17-18.08.2024 Nihonbashi in Kassel</li>
                    <li>13-15.09.2024 Gamesvention in Kempten</li>
                    <li>05.10.2024 Manganacht in Memmingen</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <h3>Hier waren wir:</h3>
                  <ul>
                    <li>YaYuCo in Dachau</li>
                    <li>Comic Con Stuttgart</li>
                    <li>Comic Con Dornbirn</li>
                    <li>AniMuc Fürstenfeldbruck</li>
                    <li>Royalcon in Enns</li>
                    <li>Minicon in Lustenau</li>
                    <li>Cosquest München</li>
                    <li>KDKasei in Regensburg</li>
                    <li>Hana & Spring in Königsbrunn</li>
                    <li>Hanami in Koblenz</li>
                    <li>Loricon in Seefeld in Tirol</li>
                    <li>Wie.Mai.Kai in Flörsheim</li>
                    <li>Cosday² in Frankfurt</li>
                  </ul>
                </>
              }
            />
          </>
        }
        right={
          <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "60%", height: "auto" }}>
                <Image
                  src={hiruHandy}
                  alt="Maskottchen Hiru"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <p>Kennt ihr bereits Hiru?</p>
              <UnstyledLink href={"/"}>
                <StyledButton>Infos zu Hiru</StyledButton>
              </UnstyledLink>
            </div>
          </>
        }
      />
      <Spacer />

      <div>
        <h2>YumeKai - Night in Bildern</h2>
        <p>
          Hier sind ein paar Schnappschüsse von der YumeKai-Night am 17. Februar 2024! Die Bilder
          geben einen kleinen Einblick in die aufregende Atmosphäre und den Spaß, den wir zusammen
          hatten. Es war eine Nacht voller Lachen, guter Vibes und unvergesslicher Momente. Lehnt
          euch zurück und lasst euch von den Eindrücken mitreißen – diese Fotos fangen den Spirit
          der YumeKai – Night perfekt ein!
        </p>
        <p>
          Fotografen:{" "}
          <StyledLink href={"https://www.instagram.com/bokehbarden/"} target="_blank">
            bokehbarden
          </StyledLink>{" "}
          &{" "}
          <StyledLink href={"https://www.instagram.com/vanity_art_photography/"} target="_blank">
            vanity_art_photography
          </StyledLink>
        </p>
        <ImageCarousel visibleCount={3.2} duration={2.5} images={yumeKaiNightImages} />
      </div>
      <Spacer />
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <UnstyledLink href={"/archiv"}>
          <StyledButton>Archiv</StyledButton>
        </UnstyledLink>
      </div>

      <SponsorsComponent />
    </>
  );
}
