import React from 'react';
import ReactDOM from 'react-dom';
import Films from './Films';

const Title = ({ title })=> <h1>{ title }</h1>;


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      films : [],
    };
  }
  componentDidMount(){
    const data = localStorage.getItem('films');
    if(data){
      this.setState({ films: JSON.parse(data)});
      return;
    }
    window.fetch('https://swapi.co/api/films')
      .then( response => response.json())
      .then( data => {
        const films = data.results;
        localStorage.setItem('films', JSON.stringify(films));
        this.setState({ films })
      });

  }
  render(){
    const { title } = this.props;
    const { films } = this.state;
    return (
      <div>
        <Title title={ title }/>
        {
          !films.length ? <span>Loading</span> : <Films films={ films } />
        }
      </div>
    );
  }
}
