import React from "react";
import styled from "styled-components";

export default function FileUpload({ inputRef, handleFileChange, isError, file }) {
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

  return (
    <StyledWrapper ref={inputRef}>
      <div className="file-upload-form" onDragOver={handleDragOver} onDrop={handleDrop}>
        <Label htmlFor="file" className="file-upload-label" $iserror={isError && "1"}>
          <div className="file-upload-design">
            <svg viewBox="0 0 640 512" height="1em">
              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
            </svg>
            <Text>Drag and Drop</Text>
            <Text>oder</Text>
            <span className="browse-button">Datei auswählen</span>
          </div>
          <input id="file" type="file" onChange={handleFileChange} />

          <Title>{file ? file.name : "Keine Datei ausgewählt"}</Title>
        </Label>
      </div>
    </StyledWrapper>
  );
}

const Title = styled.p`
  margin: 15px 0 0 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = styled.p`
  margin: 0;
`;

const Label = styled.label`
  cursor: pointer;
  width: calc(100% - 60px);
  //background-color: red;
  padding: 30px 30px;
  border-radius: 40px;
  border: 2px dashed ${({ theme, $iserror }) => ($iserror ? "red" : theme.text)};
  //box-shadow: 0px 0px 200px -50px rgba(0, 0, 0, 0.719);
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .file-upload-form {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .file-upload-label input {
    display: none;
  }

  .file-upload-label svg {
    height: 50px;
    fill: rgb(82, 82, 82);
    margin-bottom: 20px;
  }

  .file-upload-label {
  }

  .file-upload-design {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  .browse-button {
    background-color: rgb(82, 82, 82);
    padding: 5px 15px;
    border-radius: 10px;
    color: white;
    transition: all 0.3s;
  }

  .browse-button:hover {
    background-color: rgb(14, 14, 14);
  }
`;
