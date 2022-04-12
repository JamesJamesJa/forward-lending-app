import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/globals.css";

import App from "./App";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider
      getLibrary={(provider: any) => new Web3Provider(provider)}
    >
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
