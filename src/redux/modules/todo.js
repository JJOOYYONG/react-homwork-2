// 모듈이란, State의 그룹

// 초기 상태값
const initialState = [{id:1,title:"테스트 ", content:"테스트1 ",isDone : false}];

  //액션
  const CREATE = "todo/CREATE";
  const UPDATE = "todo/UPDATE";
  const DELETE = "todo/DELETE";

  //액션 함수
  export const createTodo = (todo) => {
    return { type: CREATE, todo };
  };
  export const updateTodo = (todo) => {
    return { type: UPDATE, todo };
  };
  export const deleteTodo = (id) => {
    return { type: DELETE, id };
  };
  
  
  // 리듀서
  const todoList = (state = initialState, action) => {
    
    switch (action.type) {
      case "todo/CREATE":
      const new_todo_list = [...state, action.todo];
      return new_todo_list

      case "todo/UPDATE":
      const update_todo_list = [...action.todo];
      return update_todo_list

      case "todo/DELETE":
      const delete_todo_list = state.filter((todo)=> {
        return parseInt(action.id) !== todo.id;
      });
      return delete_todo_list


      default:
        return state;
    }
  };
  
  // 모듈파일에서는 리듀서를 export default 한다.
  export default todoList;