import Image from "next/image";
import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";

//Images
import ImgAkunyaah from "/public/assets/images/yumekai2026/KÅnstler Akunyaah - KEIN INSTA.png";
import ImgGlueblade from "/public/assets/images/yumekai2026/KÅnstler Glueblade - KEIN INSTA.png";
import ImgJustDesign from "/public/assets/images/yumekai2026/@just_design_creation.png";
import ImgAnaratwice from "/public/assets/images/yumekai2026/@anaratwice.png";
import ImgYunuyei from "/public/assets/images/yumekai2026/@yunuyei.png";
import ImgYeikoArt from "/public/assets/images/yumekai2026/@yeiko_art.png";
import ImgYupiistar from "/public/assets/images/yumekai2026/@yupiistar.png";
import ImgNevadaArtShop from "/public/assets/images/yumekai2026/@nevada.art.shop.png";
import ImgAnimalixu from "/public/assets/images/yumekai2026/@animalixu.png";
import ImgKitsuKami from "/public/assets/images/yumekai2026/@kitsu_kami.png";
import ImgAliceMySecret from "/public/assets/images/yumekai2026/@alicemysecret.png";
import ImgEmytsuu from "/public/assets/images/yumekai2026/@emytsuu.png";
import ImgMinervasOwls from "/public/assets/images/yumekai2026/@minervasowls.png";
import ImgSteamSpirits from "/public/assets/images/yumekai2026/@steamspirits.png";
import ImgKirianYume from "/public/assets/images/yumekai2026/@kirianyume.png";
import ImgMyuchiisu from "/public/assets/images/yumekai2026/@myuchiisu.png";
import ImgArtOfTheValley from "/public/assets/images/yumekai2026/@art.of.the.valley.png";
import ImgChristalShadow from "/public/assets/images/yumekai2026/@christal.shad0w0.png";
import ImgBiggugusu from "/public/assets/images/yumekai2026/@biggugusu.png";
import ImgKeebokun from "/public/assets/images/yumekai2026/@keebokun.png";
import ImgPingunerddarts from "/public/assets/images/yumekai2026/@pingunerddarts.png";
import ImgTeiSyokumoku from "/public/assets/images/yumekai2026/@tei_syokumoku.png";
import ImgUlfFildebrandt from "/public/assets/images/yumekai2026/@ulffildebrandt.png";
import ImgNaomiHuber from "/public/assets/images/yumekai2026/@naomihuber_.png";
import ImgDelphoxsart from "/public/assets/images/yumekai2026/@delphoxsart.png";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ArtistCard = styled.div`
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 16px;
  padding: 14px 20px;
  min-width: 160px;
  max-width: 220px;
  flex: 1;
  text-align: center;

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export default function Kuenstler() {
  const kuenstler = [
    { name: "MinervasOwls", insta: "https://www.instagram.com/minervasowls/", img: ImgMinervasOwls },
    { name: "Yunuyei", insta: "https://www.instagram.com/yunuyei/", img: ImgYunuyei },
    { name: "SteamSpirits", insta: "https://www.instagram.com/steamspirits/", img: ImgSteamSpirits },
    { name: "Yeiko Art", insta: "https://www.instagram.com/yeiko_art/", img: ImgYeikoArt },
    { name: "Emytsuu", insta: "https://www.instagram.com/emytsuu/", img: ImgEmytsuu },
    { name: "Yupiistar", insta: "https://www.instagram.com/yupiistar/", img: ImgYupiistar },
    { name: "Alice my Secret", insta: "https://www.instagram.com/alicemysecret/", img: ImgAliceMySecret },
    { name: "Myuchiisu", insta: "https://www.instagram.com/myuchiisu/", img: ImgMyuchiisu },
    { name: "Art of the Valley", insta: "https://www.instagram.com/art.of.the.valley/", img: ImgArtOfTheValley },
    { name: "Kirian Yume", insta: "https://www.instagram.com/kirianyume/", img: ImgKirianYume },
    { name: "Tei Syokumoku", insta: "https://www.instagram.com/tei_syokumoku/", img: ImgTeiSyokumoku },
    { name: "Animalixu", insta: "https://www.instagram.com/animalixu/", img: ImgAnimalixu },
    { name: "Keebokun", insta: "https://www.instagram.com/keebokun/", img: ImgKeebokun },
    { name: "Kitsu Kami", insta: "https://www.instagram.com/kitsu_kami/", img: ImgKitsuKami },
    { name: "Anaratwice", insta: "https://www.instagram.com/anaratwice/", img: ImgAnaratwice },
    { name: "Glueblade", insta: "https://www.instagram.com/glueblade/", img: ImgGlueblade },
    { name: "Pingunerddarts", insta: "https://www.instagram.com/pingunerddarts/", img: ImgPingunerddarts },
    { name: "Biggugusu", insta: "https://www.instagram.com/biggugusu/", img: ImgBiggugusu },
    { name: "Nevada Art Shop", insta: "https://www.instagram.com/nevada.art.shop/", img: ImgNevadaArtShop },
    { name: "Akunyaah", insta: "https://www.instagram.com/akunyaah/", img: ImgAkunyaah },
    { name: "Christal Shadow", insta: "https://www.instagram.com/christal.shad0w0/", img: ImgChristalShadow },
    { name: "Just Design Creation", insta: "https://www.instagram.com/just_design_creation/", img: ImgJustDesign },
    { name: "Jey.Creates", insta: "https://www.instagram.com/jey.creates/", img: null },
    { name: "Fyly Draws", insta: "https://www.instagram.com/fyly_draws/", img: null },
    { name: "Miss_Malevolent_", insta: "https://www.instagram.com/miss_malevolent_/", img: null },
    { name: "Stars and Trinkets", insta: "https://www.instagram.com/starsandtrinketsshop/", img: null },
    { name: "Colortoglas", insta: "https://www.instagram.com/colortoglas/", img: null },
    { name: "Sasei Art", insta: "https://www.instagram.com/sasei.art/", img: null },
    { name: "Celezius", insta: "https://www.instagram.com/celezius/", img: null },
  ];

  const autoren = [
    { name: "Ulf Fildebrandt", insta: "https://www.instagram.com/ulffildebrandt/", img: ImgUlfFildebrandt },
    { name: "Naomi Huber – Ashturia", insta: "https://www.instagram.com/naomihuber_/", img: ImgNaomiHuber },
    { name: "DelphoxDX", insta: "https://www.instagram.com/delphoxdx/", img: ImgDelphoxsart },
  ];

  return (
    <>
      <ReturnButton link="/programm2026" />

      <h1 style={{ textAlign: "center" }}>Künstleratelier</h1>

      <SectionTitle>Künstler</SectionTitle>
      <ContentContainer>
        {kuenstler.map((k) => (
          <ArtistCard key={k.name}>
            {k.img && (
              <Image
                src={k.img}
                alt={k.name}
                style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "8px" }}
              />
            )}
            {k.insta ? (
              <a href={k.insta} target="_blank" rel="noopener noreferrer">
                {k.name}
              </a>
            ) : (
              <strong>{k.name}</strong>
            )}
          </ArtistCard>
        ))}
      </ContentContainer>

      <SectionTitle>Autoren</SectionTitle>
      <ContentContainer>
        {autoren.map((a) => (
          <ArtistCard key={a.name}>
            {a.img && (
              <Image
                src={a.img}
                alt={a.name}
                style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "8px" }}
              />
            )}
            {a.insta ? (
              <a href={a.insta} target="_blank" rel="noopener noreferrer">
                {a.name}
              </a>
            ) : (
              <strong>{a.name}</strong>
            )}
          </ArtistCard>
        ))}
      </ContentContainer>
    </>
  );
}
