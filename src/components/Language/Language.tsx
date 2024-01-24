//language.tsx
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setLanguage } from "../../store/slice";

export const Language: React.FC = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.user.language);
  const browserLanguageShort = navigator.language.substr(
    navigator.language.length - 2,
  );

  useEffect(() => {
    dispatch(setLanguage(browserLanguageShort));
  }, [dispatch]);

  return <div>Язык браузера {language}</div>;
};
