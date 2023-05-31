'use client'
import { Todo } from "@prisma/client"
import { useTransition } from 'react'
import { updateTodoAction } from "./_actions"

type TodoItemProps = {
  todo: Todo
}

export const TodoItem = ({todo}: TodoItemProps) => {
  const [isPending, startTransition] = useTransition()
  return (
    <li className='flex items-center gap-3'>
       <input
        id={todo.id as unknown as string}
        type='checkbox'
        className='peer h-4 w-4 cursor-pointer rounded border-gray-300 text-slate-600 focus:ring-slate-600'
        defaultChecked={todo.isCompleted}
        onChange={e =>
          startTransition(() => updateTodoAction(todo.id, e.target.checked))
        }
      />
      <label htmlFor={todo.id as unknown as string}
        className='cursor-pointer peer-checked:text-slate-500 peer-checked:line-through'
      >
        {todo.title}
      </label>
      <span className='ml-auto text-sm text-slate-500 peer-checked:line-through'>
        {todo.updatedAt.toUTCString()}
      </span>
    </li>
  )
}

export default TodoItem
