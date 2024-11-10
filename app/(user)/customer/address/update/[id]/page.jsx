import { AccountSidebar } from '@/components/account-sidebar'
import { UpdateAddressForm } from '@/components/address/update-address-form'

export default function UpdateAddress({ params }) {
    return (
        <main style={{ background: '#F5F5FA' }}>
            <div className="container">
                <AccountSidebar />
                <UpdateAddressForm addressId={params.id} />
            </div>
        </main>
    )
}
