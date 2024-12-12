'use client'
import { useEffect } from 'react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const MainLayout = ({ children }) => {
    useEffect(() => {
        const scriptSrc =
            'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1'

        if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
            const script = document.createElement('script')
            script.src = scriptSrc
            script.async = true
            script.onload = () => {
                console.log('Dialogflow script loaded successfully.')
            }
            document.body.appendChild(script)
        } else {
            console.log('Dialogflow script already exists.')
        }
    }, [])

    return (
        <div style={{ width: '100%' }}>
            <Header />
            <div
                style={{
                    width: '100%',
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 1000
                }}
            >
                <df-messenger
                    intent="WELCOME"
                    chat-title="book-shop-ai"
                    agent-id="79f308db-cd43-4092-89b9-b5bb79b12396"
                    language-code="en"
                ></df-messenger>
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
