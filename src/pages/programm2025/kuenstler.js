import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

//Components
import Columns2 from "@/components/elements/Columns2";
import Columns3 from "@/components/elements/Columns3";
import RectangleContainer from "@/components/elements/RectangleContainer";
import MovingContentWrapper from "@/components/elements/MovingContent";
import { SpacerEmpty, StyledLink } from "@/components/styledComponents";
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import AliceMySecretImage from "/public/assets/images/yumekai2025/AliceMySecret_Image.png";
import BerrinJostImage from "/public/assets/images/yumekai2025/BerrinJost_Image.png";
import EmytsuuImage from "/public/assets/images/yumekai2025/Emytsuu_Image.png";
import LoonarisImage from "/public/assets/images/yumekai2025/Loonaris_Image.png";
import AnimalixuImage from "/public/assets/images/yumekai2025/Animalixu_Image.png";
import BavarianwoodfoxImage from "/public/assets/images/yumekai2025/Bavarianwoodfox_Image.png";
import PridenPlushImage from "/public/assets/images/yumekai2025/PridenPlush_Image.png";
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
import MarkWamslerImage from "/public/assets/images/yumekai2025/MarkWamsler_Image.png";
import AshturiaImage from "/public/assets/images/yumekai2025/Ashturia_Image.png";
import AnaraImage from "/public/assets/images/yumekai2025/Anara_Image.png";



const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default function Kuenstler() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Künstler</h1>

      <ContentContainer>

        <ContentCard
                title={"AliceMySecret"}
                imageSrc={AliceMySecretImage}
                altText="Logo von AliceMySecret" 
                instaLink="https://www.instagram.com/alicemysecret"
                instaLinkText="AliceMySecret"
        />
        <ContentCard
                title={"Berrin Jost"}
                imageSrc={BerrinJostImage}
                altText="Logo von Berrin Jost"
                instaLink="https://www.instagram.com/crazy_berrin"
                instaLinkText="Berrin Jost"
        />
        <ContentCard
                title={"Emytsuu"}
                imageSrc={EmytsuuImage}
                altText="Logo von Emytsuu"
                instaLink="https://www.instagram.com/emytsuu/?hl=de"
                instaLinkText="Emytsuu"
        />
        <ContentCard
                title={"Loonaris"}
                imageSrc={LoonarisImage}
                altText="Logo von Loonaris"
                instaLink="https://www.instagram.com/loonarisarts"
                instaLinkText="Loonaris"
        />
        <ContentCard
                title={"Animalixu"}
                imageSrc={AnimalixuImage}
                altText="Logo von Animalixu"
                instaLink="https://www.instagram.com/animalixu"
                instaLinkText="Animalixu"
        />
        <ContentCard
                title={"BavarianWoodfox.art"}
                imageSrc={BavarianwoodfoxImage}
                altText="Logo von BavarianWoodfox.art"
                instaLink="https://www.instagram.com/bavarianwoodfox/"
                instaLinkText="BavarianWoodfox.art"
        />
        <ContentCard
                title="Pride&apos;n&apos;Plush"
                imageSrc={PridenPlushImage}
                altText="Logo von Pride&apos;n&apos;Plush"
                instaLink="https://www.instagram.com/pridenplush"
                instaLinkText="Pride&apos;n&apos;Plush"
        />
        <ContentCard
                title={"Stella Bialek"}
                imageSrc={StellaBialekImage}
                altText="Logo von Stella Bialek"
                instaLink="https://www.instagram.com/stellabialek"
                instaLinkText="Stella Bialek"
        />
        <ContentCard
                title={"Amidala Artwork"}
                imageSrc={AmidalaImage}
                altText="Logo von Amidala Artwork"
                instaLink="https://www.instagram.com/amidala.artwork/"
                instaLinkText="Amidala Artwork"
        />
        <ContentCard
                title={"Franci Nevada"}
                imageSrc={FranciNevadaImage}
                altText="Logo von Franci Nevada"
                instaLink="https://www.instagram.com/nevada.art.shop/"
                instaLinkText="Franci Nevada"
        />
        <ContentCard
                title={"Kitsukami"}
                imageSrc={KitsukamiImage}
                altText="Logo von Kitsukami"
                instaLink="https://www.instagram.com/kitsu_kami/"
                instaLinkText="Kitsukami"
        />
        <ContentCard
                title={"TacToki Illustrations"}
                imageSrc={TacTokiImage}
                altText="Logo von TacToki Illustrations"
                instaLink="https://www.instagram.com/tactoki/"
                instaLinkText="TacToki Illustrations"
        />
        <ContentCard
                title={"Larina"}
                imageSrc={LarinaImage}
                altText="Logo von Larina"
                instaLink="https://www.instagram.com/lariina.art/"
                instaLinkText="Larina"
        />
        <ContentCard
                title={"Madyra"}
                imageSrc={MadyraImage}
                altText="Logo von Madyra"
                instaLink="https://www.instagram.com/madyra_arts"
                instaLinkText="Madyra"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/quinnskanzashi/" target="_blank">Quinn</StyledLink>}
                imageSrc={QuinnImage}
                altText="Logo von Quinn"
                instaLink=""
                instaLinkText=""
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/rina.mora.art" target="_blank">Rina Mora Art</StyledLink>}
                imageSrc={RinaMoraImage}
                altText="Logo von Rina Mora Art"
                instaLink=""
                instaLinkText=""
        />

        <ContentCard
                title={<StyledLink href="https://www.instagram.com/beehiveartists/" target="_blank">BeehiveArtists</StyledLink>}
                imageSrc={BeehiveArtistsImage}
                altText="Logo von BeehiveArtists"
                instaLink=""
                instaLinkText=""
        />
        <ContentCard
                title={<StyledLink href="https://instagram.com/fyly_cosplays" target="_blank">Fyly</StyledLink>}
                imageSrc={FyflyImage}
                altText="Logo von Fyly"
                instaLink=""
                instaLinkText=""
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/cyancalla/" target="_blank">Tiny Paws Treasures &amp; CyanCalla</StyledLink>}
                imageSrc={tinypawsImage}
                altText="Logo von Tiny Paws Treasures &amp; CyanCalla"
                instaLink=""
                instaLinkText=""
        />
        <ContentCard
                title={<StyledLink href="https://yupiistar.carrd.co/#portfolio" target="_blank">Yupiistar</StyledLink>}
                imageSrc={yupiistarImage}
                altText="Logo von Yupiistar"
                instaLink=""
                instaLinkText=""
        />

        <ContentCard
                title={<StyledLink href="https://www.instagram.com/anaratwice/?hl=de" target="_blank">Anara_Twice</StyledLink>}
                imageSrc={AnaraImage}
                altText="Logo von Anara_Twice"
                instaLink=""
                instaLinkText=""
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/christal.shadow/" target="_blank">Christal.Shad0w0</StyledLink>}
                imageSrc={ChristalShad0w0Image}
                altText="Logo von Christal.Shad0w0"
                instaLink=""
                instaLinkText=""
        />
        <ContentCard
                title={<StyledLink href="https://linktr.ee/KirianYume" target="_blank">Kirian Yume</StyledLink>}
                imageSrc={KirianYumeImage}
                altText="Logo von Kirian Yume"
                instaLink=""
                instaLinkText=""
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/valyraka/" target="_blank">Valyraka</StyledLink>}
                imageSrc={ValyrakaImage}
                altText="Logo von Valyraka"
                instaLink=""
                instaLinkText=""
        />
        </ContentContainer>
        

        <h1 style={{ textAlign: "center" }}>Autoren</h1>

        <ContentContainer>

        <ContentCard
                title={<StyledLink href="https://www.instagram.com/yui_spallek" target="_blank">Yui Spallek</StyledLink>}
                imageSrc={YuiSpallekImage}
                altText="Logo von Yui Spallek"
                instaLink=""
                instaLinkText="" 
        />
        <ContentCard
                title={<StyledLink href="https://www.markwamsler.de" target="_blank">Kemosabe</StyledLink>}
                imageSrc={MarkWamslerImage}
                altText="Logo von Kemosabe"
                instaLink=""
                instaLinkText="" 
        />
        <ContentCard
                title={<StyledLink href="https://www.naomihuber.com/" target="_blank">Ashturia</StyledLink>}
                imageSrc={AshturiaImage}
                altText="Logo von Ashturia"
                instaLink=""
                instaLinkText="" 
        />

      </ContentContainer>
    </>
  );
}
