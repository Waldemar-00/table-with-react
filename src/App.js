import './App.css'
import Header from './store/components/Header'
import Seach from './store/components/Seach'
import Table from './store/components/Table'
import {useState} from 'react'
function App() {
  const [filter, setFilter] = useState('')
  const [check, setChek] = useState(false)
  return (
    <div className="App">
      <Header/>
      <Seach
        filter={filter}
        check={check}
        setFilter={setFilter}
        setChek={setChek}
      />
      <Table filter={filter} check={check} />
    </div>
  ) 
}
export default App 
