'use client'
import { useEffect } from 'react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const MainLayout = ({ children }) => {
    useEffect(() => {
        const scriptSrc =
            'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1'

        // Kiểm tra và chỉ thêm script nếu chưa có
        if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
            const script = document.createElement('script')
            script.src = scriptSrc
            script.async = true
            document.body.appendChild(script)
        }

        return () => {
            // Dọn dẹp khi unmount
            const dfMessenger = document.querySelector('df-messenger')
            if (dfMessenger) {
                dfMessenger.remove()
            }
        }
    }, [])

    return (
        <>
            <Header />
            {/* Vùng hiển thị chatbot */}
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
