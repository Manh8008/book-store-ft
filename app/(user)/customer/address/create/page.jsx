import '@/public/styles/profile.scss'
import { CreateAddressForm } from '@/components/address/create-address-form'
import { AccountSidebar } from '@/components/account-sidebar'

export default function CreateAddress({ params }) {
    return (
        <main style={{ background: '#F5F5FA' }}>
            <div className="container">
                <AccountSidebar />
                <CreateAddressForm />
            </div>
        </main>
    )
}
