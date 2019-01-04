import React from 'react';

export default ({ companies, deleteCompany })=> {
  if(companies.length === 0){
    return <h1>Add some companies</h1>
  }
  return (
    <ul className='list-group'>
      {
        companies.map( company => {
          return (
            <li className='list-group-item' key={ company.id }>
              <h3>{ company.name }</h3>
              { company.description }
              <button onClick={()=> deleteCompany(company)} className='btn btn-danger' style={{ float: 'right'}}>Delete</button>
            </li>
          );
        })
      }
    </ul>
  );
} 
