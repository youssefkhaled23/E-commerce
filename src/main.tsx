import ReactDOM from "react-dom/client";
// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// Axios 
import "./services/API/axios-Global.js"
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css";
import { Approuters } from "@routes/Approuters.js";
import { store , persistor } from "./store/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Approuters  />
    </PersistGate>
  </Provider>
);