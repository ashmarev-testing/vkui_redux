import React, { useEffect, useState } from "react";
import { Group, CardGrid, ContentCard } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

export type NasaImageData = {
  href: string;
};

export const NasaItemDetail = (props: any) => {
  //const routeNavigator = useRouteNavigator();
  const [arr, setArr] = useState<NasaImageData[]>([]);
  useEffect(() => {
    fetch(`https://images-api.nasa.gov/asset/${props.nasaId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("NasaItemDetail 24", data);
        setArr(data.collection.items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Group>
        <CardGrid size="l">
          {arr
            ? arr.map((item, index) => {
                return (
                  <div id={"NasaItemDetail " + index} key={index}>
                    <ContentCard
                      disabled
                      src={item.href}
                      //alt={item.data[0].description}
                      //header={item.data[0].title}
                      //subtitle={item.data[0].date_created}
                      text={`${"Фото объекта "} ${props.nasaId}`}
                      //caption={item.data[0].secondary_creator}
                      maxHeight={400}
                    />
                  </div>
                );
              })
            : ""}
        </CardGrid>
      </Group>
    </>
  );
};
