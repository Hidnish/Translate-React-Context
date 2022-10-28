import React from 'react';

const Context = React.createContext('english'); //1

export class LanguageStore extends React.Component {
    state = { language: 'english'};

    onLanguageChange = language => {
        this.setState({ language : language });
    }

    //2 //3
    render() {
        return (
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context; //4



//1 Capital 'C' --> any COMPONENT requires capital letter to not be confused with vanilla HTML tags

//2 value={{...this.state, }} -> create a new object containing all existing values from current STATE object

//3 REMEMBER! only components wrapped inside provider can access context
//  {this.props.children} -> will ensure children components will have access to it

//4 We use both 'export default' and 'export' 

