import { data } from '../data'
import { v4 } from 'uuid'
export default function Table({ filter, check }) {
  const checkData = data.filter(obj => {
    if (check) {
      return obj.stocked ? obj.stocked : null
    }
    return obj
  })
  const filteredData = checkData.filter(obj => {
    if (filter) {
      return obj.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1  ? obj : null
    }
    return obj
  })
  const fruit = filteredData.map(obj => {
    if (obj.category === 'Fruits') {
      return <tr style={{ color: obj.stocked ? null : '#E5594F' }} key={v4()}>
                <td key={v4()}>{obj.name}</td>
                <td key={v4()}>{obj.price}</td>
            </tr>
    }
    return null
  })
  const vegetables = filteredData.map(obj => {
    if (obj.category === 'Vegetables') {
      return <tr className={obj.stocked ? null : 'stocked'} key={v4()}>
                <td key={v4()}>{obj.name}</td>
                <td key={v4()}>{obj.price}</td>
            </tr>
    }
    return null
  })
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