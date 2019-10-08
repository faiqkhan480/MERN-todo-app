import axios from 'axios'


export const addText = (text) => ({
    type: 'TEXT',
    payload: text
});


export const getTasks = () => dispatch => {
    axios.get('http://localhost:3001/posts')
        .then(res =>{
            dispatch({
                type: 'GET_TASKS',
                payload: res.data
            })
        })
        .catch(err => {console.log(err, '=-=getserror')})
};


export const addItems = (data) => dispatch => {
    axios.post('http://localhost:3001/posts', {task: data})
        .then(res => {
            dispatch({
                type: 'ADD_ITEMS',
                payload: res.data
            })
        })
        .catch(err => {console.log(err, '=-=addserror')})
};


export const deleteItem = (id) => dispatch => {
    let url = 'http://localhost:3001/posts/';
    axios.delete(`${url}${id}`)
        .then(res => {
            dispatch({
                type: 'DEL_ITEM',
                payload: res.data
            })
        })
        .catch(err => {console.log(err, '=-=-delError')})
};


export const getTask = (id) => dispatch => {
  const url = 'http://localhost:3001/posts/';
  axios.get(`${url}${id}`)
      .then(res => {
          dispatch({
              type: 'GET_TASK',
              payload: res.data
          })
      })
      .catch(err => {console.log(err, 'getTask error')})
};


export const updateTask = (data, id) => dispatch => {
    const url = 'http://localhost:3001/posts/' ;
    axios.put(`${url}${id}`, {task:data})
        .then(res => {
            dispatch({
                type: 'UPDATE',
                payload: res.data
            })
        })
        .catch(err => {console.log(err, 'update error')})
};