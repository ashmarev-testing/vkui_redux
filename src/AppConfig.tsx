import React from "react";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

export const AppConfig = () => {
  //const appearance = useAppearance();
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <Provider store={store}>
            <App />
          </Provider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
