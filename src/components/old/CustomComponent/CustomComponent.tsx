import React, { useEffect, useState } from "react";
import { Button, Group, CardGrid, ContentCard } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "./CustomComponent.css";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

export const CustomComponent = (props: any) => {
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
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleClick = (itemId: number) => {
    routeNavigator.push(`/${"empty?id="}${itemId}`);
  };

  return (
    <Group>
      <CardGrid size="l">
        {list.map((item, index) => {
          return (
            <div
              id={"CustomComponent_" + item.id}
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <ContentCard
                disabled
                //src={item.url}
                alt={item.title}
                subtitle="Subtitle"
                header={`${item.id} ${item.title}`}
                text="Text"
                caption="caption"
                maxHeight={100}
              />
            </div>
          );
        })}
      </CardGrid>
    </Group>
  );
};
