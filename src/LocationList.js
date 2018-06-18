import React from 'react'
import App from './App'
import escapeRegExp from 'escape-string-regexp'
let showingLocations
class LocationList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //query:[],
        //workingList:[],
      }
    }

    render() {
        //console.log(this.props.locations.map(location=>location.name))
        /*
        let showingLocations
        if (this.props.query){
            const match = new RegExp(escapeRegExp(this.props.query), 'i')
            showingLocations = this.props.locations.filter(location=>match.test(location.name))
        } else
        {showingLocations=this.props.locations}
*/
        return (
            <div>
            <input 
            id='input' 
            type='text' 
            placeholder='Enter a beach' 
            value={this.state.query}
            onChange={e=>this.props.updateQuery(e.target.value)}
            />
            <ul>
            {this.props.workingList.map( location =>
            <li data-key={location.id} key={location.id} role="button" 
            onClick={e=>this.props.handleClick(e)}> 
            {location.name.includes('Paralia')?
            location.name=location.name.replace(/paralia/i, ''):
            location.name.includes('Παραλία')?
            location.name=location.name.replace(/παραλία/i, ''):
            location.name.includes('παραλια')?
            location.name=location.name.replace(/παραλια/i, ''):
            location.name.includes('Βeach')?
            location.name=location.name.replace(/beach/i, ''):
            location.name
            } 
            </li>
            )}
            </ul>
            </div>
        );
    }
}

export default LocationList