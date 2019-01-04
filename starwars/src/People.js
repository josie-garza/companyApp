import React from 'react';

export default ({ people, setFavorite, favorites })=> {
  return (
    <ul className='list-group'>
      {
        people.map( person => {
          return (
            <li
              onClick={()=> setFavorite(person)}
              className={favorites[person.name] ? 'list-group-item list-group-item-success' : 'list-group-item'}
              key={ person.name }>{ person.name }</li>
          );
        })
      }
    </ul>
  );
}
