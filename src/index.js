import React from 'react'
import ReactDOM from 'react-dom'
import AppPage from './components/home'
import About from './components/about'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ScrollSpyPage from './components/scrool_spy'
import 'bootstrap/dist/css/bootstrap.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import FillingSpace from './filing'

function MyApp() {
    return (
        <div>
            <AppPage /> 
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
    <Switch>
    <Route path="/" component={MyApp} exact />
    <Route path="/About" component={About} exact />
    </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
