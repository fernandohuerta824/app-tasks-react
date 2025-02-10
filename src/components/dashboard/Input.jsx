import PropTypes from 'prop-types'

const Input = ({ ref, label, textArea, ...props }) => {
    const htmlFor = label.toLowerCase()
    const inputStyles = 'w-full bg-stone-300 p-2 border-b-2 border-b-stone-400 focus:outline-0 focus:border-b-2 focus:border-b-stone-950 font-medium text-stone-800 text-lg rounded-md'

    return (
        <div className='flex flex-col w-full gap-1'>
            <label
                className='text-gray-500 font-bold text-lg'
                htmlFor={htmlFor}
            >
                {label.toUpperCase()}
            </label>
            {textArea ?
                <textarea ref={ref}
                    className={inputStyles}
                    id={htmlFor}
                    rows={9}>
                </textarea> :
                <input
                    ref={ref}
                    className={inputStyles}
                    id={htmlFor}
                    {...props}
                />}
        </div>
    )
}

Input.propTypes = {
    ref: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
    textArea: PropTypes.bool,
}

export default Input
