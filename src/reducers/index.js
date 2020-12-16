import { combineReducers } from 'redux';

let initialState = {
  books : [{iban : 'A123', title : 'test', date_publication : '2020-12-06', prix : 100}],
  currentIndex : -2
};

const bookReducer = (state={...initialState}, action) => {
  if(action.type === 'ADD_BOOK'){
    return {
      books : [...state.books, action.payload.book],
      currentIndex : -2
    };
  }
  if(action.type === 'EDIT_BOOK'){
    //console.log([...state.books.slice(0, action.payload.indice), action.payload.book, ...state.books.slice(action.payload.indice+1)]);
    return {
      books : [...state.books.slice(0, action.payload.indice), action.payload.book, ...state.books.slice(action.payload.indice+1)],
      currentIndex : -2
    } ;
  }
  if(action.type === 'DELETE_BOOK'){
    return {
      books : [...state.books.slice(0, action.payload.indice), ...state.books.slice(action.payload.indice+1)],
      currentIndex : -2
    };

  }

  if(action.type === 'UPDATE_INDEX'){
    //console.log('Indice : ' + action.payload.indice)
    return {
      books: [...state.books],
      currentIndex : action.payload.indice
    }
  }

  return {...state};
}

export default combineReducers(
  {state : bookReducer}
);
