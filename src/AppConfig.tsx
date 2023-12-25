import React from "react";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import App from "./App";
import { hierarchy, router } from "./routes";
import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
//import { useAppearance, useAdaptivity } from "@vkontakte/vk-bridge-react";
import bridge from "@vkontakte/vk-bridge";

export const AppConfig = () => {
  //const appearance = useAppearance();
  return (
    <ConfigProvider isWebView={bridge.isWebView()}>
      <AdaptivityProvider>
        <AppRoot>
          {/*<RouterProvider router={router} notFound={<p>'Custom not found'</p>}>*/}
          <RouterProvider router={router} hierarchy={hierarchy}>
            <App />
          </RouterProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
