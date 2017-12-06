import React, { Component } from 'react';
import Radium from 'radium';
import ReactDOM from 'react-dom';
import UnitMessages from './UnitMessages';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import createHistory from 'history/createBrowserHistory';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import { Picker } from 'emoji-mart';
import AllChats from './AllChats'
import data from '../../dummy_data.js';

const history = createHistory()
const large = '@media(min-width: 1200px) and (max-width: 1499px)';
const largeUp = '@media(min-width: 1200px)';
const web = '@media(min-width: 992px)';
const medium = '@media(min-width: 600px) and (max-width: 992px)';
const iphone6AndBigger = '@media (min-width: 374px) and (max-width: 414px)';
const iphoneSEAndMSmaller = '@media (min-width: 280px) and (max-width: 373px)';
const ipadAndBigger = '@media (min-width: 765px) and (max-width: 1024px)';

const style = {
    appBarStyle: {
        backgroundColor: '#FFF',
        top: '-8px',
        position: 'fixed'
    },
    titleStyle: {
        fontSize: 'medium',
        color: 'black',
        marginLeft: '10px',
        top: '0px',
        marginTop: '-2px',
        fontWeight: '100',
        position: 'absolute'
    },
    statusStyle: {
        fontSize: 'small',
        position: 'absolute',
        bottom: '-20px',
        marginLeft: '12px',
        color: 'black'
    },
    containerInAppBarStyle: {
        maxHeight: '64px',
        width: '100%',
    },
    avatarStyle: {
        marginTop: '15px'
    },
    textFieldContainerStyle: {
        bottom: '0px',
        backgroundColor: '#f5f1ee',
        position: 'fixed',
        width: '100%',
        borderRadius: '15px',
        height: '50px',
        [web]: {
            width: 'inherit'
        }
        // border: '2px solid #e0e0e0'
    },
    textFieldStyle: {
        marginLeft: '20px',
        height: '35px',
        width: '80%',
        borderRadius: '15px',
        marginTop: '8px',
        backgroundColor: '#fff'

    },
    elementStyleContainer: {
        [web]: {
            width: 'calc(100% - 30%)',
            float: 'right'
        },
        height: '100%',
        backgroundImage: 'url("/img/background_chat.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        overflow: 'auto',
    },
    messagesContainer: {
        paddingBottom: '12vh',
        position: 'relative'
    },
    buttonSend: {
        backgroundColor: '#ffca43',
        color: 'white',
        borderRadius: '50%',
        fontSize: '20px',
        textAlign: 'center',
        width: '36px',
        height: '36px',
        bottom: '6px',
        right: '8px',
        position: 'fixed',
        border: 'none'

    },
    chatList: {
        padding: '0px',
        position: 'fixed',
        width: 'calc(100% - 70%)',
        float: 'left',
        overflowX: 'hidden',
        overflowY: 'auto'
    }

}

class ChatConversation extends Component {


    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    scrollToBottom() {
        const node = ReactDOM.findDOMNode(this.messagesEnd);
        node.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        return (
            <div>
                {this.props.web ? <div className="chat-list" style={style.chatList}>
                    <AllChats web={this.props.web} userData={data.users} />
                </div> : <span></span>}
                <div style={style.elementStyleContainer}>
                    <AppBar
                        title={
                            <div style={style.container}>
                                <Avatar style={style.avatarStyle} src={this.props.them.profile.image} /> <span style={style.titleStyle}> {this.props.them.profile.name}</span>
                                <span style={style.statusStyle}>Online</span>
                            </div>
                        }
                        iconElementLeft={<IconButton iconStyle={{ color: 'black' }} iconClassName="material-icons">arrow_back</IconButton>}
                        style={style.appBarStyle}
                        onClick={() => (history.goBack())}
                    />
                    <div style={style.messagesContainer} className="messages">
                        {this.props.messagesMe.map((message, i) => (
                            <UnitMessages me={message} them={message} />
                        ))}


                    </div>

                    <footer className="safari-only" style={style.textFieldContainerStyle}>
                        <TextField inputStyle={{ marginLeft: '14px', bottom: '4px' }} hintStyle={{ marginLeft: '14px', bottom: '4px' }} onSubmit={(ev) => this.props.onSubmit(ev)} onChange={(ev) => this.props.onChange(ev)} style={style.textFieldStyle} underlineShow={false} multiLine={true} hintText="Digite uma mensagem" />
                        <button style={style.buttonSend} className="material-icons">send</button>
                    </footer>

                    <div style={{ float: "left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </div>
            </div>
        );
    }
}

export default Radium(ChatConversation);