import React, { useMemo } from "react";

import {
  Panel,
  Header,
  ButtonGroup,
  Button,
  Group,
  Link,
  //useAdaptivityWithJSMediaQueries,
  //IconButton,
} from "@vkontakte/vkui";
import { NavProp } from "../types";
//import { PERSIK_PANEL_MODALS } from "../routes";
import {
  useRouteNavigator,
  useEnableSwipeBack,
  getInitialLocation,
  useSearchParams,
} from "@vkontakte/vk-mini-apps-router";
//import { Icon28Profile } from "@vkontakte/icons";
//import { Icon28HelpOutline } from "@vkontakte/icons";

//import { EmptyPopout } from "../popouts/EmptyPopout";

// пути до модалок обучения
import { HOME_PANEL_MODALS } from "../routes";
// Custom
import { CustomPanelHeader, CustomComponent, ItemDetail } from "../components";

export const Empty = ({ nav }: NavProp) => {
  useEnableSwipeBack();
  const routeNavigator = useRouteNavigator();
  //const popout = EmptyPopout();
  const initialLocation = getInitialLocation();
  const pageName = "Подробное описание объекта";
  //const groupHeader = `${initialLocation?.pathname}${initialLocation?.search}${initialLocation?.hash}`;
  const windowNavigatorLanguage = navigator.language;
  const [params] = useSearchParams();
  const itemId = Number(params.get("id"));
  //{windowNavigatorLanguage ? windowNavigatorLanguage : ""}
  //const { isDesktop = false } = useAdaptivityWithJSMediaQueries();

  //const helpIcon = useMemo(() => {
  //  return isDesktop ? (
  //    <IconButton
  //      aria-label="helpIcon"
  //      onClick={() =>
  //        routeNavigator.push(`/${HOME_PANEL_MODALS.ONBOARDING_1}`)
  //      }
  //    >
  //      <Icon28HelpOutline />
  //    </IconButton>
  //  ) : undefined;
  //}, [routeNavigator, isDesktop]);

  return (
    <Panel nav={nav}>
      <CustomPanelHeader after="после" title="Назад" />
      <Group
        header={
          <Header mode="secondary">{`${"Главная страница->"}${pageName}`}</Header>
        }
      >
        <ButtonGroup stretched mode="vertical">
          <ButtonGroup stretched mode="horizontal">
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
          {itemId ? <ItemDetail itemId={itemId}></ItemDetail> : ""}
        </ButtonGroup>
      </Group>
    </Panel>
  );
};
