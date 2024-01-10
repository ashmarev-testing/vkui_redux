import React from "react";

import { Panel, Header, Group } from "@vkontakte/vkui";
import { NavProp } from "../types";
import {
  //useRouteNavigator,
  useEnableSwipeBack,
  //getInitialLocation,
  useSearchParams,
} from "@vkontakte/vk-mini-apps-router";
//import { Icon28Profile } from "@vkontakte/icons";
//import { Icon28HelpOutline } from "@vkontakte/icons";
//import { EmptyPopout } from "../popouts/EmptyPopout";

//import { HOME_PANEL_MODALS } from "../routes";
// Custom
import { CustomPanelHeader, NasaItemDetail } from "../components";

export const Empty = ({ nav }: NavProp) => {
  useEnableSwipeBack();
  //const routeNavigator = useRouteNavigator();
  //const popout = EmptyPopout();
  //const initialLocation = getInitialLocation();
  const pageName = "Подробное описание объекта от Nasa";
  //const groupHeader = `${initialLocation?.pathname}${initialLocation?.search}${initialLocation?.hash}`;
  //const windowNavigatorLanguage = navigator.language;
  const [params] = useSearchParams();
  const nasaId = params.get("nasaId");
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
    <>
      <Panel nav={nav}>
        <CustomPanelHeader after="после" title="Назад" />
        <Group
          header={
            <Header mode="secondary">{`${"Главная страница->"}${pageName}`}</Header>
          }
        >
          <NasaItemDetail nasaId={nasaId}></NasaItemDetail>
        </Group>
      </Panel>
    </>
  );
};
