import React from 'react';
import ReactDOM from 'react-dom';
import People from './People';

const Title = ({ title })=> <h1>{ title }</h1>;


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      people : [],
      favorites: {}
    }; 
  }
  setFavorite = (person)=> {
    const favorites = Object.assign({}, this.state.favorites, {
      [ person.name ] : !this.state.favorites[person.name]
    }); 
    this.setState({ favorites });

  }
  componentDidMount(){
    const data = localStorage.getItem('people');
    if(data){
      this.setState({ people: JSON.parse(data)});
      return;
    }
    window.fetch('https://swapi.co/api/people')
      .then( response => response.json())
      .then( data => {
        const people = data.results;
        localStorage.setItem('people', JSON.stringify(people));
        this.setState({ people })
      });

  }
  render(){
    const { title } = this.props;
    const { people, favorites } = this.state;
    const { setFavorite } = this;
    console.log(favorites);
    return ( 
      <div>
        <Title title={ title }/>
        {
          !people.length ? <span>Loading</span> : <People people={ people } favorites={ favorites } setFavorite={ setFavorite }/>
        }
      </div>
    );
  }   
}
