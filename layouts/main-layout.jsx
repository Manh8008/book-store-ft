import { useEffect } from 'react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const MainLayout = ({ children }) => {
    useEffect(() => {
        // Đảm bảo script chỉ chạy ở phía client (browser)
        const script = document.createElement('script')
        script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1'
        script.async = true
        document.body.appendChild(script)

        // Clean up when component unmounts
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <>
            <Header />
            {/* Add the chatbot */}
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
        </>
    )
}

export default MainLayout
