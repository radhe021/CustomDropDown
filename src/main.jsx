/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const defaultCSS = {
	currentSelected: "z-index: 1000",
	dropDownBtn: "btn btn-outline-primary",
	upArrowIcon: "bi bi-caret-up",
	downArrowIcon: "bi bi-caret-down",
	optionContainerStyle: "col-sm-12 mt-2 rounded text-white",
	optionStyle: "list-group-item list-group-item-action bg-secondary my-1",
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App
			currentSelected={defaultCSS.currentSelected}
			dropDownBtn={defaultCSS.dropDownBtn}
			upArrowIcon={defaultCSS.upArrowIcon}
			downArrowIcon={defaultCSS.downArrowIcon}
			optionContainerStyle={defaultCSS.optionContainerStyle}
			optionStyle={defaultCSS.optionStyle}
		/>
	</React.StrictMode>
);
