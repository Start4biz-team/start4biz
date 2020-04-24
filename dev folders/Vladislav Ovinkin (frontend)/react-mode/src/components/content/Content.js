import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ToBusiness from './../toBusiness/ToBusiness';
import ToFinorg from './../toFinorg/ToFinorg';
import About from './../about/About';
import './content.css';

function Content() {
    return (
        <div className="content-main">
            <Switch>
                <Route path="/about">
                    <div className="content-about">
                        <About />
                    </div>
                </Route>
                <Route path="/toBusiness">
                    <div className="content-2business">
                        <ToBusiness />
                    </div>
                </Route>
                <Route path="/toFinorg">
                    <div className="content-2finorg">
                        <ToFinorg />
                    </div>
                </Route>
                <Route path="/">
                    it's UNDER CONSTRUCTION
                </Route>
            </Switch>
        </div>
    );
}

export default Content;