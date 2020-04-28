import React,{Component} from 'react'

class Text extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return <div>{this.props.content}</div>
    }
}

export default Text