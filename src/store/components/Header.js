import logo from '../../table-of-contents-svgrepo-com.svg'
export default function Header() {
  return (
    <header className="App-header">
      <div className='logo'><img src={logo} className="App-logo" alt="logo" /></div>
      <h1>Table with JSON data</h1>
    </header>
  )
}