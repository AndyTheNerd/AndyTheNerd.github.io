import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const fs = require('fs');
  const array = fs.readFileSync('./dialogue/halo_lines.txt').toString().split('\n');
  const quote = Math.floor(Math.random() * array.length).toString();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Halo Quotes. Refresh the page to get a new quote.
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By: {"AndyTheNerd"}
          </a>
        </div>
      </div>

      <div className={styles.center}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
          <h1>
            {array[quote]}
          </h1>
        
      </div>

      <div className={styles.grid}>
        <a
          href="http://discord.gg/teamrespawn"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Found a bug? <span>-&gt;</span>
          </h2>
          <p>Let me know in my Discord server.</p>
        </a>

        <a
          href="https://github.com/AndyTheNerd/AndyTheNerd.github.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Get the code <span>-&gt;</span>
          </h2>
          <p>See the code this page is built on.</p>
        </a>

        <a
          href="https://www.youtube.com/@TeamRespawn"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            YouTube <span>-&gt;</span>
          </h2>
          <p>Follow me on YouTube.</p>
        </a>

        <a
          href="https://www.halowaypoint.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Halo Waypoint <span>-&gt;</span>
          </h2>
          <p>
            Go to the official Halo site.
          </p>
        </a>
      </div>
    </main>
  );
}
