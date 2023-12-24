import React from "react";

import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  ButtonGroup,
} from "@vkontakte/vkui";
import { NavProp } from "../types";
//import { PERSIK_PANEL_MODALS } from "../routes";
import {
  useRouteNavigator,
  useEnableSwipeBack,
  getInitialLocation,
} from "@vkontakte/vk-mini-apps-router";
//import { AppMap } from "../appMap/AppMap";
//import { EmptyPopout } from "../popouts/EmptyPopout";
import { CustomDetail } from "../components/CustomDetail";

export const Empty = ({ nav }: NavProp) => {
  useEnableSwipeBack();
  const routeNavigator = useRouteNavigator();

  //const popout = EmptyPopout();
  const initialLocation = getInitialLocation();
  const groupHeader = `Первоначальный адрес: ${initialLocation?.pathname}${initialLocation?.search}${initialLocation?.hash}`;
  const windowNavigatorLanguage = navigator.language;
  return (
    <Panel nav={nav}>
      <PanelHeader>Пустая страница (Empty)</PanelHeader>
      <Group header={<Header mode="secondary">{groupHeader}</Header>}>
        <ButtonGroup stretched mode="vertical">
          <ButtonGroup stretched mode="horizontal">
            <Button
              stretched
              size="l"
              mode="primary"
              onClick={() => routeNavigator.push("/")}
            >
              На главную
            </Button>
            <Button
              stretched
              size="l"
              mode="primary"
              onClick={() => routeNavigator.push("/")}
            >
              На главную 2
            </Button>
          </ButtonGroup>
          <Button
            stretched
            size="l"
            mode="primary"
            onClick={() => routeNavigator.push("/")}
          >
            {windowNavigatorLanguage ? windowNavigatorLanguage : ""}
          </Button>
          <CustomDetail></CustomDetail>
        </ButtonGroup>
      </Group>
    </Panel>
  );
};
