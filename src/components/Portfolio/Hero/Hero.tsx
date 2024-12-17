import styles from "./Hero.module.scss";
import Image from "next/image";
// import IconUser from "../../../../public/icons/user.svg";
import Button from "../UI/Button/Button";
import clsx from "clsx";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__imgcontainer}>
        <Image
          src={"https://tiskae.netlify.app/src/img/profile-img.jpeg"}
          width={150}
          height={150}
          alt="user"
          className={styles.hero__img}
        />
        <h1 className={styles.hero__author}>Ibrahim Adedokun</h1>
      </div>
      <h2 className={clsx(styles.hero__intro, "heading1")}>Building digital products, brands and experience.</h2>
      <Button>Get in touch</Button>
    </section>
  );
}

export default Hero;
