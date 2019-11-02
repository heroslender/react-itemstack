import React from "react";
import ReactDOM from "react-dom";

/**
 * Import Examples
 */
import PlainItem from "./components/PlainItem";
import LoreItem from "./components/LoreItem";
import EnchantedItem from "./components/EnchantedItem";
import ExampleItemStack from "./components/ExampleItemStack";

function App() {
  return (
    <>
      <PlainItem />
      <LoreItem />
      <EnchantedItem />
      <ExampleItemStack />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
