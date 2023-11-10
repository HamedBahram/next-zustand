import Columns from '@/components/columns'

export default function Home() {
  return (
    <section className='flex min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 py-24 text-white'>
      <div className='mx-auto w-full max-w-7xl px-6'>
        <Columns />
      </div>
    </section>
  )
}
