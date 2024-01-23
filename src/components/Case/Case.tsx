// Case.tsx
import React, { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store";
import * as api from "../../api";
import { CaseItem } from "../../types";

export const Case: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.user.cases);

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
      {data.map((item: CaseItem) => (
        <li key={item.id}>
          {item.id}, {item.language}, {item.point_id}, {item.text}
        </li>
      ))}
    </ul>
  );
};
