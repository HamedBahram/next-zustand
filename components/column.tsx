import Task from './task'

export default function Column({ status }: { status: string }) {
  return (
    <div className='h-full w-56 flex-1 rounded-xl bg-gray-700/50 p-4 pt-8'>
      <h2 className='text-center font-serif text-2xl font-semibold'>
        {status}
      </h2>
      <div className='mt-8'>
        <Task title='Task 1' description='Some description' status={status} />
      </div>
    </div>
  )
}
