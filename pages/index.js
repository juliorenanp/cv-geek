import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Head from "next/head";
import Header from "./header";
import Projects from "./projects";
import Skills from "./skills";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Julio Pinheiro - Geek Resume</title>
        <meta name="description" content="My Geek resume." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="custom-center">
        <header>
          <Header />
        </header>
        <main>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
