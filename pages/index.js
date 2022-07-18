import Head from "next/head";
import "nes.css/css/nes.min.css";
import styles from "../styles/Home.module.css";
import Header from "./header";
import About from "./about";
import Skills from "./skills";
import Experience from "./experience";
import Education from "./education";
import Contact from "./contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Julio Pinheiro - Geek Resume 😏</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
