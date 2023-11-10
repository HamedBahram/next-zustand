'use client'

import { Status, useTaskStore } from '@/lib/store'
import Task from './task'
import { useMemo } from 'react'

export default function Column({
  title,
  status
}: {
  title: string
  status: Status
}) {
  const tasks = useTaskStore(state => state.tasks)
  const filteredTasks = useMemo(
    () => tasks.filter(task => task.status === status),
    [tasks]
  )

  const updateTask = useTaskStore(state => state.updateTask)
  const dragTask = useTaskStore(state => state.dragTask)

  const draggedTask = useTaskStore(state => state.draggedTask)

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!draggedTask) return
    updateTask(draggedTask, status)
    dragTask(null)
  }

  return (
    <div
      className='h-full w-56 flex-1 rounded-xl bg-gray-700/50 p-4 pt-8'
      onDrop={handleDrop}
      onDragOver={e => e.preventDefault()}
    >
      <h2 className='text-center font-serif text-2xl font-semibold'>{title}</h2>
      <div className='mt-8 flex flex-col gap-4'>
        {filteredTasks.map(task => (
          <Task key={task.id} {...task} />
        ))}

        {filteredTasks.length === 0 && status === 'TODO' && (
          <div className='text-center text-sm text-gray-500'>
            <p>Create a new task</p>
          </div>
        )}

        {tasks.length && filteredTasks.length === 0 && status !== 'TODO' ? (
          <div className='text-center text-sm text-gray-500'>
            <p>Drag your tasks here</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
