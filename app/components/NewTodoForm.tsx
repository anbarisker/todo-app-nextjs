'use client'

import { useRef } from "react"
import { createTodoAction } from "./_actions"

const NewTodoForm = () => {
    const formRef = useRef<HTMLFormElement>(null)
     async function action(data: FormData) {
        const title = data.get('title')
        console.log("title: ", title);
        if(!title || typeof title !== 'string') return

        // call a server action to create todo
        await createTodoAction(title)
        // reset the form
        formRef.current?.reset()
    }

  return (
    <form ref={formRef} action={action}>
        <h2>Create a new Todo</h2>
        <input 
        type="text"
        name="title" 
        className="rounded-md border border-slate-400 px-2 py-0.5"
        />
        <button type="submit" 
        className="ml-2 rounded bg-slate-700 px-2 py-1 text-sm text-white disabled:bg-opacity-50">Add Todo</button>
    </form>
  )
}

export default NewTodoForm