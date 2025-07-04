import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import News from './components/Pages/News';
import Contact from './components/Pages/Contact';
import NotFound from './components/Pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/news" component={News} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default App;