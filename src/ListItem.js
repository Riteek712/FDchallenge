import React from 'react'

const ListItem = ({item}) => {
  return (
    <li>
        {console.log(item)}
        {JSON.stringify(item)}
    </li>
  )
}

export default ListItem