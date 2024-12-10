import styled from "styled-components";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  InputOptionTextArea,
  InputOptionInput,
  InputOptionSelect,
  InputOptionCheckbox,
  InputOptionRadio,
} from "@/components/elements/InputComponents";
import {
  StyledButton,
  StyledForm,
  ErrorText,
  SuccessText,
  StyledLink,
  Spacer,
} from "../styledComponents";
import { RequiredNote } from "@/components/styledInputComponents";
import RadioButton from "../styled/RadioButton";
import CheckBox from "../styled/CheckBox";

const UploadInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.color3};
  color: ${({ theme }) => theme.textColor};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.textColor};
  margin: 10px 0 10px 0;

  img {
    margin: 10px;
  }
  p {
    margin: 10px 0 0 0;
    padding: 0;
  }
`;

const EU_COUNTRIES = [
  "Deutschland",
  "Österreich",
  "Schweiz",
  "Belgien",
  "Frankreich",
  "Italien",
  "Spanien",
  "Niederlande",
  "Polen",
  "Tschechien",
  "Dänemark",
  "Schweden",
  "Norwegen",
  "Finnland",
  "Irland",
  "Portugal",
  "Griechenland",
  "Ungarn",
  "Rumänien",
  "Bulgarien",
];

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const isImageFile = (fileName) => {
  return ACCEPTED_IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
};

export default function HelferForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [discordName, setDiscordName] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [gender, setGender] = useState("");
  const [clothesSize, setClothesSize] = useState("");
  const [arrival, setArrival] = useState("");
  const [requiresParkingTicket, setRequiresParkingTicket] = useState(false);
  const [assemblyFriday, setAssemblyFriday] = useState(false);
  const [assembly, setAssembly] = useState(false);
  const [deconstruction, setDeconstruction] = useState(false);

  const [foodPreference, setFoodPreference] = useState("");
  const [foodDetails, setFoodDetails] = useState("");

  const [occupation, setOccupation] = useState("");
  const [strengths, setStrengths] = useState("");
  const [departmentAdmission, setDepartmentAdmission] = useState(false);
  const [departmentWeaponsCheck, setDepartmentWeaponsCheck] = useState(false);
  const [departmentStage, setDepartmentStage] = useState(false);
  const [departmentSpringer, setDepartmentSpringer] = useState(false);
  const [departmentKaraoke, setDepartmentKaraoke] = useState(false);
  const [departmentBringAndBay, setDepartmentBringAndBay] = useState(false);
  const [departmentWorkshop, setDepartmentWorkshop] = useState(false);
  const [departmentSpecialGuest, setDepartmentSpecialGuest] = useState(false);
  const [other, setOther] = useState("");

  const [workTimeSaturday, setWorkTimeSaturday] = useState("");
  const [workTimeSunday, setWorkTimeSunday] = useState("");

  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [contactForwarding, setContactForwarding] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");

  const refs = {
    name: useRef(null),
    lastName: useRef(null),
    nickname: useRef(null),
    gender: useRef(null),
    street: useRef(null),
    postalCode: useRef(null),
    city: useRef(null),
    country: useRef(null),
    email: useRef(null),
    confirmEmail: useRef(null),
    gender: useRef(null),
    birthdate: useRef(null),
    discordName: useRef(null),
    phone: useRef(null),
    privacyPolicy: useRef(null),
    contactForwarding: useRef(null),
    clothesSize: useRef(null),
    arrival: useRef(null),
    foodPreference: useRef(null),
    foodDetails: useRef(null),
    occupation: useRef(null),
    strengths: useRef(null),
    other: useRef(null),
    workTimeSaturday: useRef(null),
    workTimeSunday: useRef(null),
    image: useRef(null),
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = [];
    setErrors([]);
    setSuccess("");

    const validateField = (value, fieldName, title, min, max, required = false) => {
      if (required && !value.trim())
        newErrors.push({ field: fieldName, message: `${title} ist ein Pflichtfeld` });
      if (value && value.length < min)
        newErrors.push({ field: fieldName, message: `${title} ist zu kurz` });
      if (value.length > max) newErrors.push({ field: fieldName, message: `${title} ist zu lang` });
      return null;
    };

    validateField(name, "name", "Vorname", 3, 50, true);
    validateField(lastName, "lastName", "Nachname", 3, 50, true);
    if (nickname && nickname.length < 3)
      newErrors.push({ field: "nickname", message: "Rufname ist zu kurz" });
    if (nickname.length > 50) newErrors.push({ field: "nickname", message: "Rufname ist zu lang" });
    if (!email.trim()) newErrors.push({ field: "email", message: "E-Mail ist ein Pflichtfeld" });
    if (!email.includes("@"))
      newErrors.push({ field: "email", message: "E-Mail-Adresse ist ungültig" });
    if (email.length > 100)
      newErrors.push({
        field: "email",
        message: "E-Mail-Adresse darf maximal 100 Zeichen lang sein",
      });
    if (confirmEmail.trim() !== email.trim())
      newErrors.push({ field: "confirmEmail", message: "E-Mail stimmt nicht überein" });
    validateField(gender, "gender", "Geschlecht", 3, 50, true);
    validateField(discordName, "discordName", "Discord Name", 3, 100, true);
    validateField(phone, "phone", "Telefonnummer", 7, 25, true);
    validateField(street, "street", "Straße", 3, 50, true);
    validateField(postalCode, "postalCode", "PLZ", 4, 6, true);
    validateField(city, "city", "Ort", 3, 50, true);
    validateField(country, "country", "Land", 3, 50, true);
    validateField(occupation, "occupation", "Beruf/Ausbildung", 3, 100);
    validateField(strengths, "strengths", "Stärken", 3, 255);
    validateField(other, "other", "Sonstiges", 3, 500);
    validateField(workTimeSaturday, "workTimeSaturday", "Samstag", 0, 255);
    validateField(workTimeSunday, "workTimeSunday", "Sonntag", 0, 255);
    validateField(foodPreference, "foodPreference", "Essen", 0, 32, true);
    validateField(foodDetails, "foodDetails", "Allergien/Unverträglichkeiten", 3, 500);
    validateField(clothesSize, "clothesSize", "T-Shirt Größe", 1, 5, true);
    validateField(arrival, "arrival", "Anreise", 3, 50, true);

    //Geburtsdatum
    if (!birthdate.trim()) {
      newErrors.push({ field: "birthdate", message: "Geburtsdatum ist ein Pflichtfeld" });
    } else {
      const birthDateObject = new Date(birthdate);
      const today = new Date();
      const age = today.getFullYear() - birthDateObject.getFullYear();
      const isBirthdayPassedThisYear =
        today.getMonth() > birthDateObject.getMonth() ||
        (today.getMonth() === birthDateObject.getMonth() &&
          today.getDate() >= birthDateObject.getDate());

      const actualAge = isBirthdayPassedThisYear ? age : age - 1; // Alter korrigieren, falls Geburtstag dieses Jahr noch nicht war

      if (actualAge < 18) {
        newErrors.push({ field: "birthdate", message: "Du musst mindestens 18 Jahre alt sein" });
      }
    }

    //Bild
    if (!file) newErrors.push({ field: "image", message: "Bild ist ein Pflichtfeld" });

    //Datenschutzerklärung
    if (!privacyPolicy)
      newErrors.push({ field: "privacyPolicy", message: "Datenschutzerklärung zustimmen" });

    //Kontaktweitergabe
    if (!contactForwarding)
      newErrors.push({ field: "contactForwarding", message: "Kontaktweitergabe zustimmen" });

    //Check if there are any errors
    if (newErrors.length > 0) {
      setErrors(newErrors);

      // Scroll to the first error
      const firstError = newErrors[0];
      if (refs[firstError.field]?.current) {
        refs[firstError.field].current.scrollIntoView({ behavior: "smooth", block: "center" });
        refs[firstError.field].current.focus();
      }
      return;
    }

    const desiredTeam =
      [
        departmentAdmission && "Einlasskontrolle",
        departmentWeaponsCheck && "Waffencheck",
        departmentStage && "Bühne",
        departmentSpringer && "Springer",
        departmentKaraoke && "Karaoke",
        departmentBringAndBay && "Bring & Buy",
        departmentWorkshop && "Workshop",
        departmentSpecialGuest && "Ehrengast betreuung",
      ]
        .filter(Boolean)
        .join(", ")
        .trim() || "Kein Wunschteam";

    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("nickname", nickname);
    formData.append("gender", gender);
    formData.append("discordName", discordName);
    formData.append("birthdate", birthdate);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("street", street);
    formData.append("postalCode", postalCode);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("occupation", occupation);
    formData.append("clothesSize", clothesSize);
    formData.append("arrival", arrival);
    formData.append("requiresParkingTicket", requiresParkingTicket);
    formData.append("foodPreference", foodPreference);
    formData.append("foodDetails", foodDetails);
    formData.append("strengths", strengths);
    formData.append("desiredTeam", desiredTeam);
    formData.append("other", other);
    formData.append("assemblyFriday", assemblyFriday);
    formData.append("assembly", assembly);
    formData.append("deconstruction", deconstruction);
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("contactForwarding", contactForwarding);
    formData.append("workTimeSaturday", workTimeSaturday);
    formData.append("workTimeSunday", workTimeSunday);
    formData.append("file", file);

    try {
      const response = await fetch("/api/helferRegistration", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(
          "Deine Anmeldung war erfolgreich. Du erhälst in Kürze eine Bestätigung per E-Mail."
        );

        setErrors([]);
        setName("");
        setLastName("");
        setNickname("");
        setGender(null);
        setDiscordName("");
        setBirthdate("");
        setEmail("");
        setConfirmEmail("");
        setPhone("");
        setStreet("");
        setPostalCode("");
        setCity("");
        setCountry("");
        setOccupation("");
        setClothesSize("");
        setArrival("");
        setRequiresParkingTicket(false);
        setFoodPreference("");
        setFoodDetails("");
        setStrengths("");
        setDepartmentAdmission(false);
        setDepartmentWeaponsCheck(false);
        setDepartmentStage(false);
        setDepartmentSpringer(false);
        setDepartmentKaraoke(false);
        setDepartmentBringAndBay(false);
        setDepartmentWorkshop(false);
        setDepartmentSpecialGuest(false);
        setOther("");
        setAssembly(false);
        setDeconstruction(false);
        setAssemblyFriday(false);
        setWorkTimeSaturday("");
        setWorkTimeSunday("");
        setPrivacyPolicy(false);
        setContactForwarding(false);
        setFile(null);
        setPreviewUrl(null);
      } else {
        const result = await response.json();
        setErrors([
          {
            field: "general",
            message: "Fehler beim Absenden der Anmeldung, Bitte versuche es später nochmal.",
          },
        ]);
        console.error("Fehler beim Einfügen der Daten:", result.error);
      }
    } catch (error) {
      setErrors([
        {
          field: "general",
          message: "Fehler beim Absenden der Anmeldung, Bitte versuche es später nochmal.",
        },
      ]);
      console.error("Fehler beim Einfügen der Daten:", error);
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    const maxFileSize = 10 * 1024 * 1024; // 10MB in Bytes

    if (file && file.size > maxFileSize) {
      setFileError("Die Datei darf maximal 10MB groß sein.");
      return;
    }
    setFileError("");
    setFile(file);

    if (isImageFile(file.name)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
      setFile(null);
      setFileError("Bitte wähle ein gültiges Bild aus. (jpg, jpeg, png, webp)");
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <p>
        Felder mit <RequiredNote>*</RequiredNote> sind Pflichtfelder.
      </p>
      <h3>Persönliche Angaben</h3>
      <InputOptionInput
        title="Name"
        inputText={name}
        inputChange={(value) => setName(value)}
        inputRef={refs.name}
        isError={errors.some((error) => error.field === "name")}
        require
      />
      <InputOptionInput
        title="Nachname"
        inputText={lastName}
        inputChange={(value) => setLastName(value)}
        inputRef={refs.lastName}
        isError={errors.some((error) => error.field === "lastName")}
        require
      />
      <InputOptionInput
        title="Rufname"
        inputText={nickname}
        inputChange={(value) => setNickname(value)}
        inputRef={refs.nickname}
        isError={errors.some((error) => error.field === "nickname")}
      />
      <InputOptionInput
        title="E-Mail"
        inputText={email}
        inputChange={(value) => setEmail(value)}
        inputRef={refs.email}
        isError={errors.some((error) => error.field === "email")}
        require
      />
      <InputOptionInput
        title="E-Mail Bestätigen"
        inputText={confirmEmail}
        inputChange={setConfirmEmail}
        inputRef={refs.emailConfirm}
        isError={errors.some((error) => error.field === "confirmEmail")}
        require
      />
      <RadioButton
        title="Geschlecht"
        options={["Männlich", "Weiblich", "Divers"]}
        selectedOption={gender}
        inputChange={(value) => setGender(value)}
        inputRef={refs.gender}
        isError={errors.some((error) => error.field === "gender")}
        require
      />
      <InputOptionInput
        title="Geburtsdatum"
        inputText={birthdate}
        inputChange={(value) => setBirthdate(value)}
        type="date"
        inputRef={refs.birthdate}
        isError={errors.some((error) => error.field === "birthdate")}
        require
      />

      <InputOptionInput
        title="Telefonnummer"
        inputText={phone}
        inputChange={(value) => setPhone(value)}
        inputRef={refs.phone}
        isError={errors.some((error) => error.field === "phone")}
        require
      />
      <InputOptionInput
        title="Discord Name"
        inputText={discordName}
        inputChange={(value) => setDiscordName(value)}
        inputRef={refs.discordName}
        isError={errors.some((error) => error.field === "discordName")}
        require
      />

      <StyledButton
        type="button"
        as="label"
        htmlFor="fileUpload"
        ref={refs.image}
        style={{ backgroundColor: "var(--secondary-color)" }}
      >
        Foto hochladen <RequiredNote>*</RequiredNote>
        <input
          type="file"
          id="fileUpload"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </StyledButton>
      {fileError && <ErrorText>{fileError}</ErrorText>}
      {previewUrl && (
        <UploadInfo>
          <p>{file.name}</p>
          <Image
            src={previewUrl}
            alt="Hochgeladenes Bild"
            width={200}
            height={200}
            style={{
              width: "auto",
              maxHeight: "150px",
              borderRadius: "5px",
            }}
          />
        </UploadInfo>
      )}

      <Spacer />
      <h3>Adresse</h3>

      <InputOptionInput
        title="Straße"
        inputText={street}
        inputChange={setStreet}
        inputRef={refs.street}
        isError={errors.some((error) => error.field === "street")}
        require
      />
      <InputOptionInput
        title="PLZ"
        inputText={postalCode}
        inputChange={setPostalCode}
        inputRef={refs.postalCode}
        isError={errors.some((error) => error.field === "postalCode")}
        require
      />
      <InputOptionInput
        title="Ort"
        inputText={city}
        inputChange={setCity}
        inputRef={refs.city}
        isError={errors.some((error) => error.field === "city")}
        require
      />
      <InputOptionSelect
        title="Land"
        options={EU_COUNTRIES}
        inputText={country}
        inputChange={(value) => setCountry(value)}
        inputRef={refs.country}
        isError={errors.some((error) => error.field === "country")}
        require
      />

      <Spacer />
      <h3>Allgemeines</h3>

      <InputOptionSelect
        title="T-Shirt Größe"
        options={["S", "M", "L", "XL", "XXL"]}
        inputText={clothesSize}
        inputChange={setClothesSize}
        inputRef={refs.clothesSize}
        isError={errors.some((error) => error.field === "clothesSize")}
        require
      />
      <RadioButton
        title="Anreise"
        options={["Auto", "ÖPNV", "Sonstige"]}
        selectedOption={arrival}
        inputChange={setArrival}
        inputRef={refs.arrival}
        isError={errors.some((error) => error.field === "arrival")}
        require
      />
      {arrival === "Auto" && (
        <CheckBox
          title="Parkticket benötigt"
          isChecked={requiresParkingTicket}
          inputChange={setRequiresParkingTicket}
        />
      )}
      <CheckBox
        title={"Aufbau Freitag"}
        isChecked={assemblyFriday}
        inputChange={(value) => setAssemblyFriday(value)}
      />
      <CheckBox
        title={"Aufbauhelfer"}
        isChecked={assembly}
        inputChange={(value) => setAssembly(value)}
      />
      <CheckBox
        title={"Abbauhelfer"}
        isChecked={deconstruction}
        inputChange={(value) => setDeconstruction(value)}
      />

      <Spacer />
      <h3>Verpflegung</h3>

      <RadioButton
        title="Essen"
        options={["normal", "vegetarisch", "vegan"]}
        selectedOption={foodPreference}
        inputChange={setFoodPreference}
        inputRef={refs.foodPreference}
        isError={errors.some((error) => error.field === "foodPreference")}
        require
      />
      <InputOptionTextArea
        title="Allergien/Unverträglichkeiten"
        inputText={foodDetails}
        inputChange={setFoodDetails}
        inputRef={refs.foodDetails}
        isError={errors.some((error) => error.field === "foodDetails")}
      />

      <Spacer />
      <h3>Interessen/Aufgaben/Erfahrungen</h3>

      <InputOptionInput
        title="Beruf/Ausbildung"
        inputText={occupation}
        inputChange={setOccupation}
        inputRef={refs.occupation}
        isError={errors.some((error) => error.field === "occupation")}
      />
      <InputOptionTextArea
        title="Stärken"
        inputText={strengths}
        inputChange={(value) => setStrengths(value)}
        inputRef={refs.strengths}
        isError={errors.some((error) => error.field === "strengths")}
      />
      <h4>Wunschteam (kann nicht garantiert werden)</h4>
      <CheckBox
        title={"Einlasskontrolle"}
        isChecked={departmentAdmission}
        inputChange={(value) => setDepartmentAdmission(value)}
      />
      <CheckBox
        title={"Waffencheck"}
        isChecked={departmentWeaponsCheck}
        inputChange={(value) => setDepartmentWeaponsCheck(value)}
      />
      <CheckBox
        title={"Bühne"}
        isChecked={departmentStage}
        inputChange={(value) => setDepartmentStage(value)}
      />
      <CheckBox
        title={"Springer"}
        isChecked={departmentSpringer}
        inputChange={(value) => setDepartmentSpringer(value)}
      />
      <CheckBox
        title={"Karaoke"}
        isChecked={departmentKaraoke}
        inputChange={(value) => setDepartmentKaraoke(value)}
      />
      <CheckBox
        title={"Bring & Buy"}
        isChecked={departmentBringAndBay}
        inputChange={(value) => setDepartmentBringAndBay(value)}
      />
      <CheckBox
        title={"Workshop"}
        isChecked={departmentWorkshop}
        inputChange={(value) => setDepartmentWorkshop(value)}
      />

      <InputOptionTextArea
        title="Sonstiges"
        inputText={other}
        inputChange={(value) => setOther(value)}
        inputRef={refs.other}
        isError={errors.some((error) => error.field === "other")}
      />

      <Spacer />
      <h3>Einsatzzeiten</h3>

      <p>
        Bitte gib hier an, wie viele Stunden du am jeweiligen Tag Helfen möchtest (min. 5 Stunden).
      </p>
      <InputOptionInput
        title="Samstag"
        inputText={workTimeSaturday}
        inputChange={setWorkTimeSaturday}
        inputRef={refs.workTimeSaturday}
        isError={errors.some((error) => error.field === "workTimeSaturday")}
      />
      <InputOptionInput
        title="Sonntag"
        inputText={workTimeSunday}
        inputChange={setWorkTimeSunday}
        inputRef={refs.workTimeSunday}
        isError={errors.some((error) => error.field === "workTimeSunday")}
      />

      <Spacer />
      <h3>Richtlinien</h3>

      <CheckBox
        title="privacyPolicy"
        content={
          <p>
            Ich habe die{" "}
            <StyledLink href="/datenschutz" target="_blank">
              Datenschutzerklärung
            </StyledLink>{" "}
            gelesen, verstanden und akzeptiere diese. Ich habe verstanden, dass ich die Zustimmung
            zur Datenschutzerklärung jederzeit widerrufen kann. Über den Widerruf habe ich die
            Passage in der Datenschutzerklärung gelesen und verstanden.
            <RequiredNote>*</RequiredNote>
          </p>
        }
        isChecked={privacyPolicy}
        inputChange={(value) => setPrivacyPolicy(value)}
        inputRef={refs.privacyPolicy}
        isError={errors.some((error) => error.field === "privacyPolicy")}
        require
      />

      <CheckBox
        title="contactForwarding"
        content={
          <p>
            Dürfen wir der zuständigen Orga deine Kontaktdaten weiter geben.
            <RequiredNote>*</RequiredNote>
          </p>
        }
        isChecked={contactForwarding}
        inputChange={(value) => setContactForwarding(value)}
        inputRef={refs.contactForwarding}
        isError={errors.some((error) => error.field === "contactForwarding")}
        require
      />

      {errors && (
        <ul>
          {errors.map((error, index) => (
            <li key={index} style={{ color: "red" }}>
              {error.message}
            </li>
          ))}
        </ul>
      )}
      {success && <SuccessText>{success}</SuccessText>}
      <StyledButton type="submit">Anmelden</StyledButton>
    </StyledForm>
  );
}
