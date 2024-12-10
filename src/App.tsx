import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //const name = "张飞";
  const [user, setName] = useState({name:"刘备",age:55});
  // const handleUpdate = () => {
  //   setName("张飞");
  // }
  const titleStyle = {color: "red", fontSize: 30};
  const title1 = <span style={titleStyle}>hello world</span>
  //const list = ['赵云','关羽','刘备'];
  const [list, setList] = useState(['赵云','关羽','刘备']);
  const updateList = () => {
    setList([...list, "诸葛亮"])
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {title1}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        {user.name}
      </p>
      {list.map(item => {
        return <span key={item} style={{marginRight:10}}>{item}</span>;
      })}
      <input value={user.name} onChange={() => {setName({...user, name:"赵云"})}}/>
      <div>
        <button onClick={updateList}>修改数组</button>
      </div>
    </>
  )
}

export default App
