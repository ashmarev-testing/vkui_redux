import React from "react";
import { FormLayoutGroup, FormItem, Input } from "@vkontakte/vkui";

export const Buttons = (props: any) => {
  return (
    <FormLayoutGroup mode="horizontal">
      <FormItem top="Дополнительный текст в заголовке">
        <Input type="text">ttttt</Input>
      </FormItem>
    </FormLayoutGroup>
  );
};
