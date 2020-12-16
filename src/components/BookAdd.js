import React from 'react';
import Book from '../models/Book';
import { connect } from 'react-redux';
import { addBook } from '../actions';


class BookAdd extends React.Component{

  constructor (props){
    super(props);

    //this.book = new Book('','','','');
    console.log(props);
  }


  onAdd = (event) => {
    event.preventDefault();
    let book = new Book(
      document.getElementById('iban').value,
      document.getElementById('title').value,
      document.getElementById('date_publication').value,
      document.getElementById('prix').value
    );
    this.props.addBook(book);
  }

  /*
  onChangeIban = (e) =>{
    this.book.iban = e.target.value;
  }

  onChangeTitle = (e) =>{
    this.book.title = e.target.value;
  }

  onChangeDate_publication = (e) =>{
    this.book.date_publication = e.target.value;
  }

  onChangePrix = (e) =>{
    this.book.prix = e.target.value;
  }
  */



  render = () => {
      return (
      <div>
        <h1>Ajouter un livre</h1>
        <form onSubmit={this.onAdd}>
          <div className="mb-3">
            <label htmlFor="iban">Iban</label>
            <input type="text" name="iban" id="iban" className="form-control" defaulvalue="" />
          </div>
          <div className="mb-3">
            <label htmlFor="title">Titre</label>
            <input type="text" name="title" id="title" className="form-control" defaulvalue="" />
          </div>
          <div className="mb-3">
            <label htmlFor="date_publication">Date de publication</label>
            <input type="date" name="date_publication" id="date_publication" className="form-control" defaulvalue=""/>
          </div>
          <div className="mb-3">
            <label htmlFor="prix">Prix</label>
            <input type="number" name="prix" id="prix" className="form-control" defaulvalue=""/>
          </div>
          <div>
            <input type="submit" className="btn btn-primary" value="Ajouter" />
          </div>

        </form>
      </div>
      )
  }
}

const mapStateToProps = (state)=>{
  console.log(state);
  return { books : state.books}
}

export default connect(mapStateToProps, {addBook})(BookAdd);
