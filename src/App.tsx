import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  // 启动命令: yarn dev
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

  const updateCount = () => {
    setCount(count => count + 1)
  }
  console.log("render")

  useEffect(() => {
    document.title = "我改了标题";
    setCount(count + 1)
  },[])

  useEffect(() => {
    setTotal(6 * count)
  }, [count])

  // 实时获取浏览器宽高
  const [size, reSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  const handleResize = () => {
    reSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  // const total1 = () => {
  //   console.log('total1')
  //   const list = [1, 3, 5, 7, 9]
  //   return list.reduce((prev, current) => prev + current, 0)
  // }

  const total2 = useMemo(() => {
    console.log('total2')
    const list = [1, 3, 5, 7, 9]
    return list.reduce((prev, current) => prev + current, 0)
  }, [])

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
        <button onClick={updateCount}>
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
        return <span key={item} style={{marginRight:10,color:"red"}}>{item}</span>;
      })}
      <input value={user.name} onChange={() => {setName({...user, name:"赵云123456"})}}/>
      <div>
        <button onClick={updateList}>修改数组</button>
        <p>{total}</p>
        <p>window width: {size.width}, window height: {size.height}</p>
      </div>
      <p>useMemo的使用</p>
      <p>{total2}</p>
    </>
  )
}

export default App
