import styled from "styled-components";
import { InputOptionInput, InputOptionSelect } from "@/components/elements/InputComponents";
import { ErrorText } from "@/components/styledComponents";
import { COUNTRIES } from "@/util/registration_options";

const FieldErrorText = styled(ErrorText)`
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

export default function AddressFields({
  data,
  onChange,
  onBlur,
  refs,
  errors = {},
  touchedFields = {},
}) {
  const getFieldError = (field) => {
    return touchedFields[field] && errors[field] ? errors[field] : null;
  };

  const handleFieldBlur = (field, value) => {
    if (onBlur) {
      onBlur(field, value);
    }
  };

  return (
    <>
      <InputOptionInput
        title="Straße"
        inputText={data.street}
        inputChange={(value) => onChange("street", value)}
        onBlur={() => handleFieldBlur("street", data.street)}
        inputRef={refs.street}
        isError={!!getFieldError("street")}
        require
      />
      {getFieldError("street") && <FieldErrorText>{getFieldError("street")}</FieldErrorText>}

      <InputOptionInput
        title="Hausnummer"
        inputText={data.houseNumber}
        inputChange={(value) => onChange("houseNumber", value)}
        onBlur={() => handleFieldBlur("shouseNumber", data.houseNumber)}
        inputRef={refs.houseNumber}
        isError={!!getFieldError("houseNumber")}
        require
      />
      {getFieldError("houseNumber") && (
        <FieldErrorText>{getFieldError("houseNumber")}</FieldErrorText>
      )}

      <InputOptionInput
        title="PLZ"
        inputText={data.postalCode}
        inputChange={(value) => onChange("postalCode", value)}
        onBlur={() => handleFieldBlur("postalCode", data.postalCode)}
        inputRef={refs.postalCode}
        isError={!!getFieldError("postalCode")}
        require
      />
      {getFieldError("postalCode") && (
        <FieldErrorText>{getFieldError("postalCode")}</FieldErrorText>
      )}

      <InputOptionInput
        title="Stadt"
        inputText={data.city}
        inputChange={(value) => onChange("city", value)}
        onBlur={() => handleFieldBlur("city", data.city)}
        inputRef={refs.city}
        isError={!!getFieldError("city")}
        require
      />
      {getFieldError("city") && <FieldErrorText>{getFieldError("city")}</FieldErrorText>}

      <InputOptionSelect
        title="Land"
        options={COUNTRIES}
        inputText={data.country}
        inputChange={(value) => onChange("country", value)}
        onBlur={() => handleFieldBlur("country", data.country)}
        inputRef={refs.country}
        isError={!!getFieldError("country")}
        require
      />
      {getFieldError("country") && <FieldErrorText>{getFieldError("country")}</FieldErrorText>}
    </>
  );
}
