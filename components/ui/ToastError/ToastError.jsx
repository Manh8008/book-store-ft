'use client'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Bounce } from 'react-toastify'
import { useEffect } from 'react'
import './toast-error.module.scss'

export const ToastError = ({ errorMessage }) => {
    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                draggable: true,
                theme: 'colored',
                transition: Bounce,
                style: {
                    background: '#FF4B4B',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    fontSize: '13px',
                    fontWeight: '500',
                    padding: '8px 12px'
                },
                progressStyle: {
                    background: 'rgba(255,255,255,0.7)'
                },
                icon: '❌'
            })
        }
    }, [errorMessage])

    return (
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            className="custom-toast-container"
            toastClassName="custom-toast"
            bodyClassName="custom-toast-body"
            style={{
                width: 'auto',
                maxWidth: '300px'
            }}
        />
    )
}
