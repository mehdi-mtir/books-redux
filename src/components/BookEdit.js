import React from 'react';
import {connect} from 'react-redux';
import {editBook} from '../actions';

class EditBook extends React.Component{
  state = this.props.state.books[this.props.state.currentIndex];


  onEdit = (event) => {
    event.preventDefault();
    this.props.editBook(this.props.state.currentIndex, this.state);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  componentDidUpdate(prevProps){
    if(prevProps.state.currentIndex !== this.props.state.currentIndex)
      this.setState(this.props.state.books[this.props.state.currentIndex]);
  }

  render(){
    return (
      <div>
        <h1>Editer un livre</h1>
        <form onSubmit={this.onEdit}>
          <div className="mb-3">
            <label htmlFor="iban">Iban</label>
            <input type="text" name="iban" id="iban" className="form-control"  value={this.state.iban} onChange={this.handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="title">Titre</label>
            <input type="text" name="title" id="title" className="form-control" value={this.state.title} onChange={this.handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="date_publication">Date de publication</label>
            <input type="date" name="date_publication" id="date_publication"  className="form-control" value={this.state.date_publication} onChange={this.handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="prix">Prix</label>
            <input type="number" name="prix" id="prix" className="form-control" value={this.state.prix} onChange={this.handleInputChange} />
          </div>
          <div>
            <input type="submit" className="btn btn-primary" value="Editer" />
          </div>

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {editBook})(EditBook);
