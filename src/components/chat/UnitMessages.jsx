import React from 'react';
import Radium from 'radium';


const large = '@media(min-width: 1200px) and (max-width: 1499px)';
const largeUp = '@media(min-width: 1200px)';
const web = '@media(min-width: 992px)';
const medium = '@media(min-width: 600px) and (max-width: 992px)';
const iphone6AndBigger = '@media (min-width: 374px) and (max-width: 414px)';
const iphoneSEAndMSmaller = '@media (min-width: 280px) and (max-width: 373px)';
const ipadAndBigger = '@media (min-width: 765px) and (max-width: 1024px)';

const containerDiv = {
    maxWidth: '255px',
    wordWrap: 'break-word',
    marginBottom: '20px',
    lineHeight: '24px'
}
const hour = {
    position: 'absolute',
    bottom: '3px',
    right: '7px',
    lineHeight: '10px',
    fontSize: '13.6px'
}

const them = {
    [iphoneSEAndMSmaller]: {
        maxWidth: '150px',
        padding: '8px 16px',
    },
    [iphone6AndBigger]: {
        maxWidth: '255px',
        padding: '10px 20px',
    },
    [ipadAndBigger]: {
        maxWidth: '255px',
        padding: '10px 20px',
    },
    [web]: {
        maxWidth: '280px',
        padding: '12px 24px',
        marginLeft: '9%',
    },
    wordWap: 'break-word',
    marginBottom: '25px',
    lineHeight: '24px',
    position: 'relative',
    background: 'white',
    borderRadius: '11px',
    color: 'black',
    borderTopLeftRadius: '6px',
    float: 'left',
    marginTop: '12px',
    boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)',
    marginLeft: '10px',
    before: {
        position: 'absolute',
        top: '-12px',
        WebkitTransform: 'rotate(130deg)',
        backgroundRepeat: 'no-repeat',
        width: '12px',
        backgroundSize: 'contain',
        right: '-48px',
        backgroundPosition: '50% 50%',
        backgroundImage: 'url("/img/white_tail.png")',
        left: '-10px',
        height: '19px',
        borderBottomRightRadius: '16px 14px',
        transform: 'rotate(130deg)',
    }
}


const me = {
    [iphoneSEAndMSmaller]: {
        maxWidth: '150px',
        padding: '8px 16px',
    },
    [iphone6AndBigger]: {
        maxWidth: '255px',
        padding: '10px 20px',
    },
    [ipadAndBigger]: {
        maxWidth: '255px',
        padding: '10px 20px',
    },
    [web]: {
        maxWidth: '280px',
        padding: '12px 24px',
        marginRight: '9%',
    },
    wordWrap: 'break-word',
    marginBottom: '20px',
    lineHeight: '24px',
    position: 'relative',
    marginRight: '10px',
    color: 'white',
    background: 'rgb(255, 212, 102)',
    borderRadius: '11px',
    borderTopRightRadius: '6px',
    float: 'right',
    boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)',
    before: {
        position: 'absolute',
        top: '-3px',
        height: '19px',
        transform: 'rotate (274deg)',
        WebkitTransform: 'rotate(274deg)',
        backgroundRepeat: 'no-repeat',
        width: '12px',
        backgroundSize: 'contain',
        right: '-12px',
        backgrounPosition: '50% 50%',
        backgroundImage: 'url(/img/yellow_tail.png)',
    }
}

const containerSection = {
    [ipadAndBigger]: {
        maxWidth: '750px',
        margin: '50px auto'
    },
    [web]: {
        maxWidth: '100%',
        margin: '50px auto'
        // marginTop: '50px', 
        // margin: 0
    },
    maxWidth: '450px',
    margin: '50px auto'
}

// #fce2a2

// #ffce54

const UnitMessages = (props) => (
    <section style={containerSection}>

        <div className="them" style={them}>
            <span style={{ fontSize: '13.6px', lineHeight: '19px', whiteSpace: 'pre-wrap' }}> {props.them.message} &#013; </span>
            <span style={hour}>{props.them.timestamp}</span>
            <div style={them.before}></div>
        </div>
        <div style={{ clear: 'both', }}></div>
        <div style={me}>
            <span style={{ fontSize: '13.6px', lineHeight: '19px' }}>  {props.me.message} &#013;</span>
            <span style={hour}>{props.me.timestamp}</span>
            <div style={me.before}></div>
        </div>
    </section>
)

export default Radium(UnitMessages);