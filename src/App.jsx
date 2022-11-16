/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App(props) {
	const [upArrow, setupArrow] = useState(false);
	const [currentSelcetion, setcurrentSelcetion] = useState(
		"Please select any option"
	);
	function handleClick(e) {
		setupArrow((upArrow) => !upArrow);
	}
	function handleOptionClick(option) {
		console.log(option);
		setcurrentSelcetion(option);
		setupArrow((upArrow) => !upArrow);
	}
	const options = [
		"Option 1",
		"Option 2",
		"Option 3",
		"Option 3",
		"Option 4",
		"Option 5",
		"Option 6",
		"Option 7",
		"Option 8",
		"Option 9",
		"Option 10",
	];
	return (
		<div className="App">
			<div className={props.currentSelected}>{currentSelcetion}</div>
			<button type="button" className={props.dropDownBtn} onClick={handleClick}>
				Please select any from dropdown
				{!upArrow && <i className={props.upArrowIcon}></i>}
				{upArrow && <i className={props.upArrowIcon}></i>}
			</button>
			<div className="h-10">
				{upArrow && (
					<div className={props.optionContainerStyle}>
						{options.map((option, index) => (
							<div
								key={index}
								value={option}
								className={props.optionStyle}
								onClick={(e) => handleOptionClick(option)}
							>
								{option}
							</div>
						))}
					</div>
				)}
			</div>
			{/* <div className="current-selected">{currentSelcetion}</div>
			<button
				type="button"
				className="btn btn-outline-primary"
				onClick={handleClick}
			>
				Please select any from dropdown
				{!upArrow && <i className="bi bi-caret-down"></i>}
				{upArrow && <i className="bi bi-caret-up"></i>}
			</button>
			<div className="h-10">
				{upArrow && (
					<div className="col-sm-12 mt-2 rounded text-white">
						{options.map((option, index) => (
							<div
								key={index}
								value={option}
								className="list-group-item list-group-item-action bg-secondary my-1 "
								onClick={(e)=>handleOptionClick(option)}
							>
								{option}
							</div>
						))}
					</div>
				)}
			</div> */}
		</div>
	);
}

export default App;
