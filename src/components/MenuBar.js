import React from 'react'

const MenuBar = (props) => {

  return (
    <div className="ui four item menu">
      <a className={ props.itemSelected === 'profile'? 'item active': 'item'} id="profile" onClick={props.handleClick}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={ props.itemSelected === 'photo'? 'item active': 'item'} id="photo" onClick={props.handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={ props.itemSelected === 'cocktail'? 'item active': 'item'} id="cocktail" onClick={props.handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={ props.itemSelected === 'pokemon'? 'item active': 'item'} id="pokemon" onClick={props.handleClick}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
