import React, { createContext, useState, useContext } from 'react';

const NameContext = createContext()

function A() {
  const [name, setName] = useState('Billy Shakespeare')
  
  return (
    <NameContext.Provider value={name}>
      <B />
    </NameContext.Provider>
  )
}

function B() {
  return (
    <section className="b">
      <C />
    </section>
  )
}

function C() {
  return (
    <section className="c">
      <D />
    </section>
  )
}

function D() {
  const name = useContext(NameContext);

  return (
    <button>{name}</button>
  )
}

export default A