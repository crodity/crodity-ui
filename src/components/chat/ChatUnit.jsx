import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Radium from 'radium';
import Divider from 'material-ui/Divider';

const style = {
    dividerStyle: {
        width: '100%',
        textAlign: 'end',
        marginLeft: '19%',
        height: '0.5px',
        backgroundColor: 'rgb(224, 224, 224)',
        border: 'none',
    }
}

const ChatUnit = (props) => (
    <span style={{ backgroundColor: '#fff'}}>
        <ListItem
            primaryText={props.name}
            secondaryText={props.lastMessage}
            leftAvatar={<Avatar src={props.imageProfile} />}
            onClick={(event) => props.onClick(event)}
            rightIcon={props.hour}
            style={{ backgroundColor: '#fff' }}
        />
        
    </span>
)

export default Radium(ChatUnit)

ChatUnit.proptypes = {
    imageProfile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    hour: PropTypes.node.isRequired
}
