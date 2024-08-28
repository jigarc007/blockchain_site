"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
export default function Header() {
  const [activeMenu, setActiveMenu] = useState("");
  const handleActive = (menuText: string) => {
    setActiveMenu(menuText);
  };
  const menuLinks = [
    { id: 1, text: "Home" },
    { id: 1, text: "About" },
    { id: 1, text: "Department" },
    { id: 1, text: "Services" },
    { id: 1, text: "Contact us" },
  ];
  return (
    <div className={styles.headerWrapper}>
      <h1>Build</h1>
      <ul className={styles.header}>
        {menuLinks?.map((item, index) => (
          <li
            key={`${item.id}_${item.text}`}
            onClick={() => {
              handleActive(item.text);
            }}
            className={`${styles.menu} ${
              index === menuLinks.length - 1 ? styles.activeMenu : ""
            }`}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
