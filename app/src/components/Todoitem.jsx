import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Todoitem extends Component {
    constructor(props){
        super(props);
        this.handerClick=this.handerClick.bind(this);
    }
    render(){
        const {item,text} = this.props;
        return (
        <li className="ani" onClick={this.handerClick} >{text}—{item}</li>
        )
    }
    // 删除
    handerClick(){
        const {index,deleteItem} = this.props;
        deleteItem(index);
    }
} 
Todoitem.propTypes = {
    text: PropTypes.string.isRequired,
    item: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}
Todoitem.defaultProps = {
    text: 'Todoitem'
}

export default Todoitem