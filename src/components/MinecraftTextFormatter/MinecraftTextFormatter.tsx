import React, { useEffect, useState } from "react";

// Mapping von Minecraft-Farbcodes zu HTML-Farben
const colorMap = {
  "0": "#000000", // Schwarz
  "1": "#0000AA", // Dunkelblau
  "2": "#00AA00", // Dunkelgrün
  "3": "#00AAAA", // Dunkelaqua
  "4": "#AA0000", // Dunkelrot
  "5": "#AA00AA", // Dunkelviolett
  "6": "#FFAA00", // Gold
  "7": "#AAAAAA", // Grau
  "8": "#555555", // Dunkelgrau
  "9": "#5555FF", // Blau
  a: "#55FF55", // Grün
  b: "#55FFFF", // Aqua
  c: "#FF5555", // Rot
  d: "#FF55FF", // Hellviolett
  e: "#FFFF55", // Gelb
  f: "#FFFFFF", // Weiß
  r: "#FFFFFF", // Reset auf Weiß
};

// Mapping von Minecraft-Formatierungscodes zu CSS-Stilen
const formatMap = {
  l: "bold", // Fett
  o: "italic", // Kursiv
  n: "underline", // Unterstrichen
  m: "line-through", // Durchgestrichen
  k: "obfuscated", // Verwischt
  r: "reset", // Reset aller Formatierungen
};

// Hilfsfunktion zum Generieren zufälliger Zeichenketten
const generateRandomString = (length) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomString;
};

const MinecraftTextFormatter = ({ text }) => {
  const [obfuscatedParts, setObfuscatedParts] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newObfuscatedParts = {};
      text.split(/(§[0-9a-fklmnor])/g).forEach((part, index) => {
        if (part.startsWith("§") && part[1] === "k") {
          newObfuscatedParts[index] = generateRandomString(part.length);
        }
      });
      setObfuscatedParts(newObfuscatedParts);
    }, 15); // Aktualisiere alle 15 ms

    return () => clearInterval(interval); // Clean up on unmount
  }, [text]);

  const parts = text.split(/(§[0-9a-fklmnor])/g);
  let currentColor = colorMap["f"];
  let isBold = false;
  let isItalic = false;
  let isUnderline = false;
  let isStrikethrough = false;
  let isObfuscated = false;

  const formattedText = [];

  parts.forEach((part, index) => {
    if (part.startsWith("§")) {
      const code = part[1];

      if (colorMap[code]) {
        currentColor = colorMap[code];
      } else if (formatMap[code]) {
        switch (formatMap[code]) {
          case "bold":
            isBold = true;
            break;
          case "italic":
            isItalic = true;
            break;
          case "underline":
            isUnderline = true;
            break;
          case "line-through":
            isStrikethrough = true;
            break;
          case "obfuscated":
            isObfuscated = true;
            break;
          case "reset":
            // Reset all formatting
            currentColor = colorMap["f"];
            isBold = false;
            isItalic = false;
            isUnderline = false;
            isStrikethrough = false;
            isObfuscated = false;
            break;
          default:
            break;
        }
      }
    } else {
      if (part.length > 0) {
        // Erstellen des Stilobjekts
        let style: any = { color: currentColor };
        if (isBold) style.fontWeight = "bold";
        if (isItalic) style.fontStyle = "italic";

        // Kombinierte Textdekorationen
        let textDecoration = [];
        if (isUnderline) textDecoration.push("underline");
        if (isStrikethrough) textDecoration.push("line-through");
        if (textDecoration.length > 0)
          style.textDecoration = textDecoration.join(" ");

        if (isObfuscated) {
          const randomString =
            obfuscatedParts[index] || generateRandomString(part.length);
          formattedText.push(
            <span key={index} style={style}>
              {randomString}
            </span>
          );
        } else {
          formattedText.push(
            <span key={index} style={style}>
              {part.split("\n").map((line, i) => (
                <div key={i}>
                  {line}
                  {i < part.split("\n").length - 1 && <br />}
                </div>
              ))}
            </span>
          );
        }
      }
    }
  });

  return <div>{formattedText}</div>;
};

// Beispielnutzung
// <MinecraftTextFormatter text="§6Hallo §lFette §oKursiv §nUnterstrichen §mDurchgestrichen §kVerwischt §2Welt§r!" />
export default MinecraftTextFormatter;
