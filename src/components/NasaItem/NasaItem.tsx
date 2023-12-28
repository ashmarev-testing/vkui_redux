//NasaItem.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Group, CardGrid, ContentCard, Search } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import "@vkontakte/vkui/dist/vkui.css";
import { Icon24Done, Icon24User } from "@vkontakte/icons";

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
  const [arr, setArr] = useState<NasaItemData[] | null>();
  const [query, setQuery] = useState("galaxy");

  const onSearch = (event: React.MouseEventHandler<HTMLElement>) => {
    console.log(event);
  };
  //let searchValue = "";
  //if (event) {
  //  searchValue = "andromeda galaxy";
  //  console.log(typeof event);
  //} else {
  //  searchValue = "andromeda galaxy";
  //}
  //setQuery(searchValue);
  //};

  const routeNavigator = useRouteNavigator();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query.length > 0) {
          const { data } = await axios.get(
            `https://images-api.nasa.gov/search?q=${query}`,
          );
          console.log(data.collection.items, query);
          setArr(data.collection.items);
        } else {
          setArr([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);

  const handleClick = (itemId: string) => {
    routeNavigator.push(`/${"empty?nasaId="}${itemId}`);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder={"..."}
          className={"input"}
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
      </div>
      <CardGrid size="m">
        {arr && arr.length > 0
          ? arr.map((item, index) => (
              <div
                id={"Card " + item.data[0].nasa_id}
                key={index}
                onClick={() => handleClick(item.data[0].nasa_id)}
              >
                <ContentCard
                  disabled
                  src={item.links ? item.links[0].href : ""}
                  alt={item.data[0].description}
                  header={item.data[0].title}
                  subtitle={item.data[0].date_created}
                  text={item.data[0].description}
                  caption={item.data[0].secondary_creator}
                  maxHeight={200}
                />
              </div>
            ))
          : ""}
      </CardGrid>
    </>
  );
};
