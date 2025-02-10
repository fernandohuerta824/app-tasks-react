import { forwardRef, useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import PrimaryButton from '../buttons/PrimaryButton.jsx'

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
    const dialogRef = useRef(null)

    useImperativeHandle(ref, () => ({
        open: () => dialogRef.current.showModal(),
        close: () => dialogRef.current.close(),
    }))

    return createPortal(
        <dialog
            ref={dialogRef}
            className='backdrop:bg-stone-900/90 shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md px-8 py-4 w-[26rem]'
            onClick={e => {
                if(e.target === dialogRef.current) {
                    dialogRef.current.close()
                }
            }}
        >
            <div>
                {children}
                <form method='dialog'>
                    <PrimaryButton onClick={() => dialogRef.current.close()}>{buttonCaption}</PrimaryButton>
                </form>
            </div>
        </dialog>,
        document.getElementById('modal-root'),
    )
})

Modal.displayName = 'Modal'

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    buttonCaption: PropTypes.string.isRequired,
}

export default Modal

