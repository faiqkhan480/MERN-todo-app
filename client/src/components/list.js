import React, { Component } from 'react'
import { addItems, deleteItem, addText, getTasks, getTask, updateTask  } from '../redux/todo-action'
import {connect} from 'react-redux'
import { Box, Container, Typography, TextField, CssBaseline, Button, List, ListItem, ListItemIcon, ListItemText, Collapse, Fab }from '@material-ui/core/index';
import { withStyles } from '@material-ui/core/styles/index';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { styles } from '../components/styles'

class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            label: false,
            open: false,
            currIndex:null
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

    onEdit(id){
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

    onDelete(id){
        this.props.dispatch(deleteItem(id));
    }

    handleUpdate(event){
        event.preventDefault();
        const {text, id} = this.props;
        this.props.dispatch(updateTask(text, id));
        this.setState({label: false})

    }

    handleClick(index){
        this.setState({open: !this.state.open,  currIndex: index})
    };

    render(){
        const {item, text, classes} = this.props;
        const {label, open} = this.state;
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box className={classes.paper} component="div" p={2} borderRadius={22}>
                    <Typography component="h1" variant="h4" className='text'>
                        Todo List
                    </Typography>
                    <form className={classes.form} Validate onSubmit={label ? this.handleUpdate.bind(this) : this.handleSubmit.bind(this)}>
                        <TextField type="text" name="task" value={text || ''} onChange={this.onUpdate.bind(this)}
                            // variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Todo"
                            multiline
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.gradient}
                        >
                            {label ? 'Update TO_DO' : 'Add TO_DO'}
                        </Button>
                    </form>

                    <List component="nav" className={classes.root}>
                        {item.map((item, index) => {
                            return(
                                <>
                                    <ListItem button key={index} className={classes.items} onClick={this.handleClick.bind(this, index)}>
                                        {item.task}
                                    </ListItem>
                                    <Collapse in={open && (this.state.currIndex == index)} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItem className={classes.icons}>
                                                <ListItemIcon>
                                                    <Fab className={classes.fab} size='medium'>
                                                        <DeleteIcon onClick={this.onDelete.bind(this, item._id)}/>
                                                    </Fab>
                                                    <Fab size='medium'>
                                                        <EditIcon onClick={this.onEdit.bind(this, item._id)}/>
                                                    </Fab>
                                                </ListItemIcon>
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                </>
                            )
                        })}
                    </List>
                </Box>
            </Container>
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

export default connect(mapStateToProps)(withStyles(styles)(TaskList))