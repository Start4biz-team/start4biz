import React, { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import Uc from './../uc/Uc';
import ToBusiness from './../toBusiness/ToBusiness';
import ToFinorg from './../toFinorg/ToFinorg';
import About from '../about/About';
import BestDealBlock from './../BestDealBlock/BestDealBlock';
import WorkStepContainer from './../../containers/WorkStepContainer';
import Questions from './../Questions/Questions';
import PartnersBlock from './../PartnersBlock/PartnersBlock';
import Policy from './../Policy/Policy';
import './content.css';

function Content() {
    return (
        <div className="content-main">
            <Switch>
                <Route path="/About">
                    <div className="content-about">
                        <About />
                    </div>
                </Route>
                <Route path="/Contacts">
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
                <Route path="/toPolicy">
                    <div className="content-2policy">
                        <Policy />
                    </div>
                </Route>
                <Route path="/uc">
                    <Uc />
                </Route>
                <Route path="/">
                    <Fragment>
                        <BestDealBlock />
                        <WorkStepContainer />
                        <Questions />
                        <PartnersBlock />
                    </Fragment>
                </Route>
            </Switch>
        </div>
    );
}

export default Content;