const initialState = {
  todos: ['Learn React', 'Learn Redux', 'Learn Firebase', 'Learn Graphql']
};

const todolistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos,action.todo],
       
      };
    case "REMOVE":
      return {
        ...state,
        todos: state.todos.filter((todo, i) => i !== action.index)
      };

      case "UPDATE":
        return {
         todos:action.todos
          
        };
    default:
      return state;
  }
};

export default todolistReducer;
