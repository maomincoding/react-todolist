import React,{Component} from 'react'

class Text extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        console.log('render1')
        return <div>{this.props.content}</div>
    }
}

export default Text