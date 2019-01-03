import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import { foo, generateCompany } from './db';
import Companies from './Companies';

const Title = ({ title })=> <h1>{ title }</h1>;


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      companies : [],
    }; 
    //this.addRandomUser = this.addRandomUser.bind(this);
  }
  deleteCompany = (company)=> {
    const companies = this.state.companies.filter(_company => {
      return _company.id !== company.id
    });
    this.setState({ companies });
  }
  componentDidMount(){
    const companies = foo(1);
    this.setState({ companies });
  }
  createCompany = ()=> {
    const companies = [generateCompany(), ...this.state.companies ]; 
    this.setState({ companies });
  }
  render(){
    const { title } = this.props;
    const { companies } = this.state;
    const { createCompany, deleteCompany } = this; 
    return ( 
      <div>
        <Title title={ title }/>
        <button style={{ marginBottom: '10px'}} className='btn btn-primary' onClick={ createCompany }>Create Company</button>
        <Companies companies={ companies } deleteCompany={ deleteCompany }/>
      </div>
    );
  }   
}
