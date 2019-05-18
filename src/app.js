import React from 'react';

import Profile from './components/Profile';
import Social from './components/Social';


class App extends React.Component {
    render() {
        return (
            <section>
                <Profile/>
                <Social/>
            </section>
        )
    }
}

export default App;