import React from "react";
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext; //1

	render() {
		return (
			<div>
				Select a language:
				<i
					className="flag us"
					onClick={() => this.context.onLanguageChange("english")}
				/>
				<i
					className="flag nl"
					onClick={() => this.context.onLanguageChange("dutch")}
				/>
			</div>
		);
	}
}

export default LanguageSelector;

//1 It has to be written exactly like this - contextType- and it has to be static 
//  (static means this property can be accessed from outside without the need to instantiate an object based on this class first)
