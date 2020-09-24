import React,{Component} from 'react'

class Counter extends Component {
    
    render(){
        console.log(this.props)
        const {name,city} = this.props
        return (
            <div>
                <h1>Hello {name} from {city}</h1>
            </div>
        )
    }
}

export default Counter