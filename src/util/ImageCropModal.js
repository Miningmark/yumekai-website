import { useState, useCallback } from "react";
import styled from "styled-components";
import Cropper from "react-easy-crop";

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.backgroundColor2};
  border-radius: var(--border-radius-large);
  padding: 20px;
  max-width: 90vw;
  max-height: 90vh;
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.backgroundColor3};
  padding-bottom: 10px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primaryColor};
  font-family: Tahoma;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 1.25rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px 10px;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const CropContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: ${({ theme }) => theme.backgroundColor3};
  border-radius: var(--border-radius-small);
  overflow: hidden;

  @media (max-width: 500px) {
    height: 300px;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ZoomControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ZoomLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 60px;
  color: ${({ theme }) => theme.text};
`;

const ZoomSlider = styled.input`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  background: ${({ theme }) => theme.backgroundColor3};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
    border: none;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: var(--border-radius-small);
  font-size: 1rem;
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  font-weight: 500;
  transition: all 0.2s;

  ${(props) =>
    props.$primary
      ? `
    background-color: ${props.theme.primaryColor};
    color: white;
    
    &:hover:not(:disabled) {
      filter: brightness(0.9);
      transform: translateY(-1px);
    }
  `
      : `
    background-color: ${props.theme.backgroundColor3};
    color: ${props.theme.text};
    
    &:hover:not(:disabled) {
      background-color: ${props.theme.backgroundColor4};
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
`;

const InfoText = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

/**
 * Hilfsfunktion zum Ermitteln des MIME-Types aus dem Dateinamen
 */
const getMimeTypeFromFileName = (fileName) => {
  const extension = fileName.toLowerCase().split(".").pop();
  const mimeTypes = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    gif: "image/gif",
  };
  return mimeTypes[extension] || "image/png";
};

/**
 * Hilfsfunktion zum Erstellen eines gecroppten Bildes
 */
const createCroppedImage = async (imageSrc, pixelCrop, mimeType = "image/png") => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Setze Canvas-Größe auf das gecropte Gebiet
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  // Qualität: 0.95 für JPEG, wird bei PNG ignoriert
  const quality = mimeType === "image/jpeg" ? 0.95 : 1;

  // Konvertiere Canvas zu Blob mit dem Original-MIME-Type
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Canvas ist leer"));
          return;
        }
        resolve(blob);
      },
      mimeType,
      quality
    );
  });
};

/**
 * Hilfsfunktion zum Laden eines Bildes
 */
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.src = url;
  });

const ImageCropModal = ({ imageUrl, onCropComplete, onCancel, fileName = "cropped-image.png" }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const onCropCompleteHandler = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCropConfirm = async () => {
    if (!croppedAreaPixels) return;

    try {
      setIsProcessing(true);

      // Ermittle den MIME-Type aus dem Dateinamen
      const mimeType = getMimeTypeFromFileName(fileName);

      // Erstelle das gecropte Bild mit dem Original-MIME-Type
      const croppedBlob = await createCroppedImage(imageUrl, croppedAreaPixels, mimeType);

      // Erstelle ein File-Objekt aus dem Blob mit dem Original-Typ
      const croppedFile = new File([croppedBlob], fileName, { type: mimeType });

      // Erstelle eine Vorschau-URL
      const previewUrl = URL.createObjectURL(croppedBlob);

      onCropComplete({
        blob: croppedBlob,
        file: croppedFile,
        previewUrl: previewUrl,
      });
    } catch (error) {
      console.error("Fehler beim Cropping:", error);
      alert("Fehler beim Zuschneiden des Bildes. Bitte versuche es erneut.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Bild zuschneiden</ModalTitle>
          <CloseButton onClick={onCancel} disabled={isProcessing}>
            x
          </CloseButton>
        </ModalHeader>

        <CropContainer>
          <Cropper
            image={imageUrl}
            crop={crop}
            zoom={zoom}
            aspect={4 / 5}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={onCropCompleteHandler}
          />
        </CropContainer>

        <ControlsContainer>
          <ZoomControl>
            <ZoomLabel>Zoom:</ZoomLabel>
            <ZoomSlider
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
            />
          </ZoomControl>

          <InfoText>
            Verschiebe das Bild und passe den Zoom an. Das Bild wird im 4:5 Format zugeschnitten.
          </InfoText>
        </ControlsContainer>

        <ButtonContainer>
          <Button onClick={onCancel} disabled={isProcessing}>
            Abbrechen
          </Button>
          <Button $primary onClick={handleCropConfirm} disabled={isProcessing}>
            {isProcessing ? "Verarbeite..." : "Übernehmen"}
          </Button>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageCropModal;
