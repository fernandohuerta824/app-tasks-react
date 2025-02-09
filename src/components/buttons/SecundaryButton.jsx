import PropTypes from 'prop-types'

const SecundaryButton = ({ children, ...props }) => {

    return (
        <button
            className="px-7 py-3 bg-transparent rounded text-lg text-stone-800 font-medium cursor-pointer transition duration-100 ease-in"
            {...props}
        >
            {children}
        </button>
    )
}

SecundaryButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default SecundaryButton
