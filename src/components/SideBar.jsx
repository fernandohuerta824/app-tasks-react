import PropTypes from 'prop-types'

import PrimaryButton from './buttons/PrimaryButton.jsx'

const SideBar = ({
    showFormProject,
    projects,
    showCurrentProject,
    currentProject,
}) => {
    return (
        <aside className="bg-stone-900 h-full rounded-tr-2xl py-16 px-10 w-1/2 xl:w-1/4 mt-10">
            <h1 className="text-gray-50 text-3xl font-black tracking-wide mb-12">Your projects</h1>
            <PrimaryButton
                onClick={showFormProject}
            >
                + Add project
            </PrimaryButton>

            <div className='mt-10 flex flex-col gap-2'>
                {projects.map(p => {
                    let paragraphClasses = 'text-xl p-2 m-0 cursor-pointer font-medium rounded transition duration-200 ease-in-out truncate'

                    if(currentProject?.id === p.id) {
                        paragraphClasses += ' bg-stone-700 text-neutral-100'
                    } else {
                        paragraphClasses += ' text-neutral-400 hover:bg-stone-700 hover:text-neutral-100 '
                    }

                    return (
                        <p
                            className= {paragraphClasses}
                            key={p.id}
                            onClick={() => {
                                showCurrentProject(p)
                            }}
                        >
                            {p.title}
                        </p>
                    )
                })}
            </div>
        </aside>
    )
}

SideBar.propTypes = {
    showFormProject: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    })).isRequired,
    showCurrentProject: PropTypes.func.isRequired,
    currentProject: PropTypes.exact({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }),
}

export default SideBar
