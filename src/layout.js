import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"

import Navigation from './components/Navigation';

import App from './app';
import About from './about';
import Resume from './resume';

class Layout extends React.Component {
    // constructor(props) {
    //     super(props);

    //    this.state = {
    //        selectedKey: content.navigation[BrowserRouter.pathname]
    //    }
    // }

    render() {
        return (
            <section>
                {/* <div>
                <Navigation
                    url={this.state.selectedKey}
                    currentURL={this.currentURL.bind(this)}
                />
                </div> */}
                <BrowserRouter>
                    <Route exact path="/" component={App}/>
                    <Route path="/about" component={About}/>
                    <Route path="/resume" component={Resume}/>
                    
                </BrowserRouter>
            </section>
            
        )
    }
}

export default Layout;