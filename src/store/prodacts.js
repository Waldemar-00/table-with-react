import { data } from './data'
import {v4} from 'uuid'
const fruit = data.map(obj => {
  if (obj.category === 'Fruits') {
    return <tr style={{ color: obj.stocked ? null : '#E5594F' }} key={v4()}>
              <td key={v4()}>{obj.name}</td>
              <td key={v4()}>{obj.price}</td>
          </tr>
  }
  return null
})
const vegetables = data.map(obj => {
  if (obj.category === 'Vegetables') {
    return <tr className={obj.stocked ? null : 'stocked'} key={v4()}>
              <td key={v4()}>{obj.name}</td>
              <td key={v4()}>{obj.price}</td>
          </tr>
  }
  return null
})

export {fruit, vegetables}