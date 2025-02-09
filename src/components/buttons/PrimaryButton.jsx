import PropTypes from 'prop-types'

const PrimaryButton = ({ children, ...props }) => {

    return (
        <button
            className="px-7 py-3 bg-stone-800 rounded text-lg text-gray-200 font-medium cursor-pointer transition duration-100 ease-in hover:bg-stone-600 hover:text-gray-200"
            {...props}
        >
            {children}
        </button>
    )
}

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrimaryButton
