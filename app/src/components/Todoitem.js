import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {
    constructor(props){
        super(props);
        this.handerClick=this.handerClick.bind(this);
    }
    render(){
        const {item} = this.props;
        return (
        <li className="ani" onClick={this.handerClick} >{item}</li>
        )
    }
    // 删除
    handerClick(){
        const {index,deleteItem} = this.props;
        deleteItem(index);
    }
} 
Todoitem.propTypes = {
    item: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

export default Todoitem