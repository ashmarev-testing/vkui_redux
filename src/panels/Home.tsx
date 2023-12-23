import React from "react";

import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  ButtonGroup,
  Avatar,
} from "@vkontakte/vkui";
import { GoFunctionProp, NavProp, UserInfo } from "../types";
import { useEnableSwipeBack } from "@vkontakte/vk-mini-apps-router";
import { AppMap } from "../appMap/AppMap";

type HomeProps = NavProp &
  GoFunctionProp & {
    fetchedUser: UserInfo;
  };

export const Home = ({ nav, go, fetchedUser }: HomeProps) => {
  useEnableSwipeBack();
  return (
    <Panel nav={nav}>
      <PanelHeader>Главная</PanelHeader>
      {fetchedUser && (
        <Group
          header={
            <Header mode="secondary">
              Данные пользователя, полученные через VK Bridge
            </Header>
          }
        >
          <Cell
            before={
              fetchedUser.photo_max_orig ? (
                <Avatar src={fetchedUser.photo_max_orig} />
              ) : null
            }
            subhead={`${
              fetchedUser.country && fetchedUser.country.title
                ? fetchedUser.country.title
                : ""
            } ${","} ${
              fetchedUser.city && fetchedUser.city.title
                ? fetchedUser.city.title
                : ""
            }`}
            subtitle={`${
              fetchedUser.is_closed ? "Закрытый профиль" : "Открытый профиль"
            } ${
              fetchedUser.bdate_visibility == 0
                ? "Дата рождения скрыта"
                : "Дата рождения открыта"
            }
            ${fetchedUser.sex == "1" ? "Пол Ж" : "Пол М"}`}
          >
            {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
          </Cell>
        </Group>
      )}

      <Group>
        <ButtonGroup stretched mode="vertical">
          <ButtonGroup mode="horizontal" stretched>
            <Button
              stretched
              size="l"
              mode="secondary"
              onClick={() => go("/persik?additional=tra-ta-ta")}
            >
              Покажите Персика, пожалуйста
            </Button>
            <Button
              stretched
              size="l"
              mode="secondary"
              onClick={() => go("/persik/fish")}
            >
              А Персик не голоден?
            </Button>
          </ButtonGroup>

          <ButtonGroup mode="horizontal" stretched>
            <Button
              stretched
              size="l"
              mode="secondary"
              onClick={() => go("/onboarding_1")}
            >
              Обучение
            </Button>
            <Button
              stretched
              size="l"
              mode="secondary"
              onClick={() => go("/blocker_modal")}
            >
              Блокировка навигации
            </Button>
          </ButtonGroup>

          <ButtonGroup mode="horizontal" stretched>
            <Button
              stretched
              size="l"
              mode="secondary"
              onClick={() => go("/empty")}
            >
              На пустую страницу!
            </Button>
            <Button
              stretched
              size="l"
              mode="secondary"
              onClick={() => go("/alternative")}
            >
              На другой Root
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </Group>
      <AppMap></AppMap>
    </Panel>
  );
};
