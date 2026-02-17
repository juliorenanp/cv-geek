import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Game from "./game";
import Head from "next/head";
import Header from "./header";
import Projects from "./projects";
import Skills from "./skills";
import styles from "../styles/Home.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Julio Pinheiro - Geek Resume</title>
        <meta name="description" content="My Geek resume." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script id="clarity-script" strategy="afterInteractive">
        {`
           (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "okpiu0av78");
        `}
      </Script>

      <div className="custom-center">
        <header>
          <Game />
          {/* <Header /> */}
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
