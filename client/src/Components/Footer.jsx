import { List } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
        <div style={styles.container}>
          <h2
            style={{
              ...styles.text,
              fontSize: "22px",
              fontWeight: "bold",
              fontFamily: "Calibri",
            }}
          >
            Location
          </h2>
          <ul style={{ textAlign: "left", padding: "12px" }}>
            <li>Home Tution in Jaipur</li>
            <li>Home Tution in Udaipur</li>
            <li>Home Tution in Jodhpur</li>
          </ul>

          <hr />

          <h2
            style={{
              ...styles.text,
              fontSize: "22px",
              fontWeight: "bold",
              fontFamily: "Calibri",
              padding: "12px"
            }}
          >
            Follow Us
          </h2>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="https://www.facebook.com/BillGates/"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/williamhgates"><FaLinkedin/></a>
            <a href="https://twitter.com/BillGates?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaXTwitter/></a>
            <a href="https://www.youtube.com/channel/UCnEiGCE13SUI7ZvojTAVBKw">
              <TiSocialYoutubeCircular />
            </a>
          </div>
        </div>
        <div style={styles.container}>
          <p style={styles.text}>© 2024 OffClass. All Rights Reserved.</p>
        </div>
        <div style={styles.container}>
          <p style={styles.text}>© 2024 OffClass. All Rights Reserved.</p>
        </div>
        <div style={styles.container}>
          <p style={styles.text}>© 2024 OffClass. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    marginTop: "50px",
    textAlign: "center",
    display: "flex", // Add this line
    justifyContent: "space-around", // Add this line if you want to distribute the divs evenly
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  text: {
    fontSize: "14px",
  },
};

export default Footer;
