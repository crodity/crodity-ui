import React from 'react';
import Radium from 'radium';

const web = '@media(min-width: 992px)';
const large = '@media(min-width: 1200px) and (max-width: 1499px)';
const largeUp = '@media(min-width: 1200px)';

const style = {
  container: {
    padding: '8px',
    height: '30px',
    textAlign: 'right'
  },
  inputContainer: {
    position: 'relative',
    display: 'inline'
  },
  input: {
    width: '100%',
    outline: 'none',
    fontSize: '13px',
    height: '22px',
    textIndent: '27px',
    border: 0,
    fontFamily: 'Roboto',
    marginTop: '-2px',
    [largeUp]: {
      background: '#eee',
      padding: '4px 7px 7px 7px',
      borderRadius: '4px',
      width: '300px'
    },
    [large]: {
      width: '250px'
    }
  },
  searchIcon: {
    color: '#ddd',
    float: 'left',
    position: 'absolute',
    [web]: {
      left: '5px',
      top: '-2px'
    }
  },
  filterIcon: {
    display: 'none',
    color: '#ffca43',
    float: 'right',
    position: 'relative',
    marginLeft: '5px',
    [largeUp]: {
      display: 'inline'
    }
  }
}

const SearchBox = (props) => {
  return (
    <div style={typeof props.containerStyle !== 'undefined' ? { ...style.container, ...props.containerStyle } : style.container}>
      <div style={style.inputContainer}>
        <span style={style.searchIcon} className='material-icons'>search</span>
        <input placeholder={typeof props.hintText !== 'undefined' ? props.hintText : 'Pesquisa em meus anúncios'} type="text" onChange={(ev) => props.handleText(ev)} style={typeof props.inputStyle !== 'undefined' ? { ...style.input, ...props.inputStyle } : style.input} />
      </div>
      {props.filter ? typeof props.icon !== 'undefined' ? props.icon : <span style={typeof props.iconStyle !== 'undefined' ? { ...style.filterIcon, ...props.iconStyle } : style.filterIcon} className='material-icons'>filter_list</span> : <div></div>}
    </div>
  );
}

export default Radium(SearchBox);