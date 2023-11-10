import Column from './column'

export default function Columns() {
  return (
    <section className='flex h-full gap-6 lg:gap-12'>
      <Column status='To Do' />
      <Column status='In Progress' />
      <Column status='Done' />
    </section>
  )
}
