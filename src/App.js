import React, { useState } from 'react'
import data from './data'
import List from './List'


const App = () => {

const [people,setPeople] = useState(data)


const firstText = () => {
  if(people.length === 0) {
    return(
      <h3>Görüntülenecek Tebrik Yok</h3>
    )
  }else{
    return <h3>{people.length} Doğum Günü Tebriği</h3>
  }
}


  return (
    <main>
    <section className='container'>
    {firstText()}
    <List />
    
  <button>Tebrikleri Sil</button>
{ people.length === 0 &&  <button>Tebrikleri Yenile</button>}
    </section>
    </main>
  )
}

export default App
