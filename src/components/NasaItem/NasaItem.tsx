//Nasa.tsx
import React, { useState, useEffect } from "react";
//import { Buttons } from "./Buttons";
import { Group, CardGrid, ContentCard } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import "@vkontakte/vkui/dist/vkui.css";

export type NasaItemData = {
  href: string;
  data: {
    center: string;
    title: string;
    nasa_id: string;
    date_created: string;
    keywords: string[];
    media_type: string;
    description_508: string;
    secondary_creator: string;
    description: string;
  }[];
  links: {
    href: string;
    rel: string;
    render: string;
  }[];
};

export const NasaItem: React.FC = () => {
  const routeNavigator = useRouteNavigator();
  const [arr, setArr] = useState<NasaItemData[] | null>();
  useEffect(() => {
    fetch("https://images-api.nasa.gov/search?q=andromeda galaxy")
      .then((response) => response.json())
      .then((data) => {
        setArr(data.collection.items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleClick = (itemId: string) => {
    routeNavigator.push(`/${"empty?nasaId="}${itemId}`);
  };

  //const filterItem = (curcat: string) => {
  //  const newItem = Data.filter((newVal) => {
  //    return newVal.version === curcat;
  //  });
  //  setItem(newItem);
  //};
  return (
    <>
      <Group>
        <CardGrid size="m">
          {arr
            ? arr.map((item, index) => {
                return (
                  <div
                    id={"Card " + item.data[0].nasa_id}
                    key={index}
                    onClick={() => handleClick(item.data[0].nasa_id)}
                  >
                    <ContentCard
                      disabled
                      src={item.links[0].href}
                      alt={item.data[0].description}
                      header={item.data[0].title}
                      subtitle={item.data[0].date_created}
                      text={item.data[0].description}
                      caption={item.data[0].secondary_creator}
                      maxHeight={200}
                    />
                  </div>
                );
              })
            : ""}
        </CardGrid>
      </Group>
    </>
    //<Buttons
    //filterItem={filterItem}
    //setItem={setItem}
    // menuItems={menuItems}
    //></Buttons>
  );
};
