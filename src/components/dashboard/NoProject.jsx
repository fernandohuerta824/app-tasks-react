import PropTypes from 'prop-types'

import noProjectImage from '../../assets/no-projects.png'
import PrimaryButton from '../buttons/PrimaryButton.jsx'

const NoProjects = ({ showFormProject }) => {
    return (
        <div className='h-full flex flex-col justify-center items-center gap-4'>
            <img className='w-28 h-28 object-contain' src={noProjectImage} alt="Image" />
            <h2 className='text-stone-800 text-2xl font-bold'>No project Selected</h2>
            <p className='text-lg text-gray-400 mb-3'>Select a project or get started with a new one</p>
            <PrimaryButton
                onClick={showFormProject}
            >
                Create new project
            </PrimaryButton>
        </div>
    )
}

NoProjects.propTypes = {
    showFormProject: PropTypes.func.isRequired,
}

export default NoProjects
