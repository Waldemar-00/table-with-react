export default function Seach({ filter, setFilter, check, setCheck }) {
  function changeTable(e) {
    setFilter(e.target.value)
    console.log(e.target.value)
  }
  function changeCheck() {
    setCheck(check => !check)
  }
  return (
    <section className='FindOut'>
      <input type="text" name='seach' placeholder='Seach...' className='seach' onChange={(e) => changeTable(e)} />
      <input type="checkbox" name='check' id='check' onChange={changeCheck} checked={check} />
      <label htmlFor="check" className='labelCheck'>
        Only stock products
      </label>
    </section>
  )
}