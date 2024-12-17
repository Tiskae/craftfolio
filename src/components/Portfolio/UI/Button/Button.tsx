import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: string;
  fullWidth?: number;
};

const Button: React.FC<ButtonProps> = ({ children, fullWidth }) => {
  return <button className={clsx(styles.btn, fullWidth && styles.fullWidth)}>{children}</button>;
};

export default Button;
