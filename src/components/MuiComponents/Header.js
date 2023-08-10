import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={styles.headerContainer}>
      <nav style={styles.navbar}>
        <ul style={styles.navMenu}>
          <Link to="/" style={styles.navLink}>
            <li style={styles.navItem}>Home</li>
          </Link>
          <Link to="/button" style={styles.navLink}>
            <li style={styles.navItem}>Button</li>
          </Link>
          <Link to="/buttonGroup" style={styles.navLink}>
            <li style={styles.navItem}>Button Group</li>
          </Link>
          <Link to="/checkBoxMui" style={styles.navLink}>
            <li style={styles.navItem}>CheckBox</li>
          </Link>
          <Link to="/radioMui" style={styles.navLink}>
            <li style={styles.navItem}>Radio</li>
          </Link>
          <Link to="/sliderMui" style={styles.navLink}>
            <li style={styles.navItem}>Slider</li>
          </Link>
          <Link to="/selectMui" style={styles.navLink}>
            <li style={styles.navItem}>Select</li>
          </Link>
          <Link to="/textFieldMui" style={styles.navLink}>
            <li style={styles.navItem}>Text Field Input</li>
          </Link>
          <Link to="/switchMui" style={styles.navLink}>
            <li style={styles.navItem}>Switch</li>
          </Link>
          <Link to="/badgeMui" style={styles.navLink}>
            <li style={styles.navItem}>Badge Count</li>
          </Link>
          <Link to="/tabsMui" style={styles.navLink}>
            <li style={styles.navItem}>Tabs</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  headerContainer: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px 0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
  },
  navMenu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    transition: "color 0.3s ease-in-out",
  },
  navItem: {
    fontSize: "18px",
    fontWeight: 500,
    cursor: "pointer",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    transition: "color 0.3s ease-in-out",
  },
  // navLink:hover: {
  //   color: "#ff5722",
  // },
};

export default Header;
