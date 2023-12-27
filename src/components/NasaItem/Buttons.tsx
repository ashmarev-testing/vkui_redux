import React from "react";
import { ButtonGroup, Button } from "@vkontakte/vkui";

type ButtonsProps = {
  filterItem: (curcat: string) => void;
  setItem: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        title: string;
        category: string;
        price: string;
        img: string;
        desc: string;
      }[]
    >
  >;
  menuItems: string[];
};

export const Buttons = ({ filterItem, menuItems }: ButtonsProps) => {
  return (
    <ButtonGroup stretched mode="horizontal">
      {menuItems.map((Val, id) => (
        <Button
          stretched
          size="l"
          mode="secondary"
          onClick={() => filterItem(Val)}
          key={id}
        >
          {Val}
        </Button>
      ))}
    </ButtonGroup>
  );
};
