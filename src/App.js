import logo from './table-of-contents-svgrepo-com.svg'
import './App.css'
import Seach from './store/Seach'
import {fruit, vegetables} from './store/prodacts'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'><img src={logo} className="App-logo" alt="logo" /></div>
        <h1>Table with JSON data</h1>
      </header>
      <Seach/>
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
