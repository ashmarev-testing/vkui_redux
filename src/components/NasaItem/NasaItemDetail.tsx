//NasaItemDetail.tsx
import React, { useEffect, useState } from "react";
import { Group, CardGrid, ContentCard } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

type NasaImageData = {
  "Composite:ImageSize": string;
  "Composite:Megapixels": number;
  "AVAIL:MediaType": string;
  "AVAIL:NASAID": string;
  "AVAIL:Owner": string;
  "AVAIL:Center": string;
  "AVAIL:Album": any[];
  "AVAIL:DateCreated": string;
  "AVAIL:Description": string;
  "AVAIL:Description508": string;
  "AVAIL:Keywords": string[];
  "AVAIL:Location": string;
  "AVAIL:Photographer": string;
  "AVAIL:SecondaryCreator": string;
  "AVAIL:Title": string;
  "AVAIL:Creator": any;
  "AVAIL:Thumbnails": any;
};

export const NasaItemDetail = (props: any) => {
  //const routeNavigator = useRouteNavigator();
  const [item, setItem] = useState<NasaImageData | null>(null);
  useEffect(() => {
    fetch(
      `https://images-assets.nasa.gov/image/${
        props.nasaId ? props.nasaId : "PIA25163"
      }/metadata.json`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("NasaItemDetail 18", data);
        setItem(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [props.nasaId]);

  return (
    <>
      {item && (
        <Group>
          <CardGrid size="l">
            <div>
              <ContentCard
                disabled
                //src={item.}
                alt={item["AVAIL:Description"]}
                header={item["AVAIL:Title"]}
                subtitle={item["AVAIL:DateCreated"]}
                text={item["AVAIL:Description"]}
                caption={item["AVAIL:SecondaryCreator"]}
                maxHeight={400}
              />
            </div>
          </CardGrid>
        </Group>
      )}
    </>
  );
};
