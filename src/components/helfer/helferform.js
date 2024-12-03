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
  const [birthdate, setBirthdate] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [discordName, setDiscordName] = useState("");
  const [strengths, setStrengths] = useState("");
  const [desiredTeam, setDesiredTeam] = useState("");
  const [other, setOther] = useState("");
  const [phone, setPhone] = useState("");
  const [assembly, setAssembly] = useState(false);
  const [deconstruction, setDeconstruction] = useState(false);
  const [gender, setGender] = useState(null);
  const [occupation, setOccupation] = useState("");
  const [tshirtSize, setTshirtSize] = useState("");
  const [arrival, setArrival] = useState("");
  const [requiresParkingTicket, setRequiresParkingTicket] = useState(false);
  const [foodPreference, setFoodPreference] = useState("");
  const [allergies, setAllergies] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [contactForwarding, setContactForwarding] = useState(false);

  const [departmentAdmission, setDepartmentAdmission] = useState(false);
  const [departmentWeaponsCheck, setDepartmentWeaponsCheck] = useState(false);
  const [departmentStage, setDepartmentStage] = useState(false);
  const [departmentSpringer, setDepartmentSpringer] = useState(false);
  const [departmentKaraoke, setDepartmentKaraoke] = useState(false);
  const [departmentBringAndBay, setDepartmentBringAndBay] = useState(false);
  const [departmentWorkshop, setDepartmentWorkshop] = useState(false);
  const [departmentSpecialGuest, setDepartmentSpecialGuest] = useState(false);

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
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = [];
    setErrors([]);
    setSuccess("");

    //Name
    if (!name.trim()) newErrors.push({ field: "name", message: "Vorname ist ein Pflichtfeld" });
    if (name.length < 3) newErrors.push({ field: "name", message: "Vorname  ist zu kurz" });
    if (name.length > 50) newErrors.push({ field: "name", message: "Vorname ist zu lang" });

    //Nachname
    if (!lastName.trim())
      newErrors.push({ field: "lastName", message: "Nachname ist ein Pflichtfeld" });
    if (lastName.length < 3)
      newErrors.push({ field: "lastName", message: "Nachname  ist zu kurz" });
    if (lastName.length > 50)
      newErrors.push({ field: "lastName", message: "Nachname ist zu lang" });

    //Rufname
    if (nickname.trim() && nickname.length < 3)
      newErrors.push({ field: "nickname", message: "Rufname ist zu kurz" });
    if (nickname.length > 50) newErrors.push({ field: "nickname", message: "Rufname ist zu lang" });

    //E-Mail
    if (!email.trim()) newErrors.push({ field: "email", message: "E-Mail ist ein Pflichtfeld" });
    if (!email.includes("@"))
      newErrors.push({ field: "email", message: "E-Mail-Adresse ist ungültig" });
    if (email.length > 100)
      newErrors.push({
        field: "email",
        message: "E-Mail-Adresse darf maximal 100 Zeichen lang sein",
      });

    //E-Mail Bestätigen
    if (!confirmEmail.trim() !== email.trim())
      newErrors.push({ field: "confirmEmail", message: "E-Mail stimmt nicht überein" });

    //Geburtsdatum
    if (!birthdate.trim())
      newErrors.push({ field: "birthdate", message: "Geburtsdatum ist ein Pflichtfeld" });

    //Discord Name
    if (!discordName.trim())
      newErrors.push({ field: "discordName", message: "Discord Name ist ein Pflichtfeld" });

    //Telefonnummer
    if (!phone.trim())
      newErrors.push({ field: "phone", message: "Telefonnummer ist ein Pflichtfeld" });

    //Land
    if (!country.trim()) newErrors.push({ field: "country", message: "Land ist ein Pflichtfeld" });

    //Straße
    if (!street.trim()) newErrors.push({ field: "street", message: "Straße ist ein Pflichtfeld" });
    if (street.length < 3) newErrors.push({ field: "street", message: "Straße ist zu kurz" });
    if (street.length > 50) newErrors.push({ field: "street", message: "Straße ist zu lang" });

    //PLZ
    if (!postalCode.trim())
      newErrors.push({ field: "postalCode", message: "PLZ ist ein Pflichtfeld" });
    if (postalCode.length < 4) newErrors.push({ field: "postalCode", message: "PLZ ist zu kurz" });
    if (postalCode.length > 6) newErrors.push({ field: "postalCode", message: "PLZ ist zu lang" });

    //Ort
    if (!city.trim()) newErrors.push({ field: "city", message: "Ort ist ein Pflichtfeld" });
    if (city.length < 3) newErrors.push({ field: "city", message: "Ort ist zu kurz" });
    if (city.length > 50) newErrors.push({ field: "city", message: "Ort ist zu lang" });

    //Geschlecht
    if (!gender) newErrors.push({ field: "gender", message: "Geschlecht ist ein Pflichtfeld" });

    //T-Shirt Größe
    if (!tshirtSize.trim())
      newErrors.push({ field: "tshirtSize", message: "T-Shirt Größe ist ein Pflichtfeld" });

    //Anreise
    if (!arrival) newErrors.push({ field: "arrival", message: "Anreise ist ein Pflichtfeld" });

    //Essen
    if (!foodPreference.trim())
      newErrors.push({ field: "foodPreference", message: "Essen ist ein Pflichtfeld" });

    //Allergien
    if (allergies.length > 500)
      newErrors.push({ field: "allergies", message: "Allergien ist zu lang" });

    //Beruf/Ausbildung
    if (occupation.trim() && occupation.length < 3)
      newErrors.push({ field: "occupation", message: "Beruf/Ausbildung zu kurz" });
    if (occupation.length > 100)
      newErrors.push({ field: "occupation", message: "Beruf/Ausbildung ist zu lang" });

    //Wunsch Team/Tätigkeit
    if (desiredTeam.trim() && desiredTeam.length < 3)
      newErrors.push({ field: "desiredTeam", message: "Wunsch Team/Tätigkeit ist zu kurz" });
    if (desiredTeam.length > 100)
      newErrors.push({ field: "desiredTeam", message: "Wunsch Team/Tätigkeit ist zu lang" });

    //Stärken
    if (strengths.trim() && strengths.length < 3)
      newErrors.push({ field: "strengths", message: "Stärken ist zu kurz" });
    if (strengths.length > 500)
      newErrors.push({ field: "strengths", message: "Stärken ist zu lang" });

    //Sonstiges
    if (other.trim() && other.length < 3)
      newErrors.push({ field: "other", message: "Sonstiges ist zu kurz" });
    if (other.length > 500) newErrors.push({ field: "other", message: "Sonstiges ist zu lang" });

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
          tshirtSize,
          arrival,
          requiresParkingTicket,
          foodPreference,
          allergies,
          strengths,
          desiredTeam,
          other,
          assembly,
          deconstruction,
          privacyPolicy,
          contactForwarding,
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
        setTshirtSize("");
        setArrival("");
        setRequiresParkingTicket(false);
        setFoodPreference("");
        setAllergies("");
        setStrengths("");
        setDesiredTeam("");
        setOther("");
        setAssembly(false);
        setDeconstruction(false);
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
        inputText={tshirtSize}
        inputChange={setTshirtSize}
        inputRef={refs.tshirtSize}
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
        options={["Normal", "Vegetarisch", "Vegan"]}
        selectedOption={foodPreference}
        inputChange={setFoodPreference}
        inputRef={refs.foodPreference}
        isError={errors.some((error) => error.field === "foodPreference")}
        require
      />
      <InputOptionTextArea
        title="Allergien"
        inputText={allergies}
        inputChange={setAllergies}
        inputRef={refs.allergies}
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
        title="Stärken"
        inputText={strengths}
        inputChange={(value) => setStrengths(value)}
        inputRef={refs.strengths}
        isError={errors.some((error) => error.field === "strengths")}
      />
      <InputOptionTextArea
        title="Sonstiges"
        inputText={other}
        inputChange={(value) => setOther(value)}
        inputRef={refs.other}
        isError={errors.some((error) => error.field === "other")}
      />

      <Spacer />
      <h2>Richtlinien</h2>

      <InputOptionCheckbox
        title={
          <p>
            Ich habe die Datenschutzerklärung gelesen, verstanden und akzeptiere diese. Ich habe
            verstanden, dass ich die Zustimmung zur Datenschutzerklärung jederzeit widerrufen kann.
            Über den Widerruf habe ich die Passage in der Datenschutzerklärung gelesen und
            verstanden.<RequiredNote>*</RequiredNote>
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
