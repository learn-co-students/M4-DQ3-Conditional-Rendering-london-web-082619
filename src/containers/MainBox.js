import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    itemSelected: undefined,

  }

  handleClick = (e) => { 
    console.log(e.target.id)
    this.setState({itemSelected: e.target.id})
  }

  detailsToDisplay = () =>{
    switch(this.state.itemSelected){
      case 'profile':
        return <Profile />
      case 'photo':
        return <Photos />
      case 'cocktail':
        return <Cocktails />
      case 'pokemon':
        return <Pokemon />
      default:
        return <h1> Select one </h1>
    }
  }
  render() {

    const display = this.detailsToDisplay()

    return (
      <div>
        <MenuBar itemSelected={this.state.itemSelected} handleClick={this.handleClick} />
        {display}
      </div>
    )
  }

}

export default MainBox
