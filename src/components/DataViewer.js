import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";

//Components
import { StyledButton } from "@/components/styledComponents";

// Import SVG icons
import IconClose from "/public/assets/icons/close.svg";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 105;
  padding: 20px;
  max-width: 400px;
  width: 90%;
  max-height: 90vh;
  overflow: auto;
  border-radius: var(--border-radius);
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.color2};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  h2 {
    margin: 0 0 20px 0;
  }

  svg {
    fill: ${({ theme }) => theme.textColor};
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export const ModalCloseIcon = styled(IconClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  fill: ${({ theme }) => theme.textColor};
  width: 35px;
  height: 35px;

  :hover {
    fill: var(--danger);
  }
`;

const EnlargedImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  cursor: pointer;
`;

export default function ShowFullSizeURIData({ file, handleClose }) {
  const fileName = file.split("/").pop();
  const normalizedFile = file.startsWith("/public") ? file.replace("/public", "") : file;

  function handleDownload() {
    const link = document.createElement("a");
    link.href = normalizedFile;
    link.download = fileName;
    link.click();
  }

  return (
    <>
      <ModalOverlay onClick={handleClose}>
        <EnlargedImageContainer onClick={handleClose}>
          {fileName.endsWith(".pdf") ? (
            <ModalContent style={{ width: "90vw", maxWidth: "90vw", height: "90vh" }}>
              <ModalCloseIcon onClick={handleClose} />
              <h2>{fileName}</h2>
              <div style={{ height: "calc(90vh - 70px)" }}>
                <iframe
                  src={file}
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="PDF Document"
                />
              </div>
            </ModalContent>
          ) : (
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Image
                src={normalizedFile}
                alt={fileName}
                width={800}
                height={600}
                style={{ width: "auto", height: "60vh" }}
              />
              <StyledButton style={{ width: "150px" }} onClick={handleDownload}>
                Download
              </StyledButton>
            </div>
          )}
        </EnlargedImageContainer>
      </ModalOverlay>
    </>
  );
}
