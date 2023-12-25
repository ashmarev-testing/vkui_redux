import React from "react";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Header,
  ButtonGroup,
  Button,
  Group,
} from "@vkontakte/vkui";
import { NavProp } from "../types";
//import { PERSIK_PANEL_MODALS } from "../routes";
import {
  useRouteNavigator,
  useEnableSwipeBack,
  getInitialLocation,
} from "@vkontakte/vk-mini-apps-router";
//import { Icon28Profile } from "@vkontakte/icons";
//import { EmptyPopout } from "../popouts/EmptyPopout";

// пути до модалок обучения
import { HOME_PANEL_MODALS } from "../routes";
// Custom
import { CustomPanelHeader, CustomComponent } from "../components";

export const Empty = ({ nav }: NavProp) => {
  useEnableSwipeBack();
  const routeNavigator = useRouteNavigator();

  //const popout = EmptyPopout();
  const initialLocation = getInitialLocation();
  const groupHeader = `${initialLocation?.pathname}${initialLocation?.search}${initialLocation?.hash}`;
  const windowNavigatorLanguage = navigator.language;
  return (
    <Panel nav={nav}>
      <CustomPanelHeader
        separator={false}
        //after={shoppingCartIcon}
        title="Пустая страница"
      />
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
              mode="secondary"
              onClick={() =>
                routeNavigator.push(`/${HOME_PANEL_MODALS.ONBOARDING_1}`)
              }
            >
              Обучение
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>
              {windowNavigatorLanguage ? windowNavigatorLanguage : ""}
            </Button>
          </ButtonGroup>
          <CustomComponent></CustomComponent>
        </ButtonGroup>
      </Group>
    </Panel>
  );
};
