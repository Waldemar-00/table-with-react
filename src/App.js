import logo from './table-of-contents-svgrepo-com.svg'
import './App.css'
import {data} from './data'

function App() {
  const fruit = data.map(obj => {
    if (obj.category === 'Fruits') {
      return <tr style={{ color: obj.stocked ? null : '#E5594F' }}>
              <td>{obj.name}</td>
              <td>{obj.price}</td>
            </tr>
    }
    return null
  })
  const vegetables = data.map(obj => {
    if (obj.category === 'Vegetables') {
      return <tr className={obj.stocked ? null : 'stocked'}>
              <td>{obj.name}</td>
              <td>{obj.price}</td>
            </tr>
    }
    return null
  })
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'><img src={logo} className="App-logo" alt="logo" /></div>
        <h1>Table with JSON data</h1>
      </header>
      <main className='Store'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colspan='2'>Fruit</th>
            </tr>
              {fruit}
            <tr>
              <th colspan='2'>Vegetables</th>
            </tr>
              {vegetables}
          </tbody>
        </table>
      </main>
    </div>
  ) 
}

export default App 
