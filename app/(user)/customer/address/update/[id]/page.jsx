
'use client'
import { UpdateAddressForm } from '@/components/address/update-address-form'


export default function UpdateAddressPage({ params }) {
    return <UpdateAddressForm addressId={params.id} />
}
