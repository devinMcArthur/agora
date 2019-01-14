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
        &copy; 2019 &middot; Devin McArthur &middot; Solitaire Design
      </p>
      {/* <p>
        <FormattedMessage id="twitterMessage" /> :{" "}
        <a href="https://twitter.com/@mern_io" target="_Blank">
          @mern_io
        </a>
      </p> */}
    </div>
  );
}

export default Footer;
