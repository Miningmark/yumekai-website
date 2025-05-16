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
                title={<StyledLink href="https://www.instagram.com/alicemysecret" target="_blank">AliceMySecret</StyledLink>}
                imageSrc={AliceMySecretImage}
                altText="Logo von AliceMySecret" 
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/crazy_berrin" target="_blank">Berrin Jost</StyledLink>}
                imageSrc={BerrinJostImage}
                altText="Logo von Berrin Jost"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/emytsuu/?hl=de" target="_blank">Emytsuu</StyledLink>}
                imageSrc={EmytsuuImage}
                altText="Logo von Emytsuu"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/loonarisarts" target="_blank">Loonaris</StyledLink>}
                imageSrc={LoonarisImage}
                altText="Logo von Loonaris"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/animalixu" target="_blank">Animalixu</StyledLink>}
                imageSrc={AnimalixuImage}
                altText="Logo von Animalixu"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/bavarianwoodfox/" target="_blank">BavarianWoodfox.art</StyledLink>}
                imageSrc={BavarianwoodfoxImage}
                altText="Logo von BavarianWoodfox.art"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/pridenplush" target="_blank">Pride&apos;n&apos;Plush</StyledLink>}
                imageSrc={PridenPlushImage}
                altText="Logo von Pride&apos;n&apos;Plush"
        />
        <ContentCard
                title={<StyledLink href="https://www.stellabialek.com" target="_blank">Stella Bialek</StyledLink>}
                imageSrc={StellaBialekImage}
                altText="Logo von Stella Bialek"
        />
        <ContentCard
                title={<StyledLink href="Amidala-Art.com" target="_blank">Amidala Artwork</StyledLink>}
                imageSrc={AmidalaImage}
                altText="Logo von Amidala Artwork"
        />
        <ContentCard
                title={<StyledLink href="https://francinevada.com/" target="_blank">Franci Nevada</StyledLink>}
                imageSrc={FranciNevadaImage}
                altText="Logo von Franci Nevada"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/kitsu_kami/" target="_blank">Kitsukami</StyledLink>}
                imageSrc={KitsukamiImage}
                altText="Logo von Kitsukami"
        />
        <ContentCard
                title={<StyledLink href="https://linktr.ee/tactoki" target="_blank">TacToki Illustrations</StyledLink>}
                imageSrc={TacTokiImage}
                altText="Logo von TacToki Illustrations"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/lariina.art/" target="_blank">Larina</StyledLink>}
                imageSrc={LarinaImage}
                altText="Logo von Larina"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/madyra_arts" target="_blank">Madyra</StyledLink>}
                imageSrc={MadyraImage}
                altText="Logo von Madyra"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/quinnskanzashi/" target="_blank">Quinn</StyledLink>}
                imageSrc={QuinnImage}
                altText="Logo von Quinn"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/rina.mora.art" target="_blank">Rina Mora Art</StyledLink>}
                imageSrc={RinaMoraImage}
                altText="Logo von Rina Mora Art"
        />

        <ContentCard
                title={<StyledLink href="https://www.instagram.com/beehiveartists/" target="_blank">BeehiveArtists</StyledLink>}
                imageSrc={BeehiveArtistsImage}
                altText="Logo von BeehiveArtists"
        />
        <ContentCard
                title={<StyledLink href="https://instagram.com/fyly_cosplays" target="_blank">Fyly</StyledLink>}
                imageSrc={FyflyImage}
                altText="Logo von Fyly"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/cyancalla/" target="_blank">Tiny Paws Treasures &amp; CyanCalla</StyledLink>}
                imageSrc={tinypawsImage}
                altText="Logo von Tiny Paws Treasures &amp; CyanCalla"
        />
        <ContentCard
                title={<StyledLink href="https://yupiistar.carrd.co/#portfolio" target="_blank">Yupiistar</StyledLink>}
                imageSrc={yupiistarImage}
                altText="Logo von Yupiistar"
        />

        <ContentCard
                title={<StyledLink href="https://www.instagram.com/anaratwice/?hl=de" target="_blank">Anara_Twice</StyledLink>}
                imageSrc={AnaraImage}
                altText="Logo von Anara_Twice"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/christal.shadow/" target="_blank">Christal.Shad0w0</StyledLink>}
                imageSrc={ChristalShad0w0Image}
                altText="Logo von Christal.Shad0w0"
        />
        <ContentCard
                title={<StyledLink href="https://linktr.ee/KirianYume" target="_blank">Kirian Yume</StyledLink>}
                imageSrc={KirianYumeImage}
                altText="Logo von Kirian Yume"
        />
        <ContentCard
                title={<StyledLink href="https://www.instagram.com/valyraka/" target="_blank">Valyraka</StyledLink>}
                imageSrc={ValyrakaImage}
                altText="Logo von Valyraka"
        />
        </ContentContainer>
        

        <h1 style={{ textAlign: "center" }}>Autoren</h1>

        <ContentContainer>

        <ContentCard
                title={<StyledLink href="https://www.instagram.com/yui_spallek" target="_blank">Yui Spallek</StyledLink>}
                imageSrc={YuiSpallekImage}
                altText="Logo von Yui Spallek" 
        />
        <ContentCard
                title={<StyledLink href="https://www.markwamsler.de" target="_blank">Kemosabe</StyledLink>}
                imageSrc={MarkWamslerImage}
                altText="Logo von Kemosabe" 
        />
        <ContentCard
                title={<StyledLink href="https://www.naomihuber.com/" target="_blank">Ashturia</StyledLink>}
                imageSrc={AshturiaImage}
                altText="Logo von Ashturia" 
        />

      </ContentContainer>
    </>
  );
}
