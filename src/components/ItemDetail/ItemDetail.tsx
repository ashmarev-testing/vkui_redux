import React, { useEffect, useState } from "react";
import { Group, CardGrid, ContentCard } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./ItemDetail.css";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const ItemDetail = (props: any) => {
  const routeNavigator = useRouteNavigator();
  const [list, setList] = useState<
    {
      id: number;
      title: string;
      thumbnailUrl: string;
      url: string;
    }[]
  >([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.itemId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Group>
      <CardGrid size="l">{list ? JSON.stringify(list) : ""}</CardGrid>
    </Group>
  );
};
