import React from 'react';
import Book from '../models/Book';
import { connect } from 'react-redux';
import { addBook } from '../actions';


class BookAdd extends React.Component{
  state = new Book('', '', '', '');

  onAdd = (event) => {
    event.preventDefault();
    this.props.addBook(this.state);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }


  render = () => {
      return (
      <div>
        <h1>Ajouter un livre</h1>
        <form onSubmit={this.onAdd}>
          <div className="mb-3">
            <label htmlFor="iban">Iban</label>
            <input type="text" name="iban" id="iban" className="form-control" value={this.state.iban} onChange={this.handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="title">Titre</label>
            <input type="text" name="title" id="title" className="form-control" value={this.state.title} onChange={this.handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="date_publication">Date de publication</label>
            <input type="date" name="date_publication" id="date_publication" className="form-control" value={this.state.date_publication} onChange={this.handleInputChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="prix">Prix</label>
            <input type="number" name="prix" id="prix" className="form-control" value={this.state.prix} onChange={this.handleInputChange}/>
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
  console.log(state)
  return state
}

export default connect(mapStateToProps, {addBook})(BookAdd);
