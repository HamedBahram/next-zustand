import React from 'react'
import Badge from './badge'

export default function Task({
  title,
  description,
  status
}: {
  title: string
  description: string
  status: string
}) {
  return (
    <div className='rounded-lg bg-white px-3 py-3 text-gray-900'>
      <h3 className='font-medium text-gray-600'>{title}</h3>
      <p className='text-sm text-gray-400'>{description}</p>

      <div className='mt-4 flex'>
        <Badge status={status} />
      </div>
    </div>
  )
}
