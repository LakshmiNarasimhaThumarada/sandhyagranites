"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

/* Languages to show in the picker */
const LANGUAGES = [
  { code: "en",    label: "English" },
  { code: "hi",    label: "हिन्दी" },
  { code: "te",    label: "తెలుగు" },
  { code: "ta",    label: "தமிழ்" },
  { code: "kn",    label: "ಕನ್ನಡ" },
  { code: "ml",    label: "മലയാളം" },
  { code: "gu",    label: "ગુજરાતી" },
  { code: "mr",    label: "मराठी" },
  { code: "bn",    label: "বাংলা" },
  { code: "ar",    label: "العربية" },
  { code: "es",    label: "Español" },
  { code: "fr",    label: "Français" },
  { code: "de",    label: "Deutsch" },
  { code: "ru",    label: "Русский" },
  { code: "zh-CN", label: "中文" },
  { code: "ja",    label: "日本語" },
  { code: "ko",    label: "한국어" },
];

/* Fix Google's body-top shift and hide the attribution bar */
const GLOBAL_CSS = `
  .skiptranslate > iframe { display: none !important; height: 0 !important; }
  body { top: 0 !important; }
  #google_translate_element_hidden { display: none !important; }
`;

let scriptLoaded = false;
let styleInjected = false;

function injectGlobalStyle() {
  if (styleInjected) return;
  const el = document.createElement("style");
  el.id = "gt-global-fix";
  el.innerHTML = GLOBAL_CSS;
  document.head.appendChild(el);
  styleInjected = true;
}

function loadTranslateScript(): Promise<void> {
  return new Promise((resolve) => {
    if (scriptLoaded) { resolve(); return; }
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element_hidden"
        );
      }
      scriptLoaded = true;
      resolve();
    };
    const s = document.createElement("script");
    s.id = "google-translate-script";
    s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
  });
}

function applyLanguage(langCode: string) {
  if (langCode === "en") {
    // Reset to original — remove cookie and reload
    document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    window.location.reload();
    return;
  }
  // Set Google Translate cookie
  document.cookie = `googtrans=/en/${langCode}; path=/`;
  document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
  window.location.reload();
}

function getActiveLang(): string {
  const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
  return match ? match[1] : "en";
}

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("en");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    injectGlobalStyle();
    setActiveLang(getActiveLang());
    if (!document.getElementById("google-translate-script")) {
      loadTranslateScript();
    }
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const current = LANGUAGES.find((l) => l.code === activeLang) ?? LANGUAGES[0];

  return (
    <>
      {/* Hidden Google Translate element (required for the cookie approach) */}
      <div id="google_translate_element_hidden" style={{ display: "none" }} />

      {/* Custom language picker */}
      <div ref={dropdownRef} style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
        {/* Trigger button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Select language"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            height: "32px",
            padding: "0 10px",
            background: "transparent",
            border: "1px solid rgba(20,184,166,0.45)",
            borderRadius: "2px",
            cursor: "pointer",
            outline: "none",
            transition: "border-color 0.25s, background 0.25s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#14b8a6";
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(20,184,166,0.07)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(20,184,166,0.45)";
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          }}
        >
          {/* Globe icon */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>

          {/* Current language label */}
          <span style={{
            fontFamily: "var(--font-raleway, 'Raleway', sans-serif)",
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#14b8a6",
          }}>
            {current.label}
          </span>

          {/* Chevron */}
          <svg
            width="8" height="5" viewBox="0 0 10 6" fill="none" stroke="#14b8a6"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <path d="M1 1l4 4 4-4"/>
          </svg>
        </button>

        {/* Dropdown panel */}
        {open && (
          <div style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            minWidth: "160px",
            background: "#161616",
            border: "1px solid rgba(20,184,166,0.25)",
            borderRadius: "2px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
            zIndex: 9999,
            overflow: "hidden",
          }}>
            {/* Header */}
            <div style={{
              padding: "8px 14px 6px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              <span style={{
                fontFamily: "var(--font-raleway, 'Raleway', sans-serif)",
                fontSize: "9px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "rgba(20,184,166,0.6)",
              }}>Select Language</span>
            </div>

            {/* Language list */}
            <div style={{ maxHeight: "260px", overflowY: "auto" }}>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setOpen(false); applyLanguage(lang.code); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "8px 14px",
                    background: lang.code === activeLang ? "rgba(20,184,166,0.1)" : "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(20,184,166,0.08)")}
                  onMouseLeave={e => (e.currentTarget.style.background = lang.code === activeLang ? "rgba(20,184,166,0.1)" : "transparent")}
                >
                  <span style={{
                    fontFamily: "var(--font-raleway, 'Raleway', sans-serif)",
                    fontSize: "12px",
                    fontWeight: lang.code === activeLang ? 700 : 400,
                    color: lang.code === activeLang ? "#14b8a6" : "rgba(229,224,214,0.8)",
                    letterSpacing: "0.02em",
                  }}>
                    {lang.label}
                  </span>
                  {lang.code === activeLang && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
