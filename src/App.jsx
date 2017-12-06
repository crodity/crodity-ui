import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import data from './dummy_data.js';

import { default as Theme } from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AllChats from './components/chat/AllChats.js'
import ChatConversation from './components/chat/ChatConversation.js'

import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const theme = getMuiTheme({
    palette: {
        primary1Color: '#ffca43'
    }
});

class App extends Component {
    render() {
        return (

            <StyleRoot>
                <Theme muiTheme={theme}>
                    <Router>
                        <Switch>
                            <div style={{ height: '100vh' }}>
                                <Route path='/chat/' render={(props) => (<AllChats {...props} userData={data.users} />)} />
                                <Route path='/unique_chat' render={() => (<ChatConversation web={true} them={data.user1} me={data.user2} messagesMe={data.messageOfUser1} />)} />
                            </div>
                        </Switch>
                    </Router>
                </Theme>
            </StyleRoot>

        );
    }
}

export default App;