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
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";

//Images
import mapImage from "/public/assets/images/yumekai2025/map.png";


export default function Allgemein(){


    return(
    <>
        <h1>Allgemein</h1>

        <p>Text......</p>

        <Image
                  src={mapImage}
                  alt="Anfahrt Karte"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
                <small>Hintergrundkarte: © Bayerische Vermessungsverwaltung (2025), Datenquelle: Geoportal Bayern www.geoportal.bayern.de</small>

         <StyledLinkAsButton href={"https://maps.app.goo.gl/o7RvbkgHpFvpPAjZ7"}>zu Google Maps</StyledLinkAsButton>

    </>
    )
}