import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { langContext } from "../contexts/language";

const Language = () => {
  const { lang, setLang } = useContext(langContext);
  return (
    <div>
      <h1>Language is {lang}</h1>
      <Button
        onClick={() => setLang(lang === "ar" ? "en" : "ar")}
        variant="primary"
      >
        Change Language
      </Button>
    </div>
  );
};

export default Language;
