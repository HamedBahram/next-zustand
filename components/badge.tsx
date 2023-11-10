import { cn } from '@/lib/utils'

export default function Badge({ status = 'TODO' }: { status: string }) {
  return (
    <>
      <span
        className={cn(
          'ml-auto inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
          status === 'To Do' && 'bg-gray-50 text-gray-600 ring-gray-500/10',
          status === 'In Progress' &&
            'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
          status === 'Done' && 'bg-green-50 text-green-700 ring-green-600/20'
        )}
      >
        {status}
      </span>
    </>
  )
}
