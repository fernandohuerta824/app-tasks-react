import PropTypes from 'prop-types'
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import PrimaryButton from '../buttons/PrimaryButton.jsx'
import SecundaryButton from '../buttons/SecundaryButton.jsx'
import Input from './Input.jsx'

const AddProject = ({
    showFormProject,
    addNewProject,
    showCurrentProject,
    showNoProject,
}) => {
    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const dateRef = useRef(null)

    return (
        <form className='w-full md:w-9/10 lg:w-7/10 xl:w-4/10'>
            <div className='flex flex-row-reverse gap-1'>
                <PrimaryButton
                    onClick={e => {
                        e.preventDefault()
                        showFormProject()
                        const project = {
                            id: uuidv4(),
                            title: titleRef.current.value,
                            description: descriptionRef.current.value,
                            date: dateRef.current.value,
                        }
                        if(!project.title || !project.description || !project.date) {
                            return
                        }

                        addNewProject(project)
                        showCurrentProject(project)
                    }}
                >
                    Save
                </PrimaryButton>
                <SecundaryButton
                    onClick={e => {
                        e.preventDefault()
                        showNoProject()
                    }}
                >
                    Cancel
                </SecundaryButton>
            </div>

            <Input
                ref={titleRef}
                label={'title'}
                type='text'
            />

            <Input
                ref={descriptionRef}
                label={'description'}
                textArea
            />

            <Input
                ref={dateRef}
                label={'due date'}
                type='date'
            />
        </form>
    )
}

AddProject.propTypes = {
    showFormProject: PropTypes.func.isRequired,
    addNewProject: PropTypes.func.isRequired,
    showCurrentProject: PropTypes.func.isRequired,
    showNoProject: PropTypes.func.isRequired,
}

export default AddProject
