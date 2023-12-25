import {
  ModalPage,
  ModalPageHeader,
  Group,
  CellButton,
  Div,
} from "@vkontakte/vkui";
import React from "react";
import {
  useRouteNavigator,
  RouteNavigator,
} from "@vkontakte/vk-mini-apps-router";

export const OnboardingThree = ({ nav }: { nav: string }) => {
  const routeNavigator: RouteNavigator = useRouteNavigator();
  const onClick = async () => {
    routeNavigator.runSync([
      () => routeNavigator.backToFirst(),
      () => routeNavigator.replace("/empty"),
      () => routeNavigator.push("/empty"),
      () => routeNavigator.back(),
    ]);
  };
  return (
    <ModalPage header={<ModalPageHeader>Шаг 3</ModalPageHeader>} id={nav}>
      <Div>Завершаем!</Div>
      <Div>Третья часть обучения</Div>
      <Group>
        <CellButton onClick={onClick}>Закончить</CellButton>
      </Group>
    </ModalPage>
  );
};
