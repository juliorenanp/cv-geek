import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Game() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Farm Out - Game</title>
        <meta name="description" content="Play Farm Out - A PICO-8 Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Farm Out</h1>

        <p className={styles.description}>A PICO-8 game</p>

        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            aspectRatio: "1",
            margin: "2rem auto",
          }}
        >
          <iframe
            src="/farmout.html"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
            title="Farm Out Game"
            allow="gamepad; autoplay"
            allowFullScreen
          />
        </div>

        <p style={{ color: "#666", marginTop: "1rem" }}>
          Controls: Arrow keys to move, Z/X or C/V for buttons
        </p>
      </main>
    </div>
  );
}
