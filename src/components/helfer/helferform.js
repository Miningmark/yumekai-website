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
  UnstyledLink,
  StyledLink,
  Spacer,
  SpacerEmpty,
} from "../styledComponents";
import { RequiredNote } from "@/components/styledInputComponents";

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

export default function HelferForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [discordName, setDiscordName] = useState("");
  const [phone, setPhone] = useState("");

  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [gender, setGender] = useState(null);
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
    emailConfirm: useRef(null),
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
  };

  /*
  async function handleSendMessage() {
    if (isSending || (!getStartedMessage(selectedChat.id) && !file) || !selectedChat) return;

    if (getStartedMessage(selectedChat.id).length > 32000) {
      setErrorChatMessage("Nachricht darf maximal 32000 Zeichen lang sein");
      return;
    }

    setErrorChatMessage("");
    setIsSending(true);
    const formData = new FormData();
    formData.append("content", getStartedMessage(selectedChat.id));
    formData.append("senderId", session.user.id);
    if (file) formData.append("file", file);
    const LastMessageTime = new Date(new Date().setHours(new Date().getHours() + 2))
      .toISOString()
      .slice(0, 19);

    try {
      const response = await fetch(`/api/teamChat/${selectedChat.id}/messages`, {
        method: "POST",
        body: formData,
      });

      const response2 = await fetch(`/api/teamChat/chatUpdate/${selectedChat.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          last_message_time: LastMessageTime.replace("T", " "),
        }),
      });

      if (response.ok && response2.ok) {
        const messagesResponse = await fetch(`/api/teamChat/${selectedChat.id}/lastMessage`);
        const { messages: messagesData } = await messagesResponse.json();
        setChats(
          chats.map((chat) =>
            chat.id === selectedChat.id ? { ...chat, last_message_time: LastMessageTime } : chat
          )
        );
        setMessages((prevMessages) => [...prevMessages, ...messagesData]);
        setTotalMessages((prev) => prev + 1);
        socket.emit("sendMessage", ...messagesData);
        newOnlineTime();
        removeStartedMessage(selectedChat.id);
        setFile(null);
      }
    } catch (error) {
      setErrorChatMessage("Fehler beim Senden der Nachricht");
    } finally {
      setIsSending(false);
    }
  }
    */

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = [];
    setErrors([]);
    setSuccess("");

    console.log(email, confirmEmail);

    const validateField = (value, fieldName, min, max, required = false) => {
      if (required && !value.trim())
        newErrors.push({ field: fieldName, message: `${fieldName} ist ein Pflichtfeld` });
      if (value.length < min)
        newErrors.push({ field: fieldName, message: `${fieldName} ist zu kurz` });
      if (value.length > max)
        newErrors.push({ field: fieldName, message: `${fieldName} ist zu lang` });
      return null;
    };

    validateField(name, "Vorname", 3, 50, true);
    validateField(lastName, "Nachname", 3, 50, true);
    validateField(nickname, "Rufname", 3, 50);
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
    validateField(discordName, "Discord Name", 0, 100, true);
    validateField(phone, "Telefonnummer", 0, 25, true);
    validateField(street, "Straße", 3, 50, true);
    validateField(postalCode, "PLZ", 4, 6, true);
    validateField(city, "Ort", 3, 50, true);
    validateField(country, "Land", 0, 50, true);
    validateField(occupation, "Beruf/Ausbildung", 3, 100);
    validateField(strengths, "Stärken", 3, 255);
    validateField(other, "Sonstiges", 3, 500);
    validateField(workTimeSaturday, "Samstag", 5, 255);
    validateField(workTimeSunday, "Sonntag", 5, 255);
    validateField(foodPreference, "Essen", 0, 32, true);
    validateField(foodDetails, "Allergien/Unverträglichkeiten", 0, 500);
    validateField(clothesSize, "T-Shirt Größe", 1, 5, true);
    validateField(arrival, "Anreise", 2, 50, true);

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

    //Datenschutzerklärung
    if (!privacyPolicy) newErrors.push({ field: "privacyPolicy", message: "Datenschutzerklärung" });

    //Kontaktweitergabe
    if (!contactForwarding)
      newErrors.push({ field: "contactForwarding", message: "Kontaktweitergabe" });

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

    try {
      const response = await fetch("/api/helferRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastName,
          nickname,
          gender,
          discordName,
          birthdate,
          email,
          phone,
          street,
          postalCode,
          city,
          country,
          occupation,
          clothesSize,
          arrival,
          requiresParkingTicket,
          foodPreference,
          foodDetails,
          strengths,
          desiredTeam,
          other,
          assemblyFriday,
          assembly,
          deconstruction,
          privacyPolicy,
          contactForwarding,
          workTimeSaturday,
          workTimeSunday,
        }),
      });

      if (response.ok) {
        console.log("Daten erfolgreich eingefügt:"); //TODO: Löschen result.insertID
        setSuccess(
          "Deine Anmeldung war erfolgreich. Du erhälst in Kürze eine Bestätigung per E-Mail."
        );
        setErrors("");
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
      } else {
        const result = await response.json();
        setErrors([
          {
            field: "general",
            message: "Fehler beim Absenden der Anmeldung, Bitte versuche es später nochmal.",
          },
        ]);
        console.error("Fehler beim Einfügen der Daten:", result.error); //TODO: allternative bestätigunsseite wegen bereits eingegebener E-Mail
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

  return (
    <StyledForm onSubmit={handleSubmit}>
      <p>
        Felder mit <RequiredNote>*</RequiredNote> sind Pflichtfelder.
      </p>
      <h2>Persönliche Angaben</h2>
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
      <InputOptionRadio
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

      <StyledButton type="button">Foto hochladen</StyledButton>
      <p></p>

      <Spacer />
      <h2>Adresse</h2>

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
      <h2>Allgemeines</h2>

      <InputOptionSelect
        title="T-Shirt Größe"
        options={["S", "M", "L", "XL", "XXL"]}
        inputText={clothesSize}
        inputChange={setClothesSize}
        inputRef={refs.clothesSize}
        isError={errors.some((error) => error.field === "tshirtSize")}
        require
      />
      <InputOptionRadio
        title="Anreise"
        options={["Auto", "ÖPNV", "Sonstige"]}
        selectedOption={arrival}
        inputChange={setArrival}
        inputRef={refs.arrival}
        isError={errors.some((error) => error.field === "arrival")}
        require
      />
      {arrival === "Auto" && (
        <InputOptionCheckbox
          title="Parkticket benötigt"
          isChecked={requiresParkingTicket}
          inputChange={setRequiresParkingTicket}
        />
      )}
      <InputOptionCheckbox
        title={"Aufbau Freitag"}
        isChecked={assemblyFriday}
        inputChange={(value) => setAssemblyFriday(value)}
      />
      <InputOptionCheckbox
        title={"Aufbauhelfer"}
        isChecked={assembly}
        inputChange={(value) => setAssembly(value)}
      />
      <InputOptionCheckbox
        title={"Abbauhelfer"}
        isChecked={deconstruction}
        inputChange={(value) => setDeconstruction(value)}
      />

      <Spacer />
      <h2>Verpflegung</h2>

      <InputOptionRadio
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
        isError={errors.some((error) => error.field === "allergies")}
      />

      <Spacer />
      <h2>Interessen/Aufgaben/Erfahrungen</h2>

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
      <h3>Wunschteam (kann nicht gewährleistet werden)</h3>
      <InputOptionCheckbox
        title={"Einlasskontrolle"}
        isChecked={departmentAdmission}
        inputChange={(value) => setDepartmentAdmission(value)}
      />
      <InputOptionCheckbox
        title={"Waffencheck"}
        isChecked={departmentWeaponsCheck}
        inputChange={(value) => setDepartmentWeaponsCheck(value)}
      />
      <InputOptionCheckbox
        title={"Bühne"}
        isChecked={departmentStage}
        inputChange={(value) => setDepartmentStage(value)}
      />
      <InputOptionCheckbox
        title={"Springer"}
        isChecked={departmentSpringer}
        inputChange={(value) => setDepartmentSpringer(value)}
      />
      <InputOptionCheckbox
        title={"Karaoke"}
        isChecked={departmentKaraoke}
        inputChange={(value) => setDepartmentKaraoke(value)}
      />
      <InputOptionCheckbox
        title={"Bring & Buy"}
        isChecked={departmentBringAndBay}
        inputChange={(value) => setDepartmentBringAndBay(value)}
      />
      <InputOptionCheckbox
        title={"Workshop"}
        isChecked={departmentWorkshop}
        inputChange={(value) => setDepartmentWorkshop(value)}
      />
      <InputOptionCheckbox
        title={"Ehrengast betreuung"}
        isChecked={departmentSpecialGuest}
        inputChange={(value) => setDepartmentSpecialGuest(value)}
      />

      <InputOptionTextArea
        title="Sonstiges"
        inputText={other}
        inputChange={(value) => setOther(value)}
        inputRef={refs.other}
        isError={errors.some((error) => error.field === "other")}
      />

      <Spacer />
      <h2>Einsatzzeiten</h2>

      <p>
        Bitte gib hier an, wie viele Stunden du am jeweiligen Tag Arbeiten magst (min. 5 Stunden).
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
      <h2>Richtlinien</h2>

      <InputOptionCheckbox
        title={
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
      <InputOptionCheckbox
        title={
          <p>
            Dürfen wir, der zuständigen Orga deine Kontaktdaten weiter geben.
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
