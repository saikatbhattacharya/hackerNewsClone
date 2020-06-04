import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import configureStore from "./store";

const render = () => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <Provider store={configureStore().store}>
      <PersistGate loading={null} persistor={configureStore().persistor}>
        <AppContainer>
          <App />
        </AppContainer>
      </PersistGate>
    </Provider>,
    document.getElementById("root")
  );
};

// Do this once
// registerServiceWorker();

// Render once
render();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
