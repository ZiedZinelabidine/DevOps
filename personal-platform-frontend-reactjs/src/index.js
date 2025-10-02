import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store"; // Importez votre store Redux

const Root = () => {
  return (
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
