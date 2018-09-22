import React, {Component} from 'react'

class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'React'
        }
    }

    handleChange(event) {
        this.setState({
            userName: event.target.value
        })
    }

    render() {
        return <div>
            <div><input type='text' value={this.state.userName} onChange={this.handleChange.bind(this)}/></div>
            <div><input type='text' value={this.state.userName} onChange={this.handleChange.bind(this)}/></div>
        </div>
    }
}

export default Hello
