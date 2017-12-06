import React from 'react';
import ChatList from './ChatList';
import ChatUnit from './ChatUnit';
import Radium, { Style } from 'radium';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import createHistory from 'history/createBrowserHistory';
import Divider from 'material-ui/Divider';


const large = '@media(min-width: 1200px) and (max-width: 1499px)';
const largeUp = '@media(min-width: 1200px)';
const web = '@media(min-width: 992px)';
const medium = '@media(min-width: 600px) and (max-width: 992px)';
const iphone6AndBigger = '@media (min-width: 374px) and (max-width: 414px)';
const iphoneSEAndMSmaller = '@media (min-width: 280px) and (max-width: 373px)';
const ipadAndBigger = '@media (min-width: 765px) and (max-width: 1024px)';

const history = createHistory()

const style = {
    searchField: {
        top: '8px',
        marginRight: '5px',
        color: '#848484',
        marginLeft: '5px',
        position: 'relative'
    },
    hourText: {
        height: '12px',
        width: '12px',
        position: 'relative',
        top: '4px',
        float: 'right',
        textAlign: 'end',
        color: 'rgb(132, 132, 132)',
        fontWeight: '300',
        fontSize: 'small',
    },
    textField: {
        [web]: {
            outline: 'none',
            textIndent: '10px',
            marginLeft: '10px',
            width: '450px',
            border: 'none',
            borderRadius: '12px',
            height: '30px',
            backgroundColor: '#fff'
        },
        marginLeft: '10px',
        width: '300px'
    },
    appBarStyle: {
        top: '-8px',
        backgroundColor: '#fff'
    }
}




const AllChats = (props) => {
    console.log(props)
    return (
        <span>
            <AppBar
                title="Conversas"
                iconElementLeft={<IconButton iconStyle={{ color: 'black' }} iconClassName="material-icons">arrow_back</IconButton>}
                style={style.appBarStyle}
                titleStyle={{ color: 'black' }}
                onClick={() => (history.goBack())}
            />

            <div>
                <span style={style.searchField} className='material-icons'>search</span>
                <input type="text" className="chat-search-user-style" style={style.textField} placeholder="Pesquisar..." />
            </div>
            <ChatList>
                {props.userData.map((unitData, i) => (
                    <span style={{ marginBottom: '1px' }}>
                        <ChatUnit
                            key={i}
                            name={unitData.profile.name}
                            imageProfile={unitData.profile.image}
                            path="/a"
                            lastMessage="bla bla bla"
                            hour={<span style={style.hourText}>12:30</span>}
                            onClick={() => (props.history.push("/unique_chat"))}
                        />
                        <Divider style={{ backgroundColor: 'rgb(216,216,216)', marginTop: '0.3px', paddingLeft: '35px' }} inset={true} />
                    </span>
                ))}
            </ChatList>

        </span>
    )

}



export default Radium(AllChats);