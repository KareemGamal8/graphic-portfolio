import { FormControlProps, emailRule, requiredRule } from "@mongez/react-form";
import TextInput from "./TextInput";

export default function EmailInput(props: FormControlProps) {
  return (
    <TextInput
      type="email"
      name="email"
      rules={[emailRule, requiredRule]}
      {...props}
    />
  );
}
