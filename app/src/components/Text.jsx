import React from 'react'

export default class Text extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render() {
        return  <div className="text">{this.props.content}</div>
    }
}