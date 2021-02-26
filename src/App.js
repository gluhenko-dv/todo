import React from "react";
import { Provider } from "react-redux";
import { ToDo } from "./Components/Todo/Todo.jsx";
import store from "./store/store"
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDo />
      </div>
    </Provider>
  );
}

export default App;
