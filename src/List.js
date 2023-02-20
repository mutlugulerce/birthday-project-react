import React from 'react'

const List = ({people}) => {
  return (
    <div>
      {people.map((person) => {
        const {id,name,image,age} = person

        return(
          <article key={id} className='person'>
          <img src={image} alt={name}/>

          <div>
            <h4>{name}</h4>
            <p>{age} Yaşında</p>
          </div>

           <button className='remove-btn'> Tebriği Sil </button>

          </article>  
        )
      })}
    </div>
  )
}

export default List
