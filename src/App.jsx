import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {compose} from 'redux';
import {connect, Provider} from 'react-redux';
import store from './redux/redux-store';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';

// const Navbar = React.lazy(() => import ('./components/Navbar/Navbar'));
const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import ('./components/News/News'));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <HashRouter basename="/">
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar store={this.props.store}/>
                    <div className="app-wrapper-content">
                        <React.Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route path="/profile/:id" element={<ProfileContainer/>}/>
                                <Route path="/profile" element={<ProfileContainer/>}/>
                                <Route path="/dialogs" element={<DialogsContainer/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/news" element={<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                                <Route path="/friends" element={<Friends/>}/>
                                <Route path="/login" element={<Login/>}/>
                            </Routes>
                        </React.Suspense>

                    </div>
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    store: store
})

const AppContainer = compose(
    connect(mapStateToProps,
        {initializeApp})
)
(App)


const SocialNetworkApp = (props) => {
    return <Provider store={store}>
        {/*<React.StrictMode>*/}
        {/*<BrowserRouter>*/}
        <AppContainer/>
    </Provider>
    // </BrowserRouter>
    /*</React.StrictMode>*/
}

export default SocialNetworkApp