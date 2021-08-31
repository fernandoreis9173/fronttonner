import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Menu from './Components/Menu';

import Listar from './Components/Listar';
import Search from './Components/Search';
import Insert from './Components/Insert';

import Footer from './Components/Footer';


const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Menu />
            <Switch>
                 <Route exact path="/" component={Listar}/>
                <Route  path="/search" component={Search}/>
                <Route  path="/insert" component={Insert}/>
                {/* <Route  path="/contato" component={Contato}/> */}
            </Switch>
            <Footer/>
            
        </BrowserRouter>
    )
}

export default Routes;