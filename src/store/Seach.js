export default function Seach() {
  return (
    <section className='FindOut'>
      <input type="text" name='seach' placeholder='Seach...' className='seach' />
      <input type="checkbox" name='check' id='check' />
      <label htmlFor="check" className='labelCheck'>
        Only stock products
      </label>
    </section>
  )
}