import MainLayout from '@/layouts/main-layout'
import { AccountSidebar } from '@/components/account-sidebar'
import classNames from 'classnames/bind'
import styles from './customer.module.scss'

const cx = classNames.bind(styles)

export default function CustomerLayout({ children }) {
    return (
        <MainLayout>
            <main style={{ background: '#F5F5FA' }}>
                <div className={cx('container')}>
                    <AccountSidebar />
                    {children}
                </div>
            </main>
        </MainLayout>
    )
}
