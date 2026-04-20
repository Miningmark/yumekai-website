import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";

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
    { name: "Akunyaah", insta: "https://www.instagram.com/akunyaah/" },
    { name: "Glueblade", insta: "https://www.instagram.com/glueblade/" },
    { name: "Just Design Creation", insta: "https://www.instagram.com/just_design_creation/" },
    { name: "Anaratwice", insta: "https://www.instagram.com/anaratwice/" },
    { name: "Yunuyei", insta: "https://www.instagram.com/yunuyei/" },
    { name: "Jey.Creates", insta: "https://www.instagram.com/jey.creates/" },
    { name: "Yeiko Art", insta: "https://www.instagram.com/yeiko_art/" },
    { name: "Fyly Draws", insta: "https://www.instagram.com/fyly_draws/" },
    { name: "Yupiistar", insta: "https://www.instagram.com/yupiistar/" },
    { name: "Miss_Malevolent_", insta: "https://www.instagram.com/miss_malevolent_/" },
    { name: "Stars and Trinkets", insta: "https://www.instagram.com/starsandtrinketsshop/" },
    { name: "Colortoglas", insta: "https://www.instagram.com/colortoglas/" },
    { name: "Nevada Art Shop", insta: "https://www.instagram.com/nevada.art.shop/" },
    { name: "Sasei Art", insta: "https://www.instagram.com/sasei.art/" },
    { name: "Animalixu", insta: "https://www.instagram.com/animalixu/" },
    { name: "Kitsu Kami", insta: "https://www.instagram.com/kitsu_kami/" },
    { name: "Alice my Secret", insta: "https://www.instagram.com/alicemysecret/" },
    { name: "Emytsuu", insta: "https://www.instagram.com/emytsuu/" },
    { name: "MinervasOwls", insta: "https://www.instagram.com/minervasowls/" },
    { name: "SteamSpirits", insta: "https://www.instagram.com/steamspirits/" },
    { name: "Kirian Yume", insta: "https://www.instagram.com/kirianyume/" },
    { name: "Myuchiisu", insta: "https://www.instagram.com/myuchiisu/" },
    { name: "Art of the Valley", insta: "https://www.instagram.com/art.of.the.valley/" },
    { name: "Celezius", insta: "https://www.instagram.com/celezius/" },
    { name: "Christal Shadow", insta: "https://www.instagram.com/christal.shad0w0/" },
  ];

  const autoren = [
    { name: "Ulf Fildebrandt", insta: null },
    { name: "Naomi Huber – Ashturia", insta: null },
    { name: "DelphoxDX", insta: "https://www.instagram.com/delphoxdx/" },
    { name: "CurseHunter Manga", insta: "https://www.instagram.com/cursehunter_manga/" },
    { name: "Ellie und Nick", insta: "https://www.instagram.com/ellie_und_nick/" },
    { name: "Palico Art", insta: "https://www.instagram.com/palico.art/" },
    { name: "Aonisdesign", insta: "https://www.instagram.com/aonisdesign/" },
    { name: "Tokidoll", insta: "https://www.instagram.com/tokidoll/" },
    { name: "SleepyTigerYuki", insta: "https://www.instagram.com/sleepytigeryuki/" },
  ];

  return (
    <>
      <ReturnButton link="/programm2026" />

      <h1 style={{ textAlign: "center" }}>Künstleratelier</h1>

      <SectionTitle>Künstler</SectionTitle>
      <ContentContainer>
        {kuenstler.map((k) => (
          <ArtistCard key={k.name}>
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
