import React from 'react';
// AIzaSyC9QVBcLijogVwREev3DL5CXjZU16odAes

class SearchBar extends React.Component {
  state = { term: 'javascript' };

  onChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);

    // TODO :
  };

  componentDidMount = () => {
    console.log(this.state.term);
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form action='' className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label htmlFor=''>Video Search</label>
            <input
              value={this.state.term}
              onChange={this.onChange}
              type='text'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
