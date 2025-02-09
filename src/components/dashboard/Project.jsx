import PropTypes from 'prop-types'
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import SecundaryButton from '../buttons/SecundaryButton.jsx'

/*
    🔹 Para que un hijo haga scroll cuando excede la pantalla:
    1️⃣ El padre debe tener `flex flex-col overflow-hidden` → Para que el hijo pueda crecer sin romper el layout.
    2️⃣ El hijo que crece necesita `flex-grow overflow-y-auto` → Para expandirse y hacer scroll solo cuando sea necesario.

*/

const Project = ({ project, tasks, addTask, deleteProject, deleteTask }) => {
    const taskRef = useRef(null)

    const date = new Date(project.date)
    const month = new Intl.DateTimeFormat('en-us', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    }).format(date)

    const currentTasks = tasks.filter(t => t.projectId === project.id)

    return (
        <article className='w-full md:w-9/10 lg:w-8/10 xl:w-6/10 flex flex-col'>
            <header className='flex justify-between items-center mb-5'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-4xl font-bold text-stone-800'>{project.title}</h2>
                    <time className='text-md text-gray-700 font-medium' dateTime={project.date}>{`${month}`}</time>
                </div>
                <SecundaryButton onClick={() => deleteProject(project.id)}>Delete</SecundaryButton>
            </header>

            <p className='whitespace-pre-wrap text-lg mb-8'>{project.description}</p>

            <hr className='text-gray-400 block mb-8'/>

            <h3 className='text-3xl font-medium mb-4'>Tasks</h3>

            <form className='flex gap-4 mb-10' onSubmit={e => {
                e.preventDefault()
                const task = {
                    id: uuidv4(),
                    projectId: project.id,
                    title: taskRef.current.value,
                }
                if(!task.title) {
                    return
                }

                addTask(task)
                taskRef.current.value = ''
            }}>
                <input className='bg-gray-200 py-1 px-2' type="text" ref={taskRef}/>
                <input className='text-stone-900 text-lg font-medium cursor-pointer' type="submit" value='Add Tasks'/>
            </form>

            <div className='bg-gray-100'>
                {currentTasks.length > 0 ?
                    currentTasks.map(t => (
                        <div key={t.id} className='flex justify-between px-4 py-2 transition-all duration-300 ease-in hover:bg-gray-300'>
                            <p className='text-lg font-medium'>{t.title}</p>
                            <button
                                className='text-lg font-medium hover:text-red-500 cursor-pointer'
                                onClick={() => deleteTask(t.id)}
                            >
                                Clear
                            </button>
                        </div>
                    ))
                    : <p className='text-lg font-medium px-4 py-2'>This project does not have any tasks yet</p>
                }
            </div>
        </article>
    )
}

Project.propTypes = {
    project: PropTypes.exact({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }),
    tasks: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        projectId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
    addTask: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
}

export default Project
