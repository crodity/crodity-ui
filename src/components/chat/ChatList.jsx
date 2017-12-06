import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { List } from 'material-ui/List';

const ChatList = (props) => (
    <List
        {...props}
    >
        {props.children}
    </List>
)

export default Radium(ChatList)

ChatList.prototypes = {
    children: PropTypes.node.isRequired
}