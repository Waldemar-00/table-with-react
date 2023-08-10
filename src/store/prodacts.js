import {data} from './data'
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

export {fruit, vegetables}