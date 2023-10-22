import styles from "./Checkbox.styles.module.scss";
import { Indicator, Root } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface Props {
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({ onChange }: Props) => {
  return (
    <Root onCheckedChange={onChange} className={styles.checkboxRoot} id="c1">
      <Indicator className={styles.checkboxIndicator}>
        <CheckIcon />
      </Indicator>
    </Root>
  );
};
