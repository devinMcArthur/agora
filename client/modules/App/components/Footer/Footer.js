import React from "react";
import { FormattedMessage } from "react-intl";

// Import Style
import styles from "./Footer.css";

// Import Images
import bg from "../../header-bk.png";

export function Footer() {
  return (
    <div style={{ background: `#FFF center` }} className={styles.footer}>
      <p style={{ color: "black" }}>
        &copy; 2019 &middot; Solitaire &middot; Alpha 0.1.4
      </p>
    </div>
  );
}

export default Footer;
