import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }
    render() {
        return (
            <Fragment>
                {
                    // JSX单行注释
                }
                {/*JSX多行注释*/}
                <div>
                    <label htmlFor="inputArea">输入内容</label>
                    <input
                        id="inputArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>

        )
    }
    getTodoItem() {
        return (
            this.state.list.map((item, index) => {
                //  父组件设置content属性、index属性向子组件传值 
                //  
                return (
                    <TodoItem
                        key={index}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
                )
            })
        )
    }
    handleInputChange(e) {
        // console.log(e.target.value);
        const value = e.target.value;
        this.setState(() => {
            return {
                inputValue: value
            }
        })
    }
    handleButtonClick() {
        this.setState((prevState) => {              //prevState = this.state
            return {
                list: [...prevState.list, prevState.inputValue],  // 把inputValue 拼接到list中去
                inputValue: ''
            }
        })
    }
    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];  // 此处不能用this.state.list.splice(index,1),因为不能直接改变state
            list.splice(index, 1);
            return {
                list: list
            }
        })
    }
}
export default TodoList;