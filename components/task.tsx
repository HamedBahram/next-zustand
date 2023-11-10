import { Status, useTaskStore } from '@/lib/store'
import Badge from './badge'

export default function Task({
  id,
  title,
  description,
  status
}: {
  id: string
  title: string
  description?: string
  status: Status
}) {
  const dragTask = useTaskStore(state => state.dragTask)

  return (
    <div
      className='cursor-move rounded-lg bg-white px-3 py-3 text-gray-900'
      onDragStart={() => dragTask(id)}
      draggable
    >
      <h3 className='font-medium text-gray-600'>{title}</h3>
      <p className='text-sm text-gray-400'>{description}</p>

      <div className='mt-4 flex'>
        <Badge status={status} />
      </div>
    </div>
  )
}
