//NasaItem.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardGrid, ContentCard } from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import "@vkontakte/vkui/dist/vkui.css";
// redux-toolkit запись
import { useDispatch } from "react-redux";
import { setText } from "../../store/slice";
//
// redux-toolkit чтение
import { useSelector } from "react-redux";
//

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
  //const [query, setQuery] = useState("");
  const routeNavigator = useRouteNavigator();
  // redux-toolkit запись
  const dispatch = useDispatch();
  //dispatch(setText(query);
  //
  // redux-toolkit чтение
  const query_redux = useSelector(
    (state: { text: { value: string } }) => state.text.value,
  );
  if (query_redux) {
    console.log(query_redux);
  }
  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query_redux.length > 0) {
          const { data } = await axios.get(
            `https://images-api.nasa.gov/search?q=${query_redux}`,
          );
          data.collection.items.sort(
            (a: NasaItemData, b: NasaItemData) =>
              new Date(b.data[0].date_created).getTime() -
              new Date(a.data[0].date_created).getTime(),
          );

          setArr(data.collection.items);
        } else {
          setArr([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query_redux]);

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
          //onChange={(event) => setQuery(event.target.value)}
          onChange={(event) => dispatch(setText(event.target.value))}
          value={query_redux}
        />
      </div>
      <CardGrid size="m">
        {arr && arr.length > 0
          ? arr.map((item, index) =>
              item.data[0].media_type === "image" ? (
                <div
                  id={"Card " + item.data[0].nasa_id}
                  key={index}
                  onClick={() => handleClick(item.data[0].nasa_id)}
                >
                  <ContentCard
                    disabled
                    src={item.links ? item.links[0].href : ""}
                    //alt={item.data[0].description}
                    header={item.data[0].title}
                    subtitle={item.data[0].date_created}
                    //text={item.data[0].description}
                    caption={item.data[0].secondary_creator}
                    maxHeight={200}
                  />
                </div>
              ) : (
                ""
              ),
            )
          : ""}
      </CardGrid>
    </>
  );
};
