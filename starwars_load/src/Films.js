import React from 'react';

export default ({ films })=> {
  return (
    <ul className='list-group'>
      {
        films.map( film => {
          return (
            <li className='list-group-item list-group-item-success' key={ film.title }>{ film.title }</li>
          );
        })
      }
    </ul>
  );
}
