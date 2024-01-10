import React from "react";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import App from "./App";
import { hierarchy, router } from "./routes";
import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
//import { useAppearance, useAdaptivity } from "@vkontakte/vk-bridge-react";
import bridge from "@vkontakte/vk-bridge";
// react-redux
import { Provider } from "react-redux";
import store from "./store/store"; // Подключение вашего Redux store
// react-redux

export const AppConfig = () => {
  //const appearance = useAppearance();
  return (
    <ConfigProvider isWebView={bridge.isWebView()}>
      <AdaptivityProvider>
        <AppRoot>
          {/*<RouterProvider router={router} notFound={<p>'Custom not found'</p>}>*/}
          <RouterProvider router={router} hierarchy={hierarchy}>
            <Provider store={store}>
              <App />
            </Provider>
          </RouterProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
