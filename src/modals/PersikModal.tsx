import React from "react";

import { CellButton, Group, ModalPage, ModalPageHeader } from "@vkontakte/vkui";

import "./PersikModal.css";
import { useParams, useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { NavProp } from "../types";
import { PERSIK_PANEL_MODALS } from "../routes";
import { OffencePersikPopout } from "../popouts/OffencePersikPopout";

const IMAGES = {};

export const PersikModal = (props: NavProp) => {
  const routeNavigator = useRouteNavigator();
  const popup = OffencePersikPopout();

  const { em: modalEmotion, emotion: panelEmotion } =
    useParams({ modal: PERSIK_PANEL_MODALS.PERSIK }) ?? {};
  const image: string =
    IMAGES[
      `persik${modalEmotion ? "_" : ""}${
        modalEmotion ?? ""
      }` as keyof typeof IMAGES
    ];
  return (
    <ModalPage
      id={props.nav}
      header={<ModalPageHeader>Персик в модалке</ModalPageHeader>}
    >
      <Group>
        <CellButton
          onClick={() =>
            routeNavigator.push(
              `/persik${panelEmotion ? "/" + panelEmotion : ""}/user_modal`,
              { keepSearchParams: true },
            )
          }
        >
          Информация о пользователе
        </CellButton>
        <CellButton onClick={() => routeNavigator.showPopout(popup)}>
          Открыть Popout из модального окна
        </CellButton>
      </Group>
      <img className="Persik" src={image} alt="Persik The Cat" />
    </ModalPage>
  );
};
