import styles from "./Nav.module.scss";

import IconLinkedIn from "../../../../public/icons/linkedin.svg";
import IconGithub from "../../../../public/icons/github.svg";
import IconMail from "../../../../public/icons/mail.svg";
import IconX from "../../../../public/icons/x.svg";
import IconCall from "../../../../public/icons/phone.svg";
import Image from "next/image";

function Nav() {
  // prettier-ignore
  return (
    <nav className={styles.nav}>
        <h2>IB</h2>
        <ul className={styles.nav__links}>
            <li><a href="https://linkedin.com/in/tiskae"><Image src={IconLinkedIn} alt="LinkedIn icon" /></a></li>
            <li><a href="https://github.com/tiskae"><Image src={IconGithub} alt="Github icon" /></a></li>
            <li><a href="mailto:adeddokuntobiloba100@gmail.com"><Image src={IconMail} alt="Mail icon" /></a></li>
            <li><a href="https://x.com/tiskae1"><Image src={IconX} alt="X icon" /></a></li>
            <li><a href="+2348146264116"><Image src={IconCall} alt="Phone icon" /></a></li>
        </ul>
    </nav>
  );
}
export default Nav;
