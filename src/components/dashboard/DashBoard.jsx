import PropTypes from 'prop-types'

import NoProjects from './NoProject.jsx'
import AddProject from './AddProject.jsx'
import Project from './Project.jsx'

const DashBoard = ({
    showFormProject,
    creatingProject,
    addNewProject,
    currentProject,
    showCurrentProject,
    showNoProject,
    tasks,
    addTask,
    deleteProject,
    deleteTask,
}) => {
    return (
        <main className="w-full my-8 flex justify-center px-12 mt-25 overflow-auto">
            {currentProject ? <Project
                addTask={addTask}
                tasks={tasks}
                project={currentProject}
                deleteProject={deleteProject}
                deleteTask={deleteTask}
            /> : (!creatingProject ?
                <NoProjects showFormProject={showFormProject}/> :
                <AddProject
                    showFormProject={showFormProject}
                    addNewProject={addNewProject}
                    showCurrentProject={showCurrentProject}
                    showNoProject={showNoProject}
                />)
            }
        </main>
    )
}

DashBoard.propTypes = {
    showFormProject: PropTypes.func.isRequired,
    creatingProject: PropTypes.bool.isRequired,
    addNewProject: PropTypes.func.isRequired,
    showCurrentProject: PropTypes.func.isRequired,
    currentProject: PropTypes.exact({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }),
    showNoProject: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        projectId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
    addTask: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
}

export default DashBoard
