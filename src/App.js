import logo from './table-of-contents-svgrepo-com.svg'
import './App.css'
// import {data} from './data'

function App() {
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
            <tr>
              <td>Apple</td>
              <td>1$</td>
            </tr>
            <tr>
              <td>Dragonfriut</td>
              <td>1$</td>
            </tr>
            <tr>
              <td>Passionfruit</td>
              <td>2$</td>
            </tr>
            <tr>
              <th colspan='2'>Vegetables</th>
            </tr>
            <tr>
              <td>Spinach</td>
              <td>2$</td>
            </tr>
            <tr>
              <td>Pumpkin</td>
              <td>4$</td>
            </tr>
            <tr>
              <td>Peas</td>
              <td>2$</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  ) 
}

export default App 
