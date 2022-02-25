import React, { FC, useCallback } from 'react'

let objects: any[] = []

function onlyUnique(value: any, index: number, self: any[]) { //it removes duplicate items of an array "self"
  return self.indexOf(value) === index;
}

const ListRecipes: FC<{ data: string[] }> = ({ data }) => {
  console.log("renderizou") 

  const handleClick = useCallback(() => {
    console.log("clicou")    
  }, [])

  objects.push(handleClick) //it registers the function object
  
  console.log(objects.filter(onlyUnique)) //it prints unique function objects. Remove useCallback in order to see the difference of the result

  return (
    <ul>
      {data.map(item => <li key={item} onClick={handleClick}>{item}</li>)}
    </ul>
  )
}

export default React.memo(ListRecipes)