//créateurs d'action
export const addBook = (book) =>{
  return {
    //objet action a retourner
    type : 'ADD_BOOK',
    payload : { book }
  }
}

export const editBook= (indice, book) =>{
  return {
    type : 'EDIT_BOOK',
    payload : {indice, book }
  }
}

export const deleteBook = (indice) =>{
  return {
    type : 'DELETE_BOOK',
    payload : { indice }
  }
}
