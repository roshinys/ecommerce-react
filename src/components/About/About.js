import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.aS_Reb6jbeKkqBLfahH_JQHaHa&pid=Api&P=0&h=180"
        alt="monkeyd luffy"
        className={styles.image}
      />
      <p className={styles.description}>
        This is an image component with image init. The image is a beautiful
        photo of a mountain range. The mountains are snow-capped and the sky is
        a clear blue. The image is inspiring and peaceful. It reminds me of the
        beauty of nature and the importance of protecting our environment. The
        mountains are a symbol of strength and resilience. They have stood the
        test of time and they continue to inspire us. The sky is a symbol of
        hope and possibility. It represents the endless possibilities that lie
        ahead. This image is a reminder that we are all connected to nature. We
        are all part of something bigger than ourselves. We must protect our
        environment for future generations.
      </p>
    </div>
  );
}

export default About;
