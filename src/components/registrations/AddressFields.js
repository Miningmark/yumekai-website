import { InputOptionInput, InputOptionSelect } from "@/components/elements/InputComponents";
import { COUNTRIES } from "@/util/registration_options";

export default function AddressFields({ data, onChange, refs, errors = [] }) {
  const hasError = (field) => errors.some((error) => error.field === field);

  return (
    <>
      <InputOptionInput
        title="Straße"
        inputText={data.street}
        inputChange={(value) => onChange("street", value)}
        inputRef={refs.street}
        isError={hasError("street")}
        require
      />
      <InputOptionInput
        title="PLZ"
        inputText={data.postalCode}
        inputChange={(value) => onChange("postalCode", value)}
        inputRef={refs.postalCode}
        isError={hasError("postalCode")}
        require
      />
      <InputOptionInput
        title="Ort"
        inputText={data.city}
        inputChange={(value) => onChange("city", value)}
        inputRef={refs.city}
        isError={hasError("city")}
        require
      />
      <InputOptionSelect
        title="Land"
        options={COUNTRIES}
        inputText={data.country}
        inputChange={(value) => onChange("country", value)}
        inputRef={refs.country}
        isError={hasError("country")}
        require
      />
    </>
  );
}
