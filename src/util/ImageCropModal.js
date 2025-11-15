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
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 90vw;
  max-height: 90vh;
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px 10px;
  color: #666;

  &:hover {
    color: #000;
  }
`;

const CropContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: #f0f0f0;
  border-radius: 4px;
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
`;

const ZoomSlider = styled.input`
  flex: 1;
  height: 6px;
  border-radius: 3px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
    border: none;
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
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  ${(props) =>
    props.$primary
      ? `
    background-color: #007bff;
    color: white;
    
    &:hover {
      background-color: #0056b3;
    }
  `
      : `
    background-color: #6c757d;
    color: white;
    
    &:hover {
      background-color: #545b62;
    }
  `}

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const InfoText = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #666;
  text-align: center;
`;

/**
 * Hilfsfunktion zum Erstellen eines gecroppten Bildes
 */
const createCroppedImage = async (imageSrc, pixelCrop) => {
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

  // Konvertiere Canvas zu Blob (PNG)
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Canvas ist leer"));
          return;
        }
        resolve(blob);
      },
      "image/png",
      1
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

/**
 * ImageCropModal Komponente
 *
 * @param {Object} props
 * @param {string} props.imageUrl - URL des zu croppenden Bildes
 * @param {Function} props.onCropComplete - Callback mit dem gecroppten Bild (Blob und File)
 * @param {Function} props.onCancel - Callback beim Abbrechen
 * @param {string} props.fileName - Ursprünglicher Dateiname (optional)
 */
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

      // Erstelle das gecropte Bild
      const croppedBlob = await createCroppedImage(imageUrl, croppedAreaPixels);

      // Erstelle ein File-Objekt aus dem Blob
      const croppedFile = new File([croppedBlob], fileName, { type: "image/png" });

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
            ×
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
            Verschiebe das Bild und passe den Zoom an. Das Bild wird im 5:4 Format zugeschnitten.
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
