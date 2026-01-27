import React from 'react'
import Section1 from './components/Section1/Section1'
import { Section2 } from './components/Section2/Section2'

const App = () => {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      intro: "Prime customers, that have access to bank credit and are satisfied with the current product ",
      tag: "Satisfied",
      color: '#2563eb'
    },
    {
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      intro: "Prime customers, that have access to bank credit but are not satisfied with the current product ",
      tag: "Underserved",
      color: '#2563eb'
    },
    {
      img: "https://images.unsplash.com/photo-1601342630314-8427c38bf5e6?q=80&w=691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
      intro: "Customers from rural areas that have no access to bank credit ",
      tag: "Underbanked",
      color: '#16a34a'
    },
    
  ]
  return (
    <div>
      <Section1 cards={cards}/>
      <Section2 />
    </div>
  )
}

export default App