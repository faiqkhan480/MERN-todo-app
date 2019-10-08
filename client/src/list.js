import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Input, Button, Form,Toast, ToastBody} from 'reactstrap';
import { addItems, deleteItem, addText, getTasks, getTask, updateTask  } from './redux/todo-action'
import {connect} from 'react-redux'

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            label: false
        }
    }

    componentDidMount() {
        this.props.dispatch(getTasks())
        // axios
        //     .get('http://localhost:3001/posts')
        //     .then(res=>{
        //         console.log(res.data[].task)
        //     })
    }

    getValue(id){
        this.props.dispatch(getTask(id));
        this.setState({
            label: true
        })
    }

    onUpdate(event) {
        this.props.dispatch(addText(event.target.value))
    }


    handleSubmit(event){
        event.preventDefault();
        this.props.dispatch(addItems(this.props.text));

    };

    delItem(id){
        this.props.dispatch(deleteItem(id));
    }

    handleUpdate(event){
        event.preventDefault();
        const {text, id} = this.props;
        this.props.dispatch(updateTask(text, id));
        this.setState({label: false})

    }

    render(){
        const {item, text} = this.props;
        const {label} = this.state;
        return(
            <div>
                <h1>Todo List</h1>
                <Form onSubmit={label ? this.handleUpdate.bind(this) : this.handleSubmit.bind(this)}>
                    <Input type="text" name="task" value={text || ''} onChange={this.onUpdate.bind(this)}/>
                    <br/>
                    <Button type='submit'>{label ? 'Update TO_DO' : 'Add TO_DO'}</Button>
                    {/*<h1>{this.props.item}</h1>*/}
                </Form>
                <ListGroup className='list-group' >{item.map((item, index) => {
                    return(
                        <ListGroupItem key={index} className="justify-content-between">
                                <span className="task" onClick={this.getValue.bind(this, item._id)}>{item.task}</span>
                                <Button close  onClick={this.delItem.bind(this, item._id)}/>
                        </ListGroupItem>
                    )
                    })}</ListGroup>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        id: state.id,
        item: state.item,
        text: state.text
    }
};

export default connect(mapStateToProps)(List);