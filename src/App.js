import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialog from "./components/Dialog/Dialog";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route
                        path='/profile'
                        render={() => <Profile postData={props.state.profilePage.post}
                                               newPostText={props.state.profilePage.newPostText}
                                               dispatch={props.dispatch}/>}/>
                    <Route
                        path='/messages'
                        render={() => <Dialog dialogData={props.state.dialogPage.dialog}
                                              massageData={props.state.dialogPage.massage}
                                              dispatch={props.dispatch}
                                              newMassageBody={props.state.dialogPage.newMessageBody}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
