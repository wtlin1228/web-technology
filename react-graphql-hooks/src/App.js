import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_CATEGORY_LIST = gql`
  query GetCategoryList {
    categories {
      id
      name
    }
  }
`

const CREATE_CATEGORY = gql`
  mutation CreateCategory( 
    $name: String!
  ) {
    createCategory(input: {
      name: $name
    }) {
      id
      name
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_CATEGORY_LIST);
  const [name, setName] = useState('');
  const [createCategory] = useMutation(CREATE_CATEGORY);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  function handleSubmit(e) {
    e.preventDefault();

    createCategory({ 
      variables: { name },
      refetchQueries: ['GetCategoryList']
    });
  }

  return (
    <div>
      <ul className='category-list'>
        {
          data.categories.map(category => {
            return (
              <li>{category.name}</li>
            );
          })
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
}

export default App;
