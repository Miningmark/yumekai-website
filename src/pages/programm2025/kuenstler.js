import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import AliceMySecretImage from "/public/assets/images/yumekai2025/AliceMySecret_Image.png";
import BerrinJostImage from "/public/assets/images/yumekai2025/BerrinJost_Image.png";
import EmytsuuImage from "/public/assets/images/yumekai2025/Emytsuu_Image.png";
import LoonarisImage from "/public/assets/images/yumekai2025/Loonaris_Image.png";
import AnimalixuImage from "/public/assets/images/yumekai2025/Animalixu_Image.png";
import BavarianwoodfoxImage from "/public/assets/images/yumekai2025/Bavarianwoodfox_Image.png";
import StellaBialekImage from "/public/assets/images/yumekai2025/StellaBialek_Image.png";
import AmidalaImage from "/public/assets/images/yumekai2025/Amidala_Image.png";
import FranciNevadaImage from "/public/assets/images/yumekai2025/FranciNevada_Image.png";
import KitsukamiImage from "/public/assets/images/yumekai2025/Kitsukami_Image.png";
import TacTokiImage from "/public/assets/images/yumekai2025/TacToki_Image.png";
import LarinaImage from "/public/assets/images/yumekai2025/Larina_Image.png";
import MadyraImage from "/public/assets/images/yumekai2025/Madyra_Image.png";
import QuinnImage from "/public/assets/images/yumekai2025/Quinn_Image.png";
import RinaMoraImage from "/public/assets/images/yumekai2025/RinaMora_Image.png";
import BeehiveArtistsImage from "/public/assets/images/yumekai2025/BeehiveArtists_Image.png";
import FyflyImage from "/public/assets/images/yumekai2025/Fyfly_Image.png";
import tinypawsImage from "/public/assets/images/yumekai2025/tinypaws_Image.png";
import yupiistarImage from "/public/assets/images/yumekai2025/yupiistar_Image.png";
import ValyrakaImage from "/public/assets/images/yumekai2025/Valyraka_Image.png";
import KirianYumeImage from "/public/assets/images/yumekai2025/KirianYume_Image.png";
import ChristalShad0w0Image from "/public/assets/images/yumekai2025/ChristalShad0w0_Image.png";
import YuiSpallekImage from "/public/assets/images/yumekai2025/YuiSpallek_Image.png";
import AshturiaImage from "/public/assets/images/yumekai2025/Ashturia_Image.png";
import AnaraImage from "/public/assets/images/yumekai2025/Anara_Image.png";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch; // wichtig: sorgt dafür, dass Cards gleich hoch werden
  gap: 30px;
`;

export default function Kuenstler() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Künstler</h1>

      <ContentContainer>
        <ContentCard
          imageSrc={AliceMySecretImage}
          altText="Logo von AliceMySecret"
          instaLink="https://www.instagram.com/alicemysecret"
          instaLinkText="AliceMySecret"
        />

        <ContentCard
          imageSrc={BerrinJostImage}
          altText="Logo von Berrin Jost"
          instaLink="https://www.instagram.com/crazy_berrin"
          instaLinkText="Berrin Jost"
        />

        <ContentCard
          imageSrc={EmytsuuImage}
          altText="Logo von Emytsuu"
          instaLink="https://www.instagram.com/emytsuu/?hl=de"
          instaLinkText="Emytsuu"
        />

        <ContentCard
          imageSrc={LoonarisImage}
          altText="Logo von Loonaris"
          instaLink="https://www.instagram.com/loonarisarts"
          instaLinkText="Loonaris"
        />

        <ContentCard
          imageSrc={AnimalixuImage}
          altText="Logo von Animalixu"
          instaLink="https://www.instagram.com/animalixu"
          instaLinkText="Animalixu"
        />

        <ContentCard
          imageSrc={BavarianwoodfoxImage}
          altText="Logo von BavarianWoodfox.art"
          instaLink="https://www.instagram.com/bavarianwoodfox/"
          instaLinkText="BavarianWoodfox.art"
        />

        <ContentCard
          imageSrc={StellaBialekImage}
          altText="Logo von Stella Bialek"
          instaLink="https://www.instagram.com/stellabialek"
          instaLinkText="Stella Bialek"
        />

        <ContentCard
          imageSrc={AmidalaImage}
          altText="Logo von Amidala Artwork"
          instaLink="https://www.instagram.com/amidala.artwork/"
          instaLinkText="Amidala Artwork"
        />

        <ContentCard
          imageSrc={FranciNevadaImage}
          altText="Logo von Franci Nevada"
          instaLink="https://www.instagram.com/nevada.art.shop/"
          instaLinkText="Franci Nevada"
        />

        <ContentCard
          imageSrc={KitsukamiImage}
          altText="Logo von Kitsukami"
          instaLink="https://www.instagram.com/kitsu_kami/"
          instaLinkText="Kitsukami"
        />

        <ContentCard
          imageSrc={TacTokiImage}
          altText="Logo von TacToki Illustrations"
          instaLink="https://www.instagram.com/tactoki/"
          instaLinkText="TacToki Illustrations"
        />

        <ContentCard
          imageSrc={LarinaImage}
          altText="Logo von Larina"
          instaLink="https://www.instagram.com/lariina.art/"
          instaLinkText="Larina"
        />

        <ContentCard
          imageSrc={MadyraImage}
          altText="Logo von Madyra"
          instaLink="https://www.instagram.com/madyra_arts"
          instaLinkText="Madyra"
        />

        <ContentCard
          imageSrc={QuinnImage}
          altText="Logo von Quinn"
          instaLink="https://www.instagram.com/quinnskanzashi/"
          instaLinkText="Quinn"
        />

        <ContentCard
          imageSrc={RinaMoraImage}
          altText="Logo von Rina Mora Art"
          instaLink="https://www.instagram.com/rina.mora.art"
          instaLinkText="Rina Mora Art"
        />

        <ContentCard
          imageSrc={BeehiveArtistsImage}
          altText="Logo von BeehiveArtists"
          instaLink="https://www.instagram.com/beehiveartists/"
          instaLinkText="BeehiveArtists"
        />

        <ContentCard
          imageSrc={FyflyImage}
          altText="Logo von Fyly"
          instaLink="https://instagram.com/fyly_cosplays"
          instaLinkText="Fyly"
        />

        <ContentCard
          imageSrc={tinypawsImage}
          altText="Logo von Tiny Paws Treasures"
          instaLink="https://www.instagram.com/cyancalla/"
          instaLinkText="Tiny Paws Treasures"
        />

        <ContentCard
          imageSrc={yupiistarImage}
          altText="Logo von Yupiistar"
          webLink="https://yupiistar.carrd.co/#portfolio"
          webLinkText="Yupiistar"
        />

        <ContentCard
          imageSrc={AnaraImage}
          altText="Logo von Anara_Twice"
          instaLink="https://www.instagram.com/anaratwice/?hl=de"
          instaLinkText="Anara_Twice"
        />

        <ContentCard
          imageSrc={ChristalShad0w0Image}
          altText="Logo von Christal.Shad0w0"
          instaLink="https://www.instagram.com/christal.shadow/"
          instaLinkText="Christal.Shad0w0"
        />

        <ContentCard
          imageSrc={KirianYumeImage}
          altText="Logo von Kirian Yume"
          instaLink="https://www.instagram.com/kirianyume/"
          instaLinkText="Kirian Yume"
        />

        <ContentCard
          imageSrc={ValyrakaImage}
          altText="Logo von Valyraka"
          instaLink="https://www.instagram.com/valyraka/"
          instaLinkText="Valyraka"
        />
      </ContentContainer>

      <h1 style={{ textAlign: "center" }}>Autoren</h1>

      <ContentContainer>
        <ContentCard
          imageSrc={YuiSpallekImage}
          altText="Logo von Yui Spallek"
          instaLink="https://www.instagram.com/yui_spallek"
          instaLinkText="Yui Spallek"
        />

        <ContentCard
          imageSrc={AshturiaImage}
          altText="Logo von Ashturia"
          webLink="https://www.naomihuber.com/"
          webLinkText="Ashturia"
        />
      </ContentContainer>
    </>
  );
}
