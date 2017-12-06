import React from 'react';
import AppBar from 'material-ui/AppBar';
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const LayoutSet = () => (
    <AppBar
        onClick={() => history.goBack()}
    />
)

export default LayoutSet; 