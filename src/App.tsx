import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props: any) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar store={props.store}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/:id" element={<ProfileContainer/>}/>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/friends" element={<Friends/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
