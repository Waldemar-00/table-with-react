import {fruit, vegetables} from '../prodacts'
export default function Table() {
  return (
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
            <th colSpan='2'>Fruit</th>
          </tr>
          {fruit}
          <tr>
            <th colSpan='2'>Vegetables</th>
          </tr>
          {vegetables}
        </tbody>
      </table>
    </main>
  )
}