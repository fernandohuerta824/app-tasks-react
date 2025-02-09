import { useState } from 'react'

import DashBoard from './components/dashboard/DashBoard.jsx'
import SideBar from './components/SideBar.jsx'

const App = () => {
    const [creatingProject, setCreatingProject] = useState(false)
    const [projects, setProjects] = useState([])
    const [currentProject, setCurrentProject] = useState(null)
    const [tasks, setTasks] = useState([])
    const addTask = task => setTasks(prevTasks => [...prevTasks, task])

    const showFormProject = () => {
        setCreatingProject(true)
        setCurrentProject(null)
    }

    const showNoProject = () => {
        setCreatingProject(false)
        setCurrentProject(null)
    }

    const addNewProject = project => setProjects(oldProjects => [...oldProjects, project])
    const showCurrentProject = project => {
        setCurrentProject(project)
        setCreatingProject(false)
    }

    const deleteTask = taskId => setTasks(prevTasks => {
        const newTasks = prevTasks.filter(t => t.id !== taskId)

        return newTasks
    })

    const deleteProject = projectId => {
        setProjects(prevProjects => {
            const newProjects = prevProjects.filter(p => p.id !== projectId)

            return newProjects
        })
        setTasks(prevTasks => {
            const newTasks = prevTasks.filter(t => t.projectId !== projectId)

            return newTasks
        })
        showNoProject()
    }

    return (
        <div className='flex h-dvh overflow-hidden w-full'>
            <SideBar
                showFormProject={showFormProject}
                projects={projects}
                currentProject={currentProject}
                showCurrentProject={showCurrentProject}
            />
            <DashBoard
                showFormProject={showFormProject}
                creatingProject={creatingProject}
                addNewProject={addNewProject}
                currentProject={currentProject}
                showCurrentProject={showCurrentProject}
                showNoProject={showNoProject}
                addTask={addTask}
                tasks={tasks}
                deleteProject={deleteProject}
                deleteTask={deleteTask}
            />
        </div>
    )
}

export default App
