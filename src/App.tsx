import './App.css';

import './App.css';
import { ChangeEvent, FC, useContext, useMemo, useState } from 'react'
import ListRecipes from './components/ListRecipes';
import Title from './components/Title';
import AuthContext, { AuthProvider } from './contexts/AuthContext';
import NavBar from './components/NavBar';

const Errors = ({isError} : {isError: boolean}) => {
  console.log("renderizou erro")

  if (isError) {
    return (
      <p>Erradooo</p>      
    )
  }else{
    return <></>
  }
}

const App: FC = () => {
  const [recipes, setRecipes] = useState<string[]>([
    'Pão com Ovo',
    'Bolo de Chocolate',
    'Manga com Leite'  
  ]);
  const [isError, setError] = useState<boolean>(false)
  const [title, setTitle] = useState<string>("")

  const addItem = () => {
    const newItem = "novo" + Math.random()
    
    // const newRecipes = recipes    
    // newRecipes.push(newItem)
    // setRecipes(newRecipes)

    setRecipes([...recipes, newItem])
  }

  const componentError = useMemo(() => <Errors isError={isError} />, [isError]);

  const handleChange = (event: any) => {
    const value = event.target.value
    if (value.length < 10){
      setError(true)
    }else{
      setError(false)
    }
    setTitle(value)
  }

  

  return (    
      <div className="App">
          <AuthProvider>
            <NavBar />
            <Title value="Receitas de Vó" />
            <ListRecipes data={recipes} />
            <input type="text" value={title} onChange={handleChange} />
            <button onClick={addItem}>Adicionar</button>
            {componentError}
            
            {/* If you comment the line above: {componentError} and uncomment the line below <Erros .... />
            So the component <Errors> will render many times. See the web browser console to get the difference with and without useMemo */}

            {/* <Errors isError={isError} /> */}
          </AuthProvider>
      </div>
  );
}

export default App;