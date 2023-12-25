import {
  ModalPage,
  ModalPageHeader,
  Group,
  CellButton,
  Div,
} from "@vkontakte/vkui";
import React from "react";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { HOME_PANEL_MODALS } from "../routes";

export const OnboardingOne = ({ nav }: { nav: string }) => {
  const routeNavigator = useRouteNavigator();
  return (
    <ModalPage header={<ModalPageHeader>Шаг 1</ModalPageHeader>} id={nav}>
      <Div>Добро пожаловать в приложение!</Div>
      <Div>Здесь будет обучение использованию приложения</Div>
      <Group>
        <CellButton
          onClick={() =>
            routeNavigator.push(`/${HOME_PANEL_MODALS.ONBOARDING_2}`)
          }
        >
          Далее
        </CellButton>
      </Group>
    </ModalPage>
  );
};
