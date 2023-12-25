import { FC, memo } from "react";
import {
  PanelHeaderProps,
  PanelHeader,
  PanelHeaderBack,
  //  PanelHeaderButton,
} from "@vkontakte/vkui";
import {
  useRouteNavigator,
  useFirstPageCheck,
} from "@vkontakte/vk-mini-apps-router";
//import { Icon28Notifications } from "@vkontakte/icons";

export type CustomPanelHeaderProps = {
  title: string;
} & PanelHeaderProps;

/** PanelHeader c PanelHeaderBack */
export const CustomPanelHeader: FC<CustomPanelHeaderProps> = memo(
  ({ title, ...props }: CustomPanelHeaderProps) => {
    const routeNavigator = useRouteNavigator();
    const isFirstPage = useFirstPageCheck();

    /** Делаем шаг назад в навигации или озвращаемся на стартовую старницу */
    const onHandleClick = () => {
      if (isFirstPage) routeNavigator.push("/");
      else routeNavigator.back();
    };

    return (
      <PanelHeader
        before={<PanelHeaderBack onClick={onHandleClick} />}
        {...props}
      >
        {title}
      </PanelHeader>
    );
  },
);

CustomPanelHeader.displayName = "CustomPanelHeader";
