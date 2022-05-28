import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
	// static contextType = LanguageContext; //1
	renderSubmit(value) {
		return value === "english" ? "Submit" : "DutchSubmit";
	}

	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{value => this.renderSubmit(value)}
				</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		//2
		return (
			<ColorContext.Consumer>
				{color => this.renderButton(color)}
			</ColorContext.Consumer>
		);
	}
}

export default Button;

//1 how to hook up context to a class component with 'this.context' -> has to be called 'contextType'
//  static -> adds property directly to the class itself (rather than the reference of the class)
//  You can also call it like this: Button.contextType = LanguageComponent

//2 <LanguageContext.Consumer> when rendered returns function wrapped inside giving context's value as argument
//  ALSO only child we pass to a consumer component is a function {color => {}}
