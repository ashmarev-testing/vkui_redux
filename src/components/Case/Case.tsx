// Case.tsx
import React, { useEffect } from "react";
//import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store";
import * as api from "../../api";
import { CaseItem } from "../../types";

export const Case: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.user.cases);
  const language = useAppSelector((state) => state.user.language);

  useEffect(() => {
    dispatch(api.cases.getCases());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul>
      {data
        .filter((item: CaseItem) => item.language === language)
        .map((item: CaseItem, index) => (
          <li key={index}>
            {item.id}, {item.language}, {item.point_id}, {item.text}
          </li>
        ))}
    </ul>
  );
};
