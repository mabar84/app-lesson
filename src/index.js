import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

setInterval(()=>{
    store.dispatch({type:'!!!'})
},1000);

// let rerenderEntireTree = (state: any) => {

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store} />
            </Provider>
        </React.StrictMode>
    );
// };

// rerenderEntireTree(store.getState());
//
// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();