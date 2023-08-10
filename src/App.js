import logo from './table-of-contents-svgrepo-com.svg'
import './App.css'
import {fruit, vegetables} from './store/prodacts'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'><img src={logo} className="App-logo" alt="logo" /></div>
        <h1>Table with JSON data</h1>
      </header>
      <section className='FindOut'>
        <input type="text" name='seach' placeholder='Seach...' className='seach' />
        <input type="checkbox" name='check' id='check' />
        <label htmlFor="check" className='labelCheck'>
          Only stock products
        </label>
      </section>
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
