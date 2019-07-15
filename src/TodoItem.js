import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            // 子组件通过props接受父组件的传值
            <div
                onClick={this.handleClick}
            >
                {this.props.content}
            </div>
        )
    }
    handleClick(){
        this.props.deleteItem(this.props.index);  //调用父组件传过来的方法
        // alert(this.props.index);
    }
}
export default TodoItem;