import React from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom';
import SocialNetworkApp from './App';
import {createRoot} from "react-dom/client";

test('renders without crashing', () => {
    // const div = document.createElement('div')
    // ReactDOM.render(<SocialNetworkApp/>, div)
    // ReactDom.unmountComponentAtNode(div)

    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<SocialNetworkApp tab="home" />);
    root.unmount();

});
