import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App'

const Main =()=> {
    return(
        <div><App /> </div>
    )
}


ReactDom.render(<Main />, document.querySelector('#root'));