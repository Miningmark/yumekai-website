import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

// Import Icons
import IconClose from "/public/assets/icons/close.svg";

export default function FileUpload({
  inputRef,
  isError,
  setFileError,
  files = [],
  setFiles,
  previewUrls = [],
  setPreviewUrls,
  maxFileSize = 1,
  acceptedExtensions = [".pdf"],
  maxFiles = 1,
  name = "fileupload",
  onFileSelect, // ⭐ NEU: Optional callback für custom handling (z.B. Crop)
}) {
  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => {
        if (url && typeof url === "string" && url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileChange({ target: { files } });
    }
  };

  const isValidFile = (file) => {
    const isValidExtension = acceptedExtensions.some((ext) =>
      file.name.toLowerCase().endsWith(ext)
    );
    const isValidSize = file.size / 1024 / 1024 <= maxFileSize;
    return isValidExtension && isValidSize;
  };

  const handleFileChange = (event) => {
    const selectedFiles = event.target?.files || event.dataTransfer?.files;
    if (!selectedFiles) return;

    // ⭐ NEU: Wenn onFileSelect definiert ist, Custom-Handler verwenden
    if (onFileSelect) {
      onFileSelect(Array.from(selectedFiles));
      // Input zurücksetzen
      if (event.target) {
        event.target.value = "";
      }
      return;
    }

    // Standard-Handling (wenn kein onFileSelect)
    const validFiles = [];
    const errors = [];

    Array.from(selectedFiles).forEach((file) => {
      const currentFileCount = files.length + validFiles.length;

      if (currentFileCount >= maxFiles) {
        if (!errors.includes(`Maximale Anzahl von ${maxFiles} Dateien erreicht.`)) {
          errors.push(`Maximale Anzahl von ${maxFiles} Dateien erreicht.`);
        }
        return;
      }

      if (isValidFile(file)) {
        validFiles.push(file);

        if (file.type.startsWith("image")) {
          const reader = new FileReader();
          reader.onload = () => {
            setPreviewUrls((prev) => [...prev, reader.result]);
          };
          reader.readAsDataURL(file);
        } else {
          setPreviewUrls((prev) => [...prev, null]);
        }
      } else {
        const fileSize = (file.size / 1024 / 1024).toFixed(2);
        const extension = file.name.split(".").pop();
        errors.push(`"${file.name}" ist ungültig (${extension.toUpperCase()}, ${fileSize} MB).`);
      }
    });

    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
    }

    if (errors.length > 0) {
      setFileError(errors.join(" "));
    } else {
      setFileError("");
    }

    // Input zurücksetzen, damit dieselbe Datei erneut ausgewählt werden kann
    if (event.target) {
      event.target.value = "";
    }
  };

  const handleRemoveFile = (index, e) => {
    e.stopPropagation();

    const urlToRevoke = previewUrls[index];
    if (urlToRevoke && typeof urlToRevoke === "string" && urlToRevoke.startsWith("blob:")) {
      URL.revokeObjectURL(urlToRevoke);
    }

    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    setFileError("");
  };

  return (
    <StyledWrapper
      ref={inputRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      $iserror={isError && "1"}
    >
      <FileUploadWrapper>
        <Label htmlFor={name}>
          <FileUploadDesign>
            <svg viewBox="0 0 640 512" height="1em">
              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
            </svg>
            <Text>Drag and Drop</Text>
            <Text>oder</Text>
            <BrowseButton>Datei auswählen</BrowseButton>
          </FileUploadDesign>
          <FileUploadInput
            id={name}
            type="file"
            multiple={maxFiles > 1}
            accept={acceptedExtensions.join(",")}
            onChange={handleFileChange}
            aria-label="Datei hochladen"
          />
        </Label>
      </FileUploadWrapper>
      <div style={{ marginTop: "20px" }} onClick={(e) => e.stopPropagation()}>
        {files.map((file, index) => (
          <FileRow key={index}>
            {previewUrls[index] && file.type.startsWith("image") ? (
              <img
                src={previewUrls[index]}
                alt={`Vorschau von ${file.name}`}
                style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "cover" }}
              />
            ) : (
              <p>{file.name}</p>
            )}
            <CloseButton
              onClick={(e) => handleRemoveFile(index, e)}
              type="button"
              aria-label={`${file.name} entfernen`}
            >
              <IconClose
                style={{ fill: "var(--danger)", height: "40px", width: "40px", margin: "0" }}
              />
            </CloseButton>
          </FileRow>
        ))}
      </div>
    </StyledWrapper>
  );
}

const Text = styled.p`
  margin: 0;
`;

const Label = styled.label`
  cursor: pointer;
  width: calc(100% - 60px);
  padding: 30px 30px;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 40px;
  border: 2px dashed ${({ theme, $iserror }) => ($iserror ? "red" : theme.text)};
  display: flex;
  flex-direction: column;
`;

const BrowseButton = styled.span`
  background-color: rgb(82, 82, 82);
  padding: 5px 15px;
  border-radius: 10px;
  color: white;
  transition: all 0.3s;

  &:hover {
    background-color: rgb(14, 14, 14);
  }
`;

const FileUploadWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FileUploadInput = styled.input`
  display: none;
`;

const FileUploadDesign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  svg {
    height: 50px;
    fill: rgb(82, 82, 82);
    margin-bottom: 20px;
  }
`;

const FileRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  gap: 10px;

  img {
    margin-right: 10px;
  }

  p {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
