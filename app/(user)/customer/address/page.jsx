'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AddressForm } from '@/components/address/address-form'
import '@/public/styles/profile.scss'
import { AccountSidebar } from '@/components/account-sidebar'

export default function address() {
    return (
        <main style={{ background: '#F5F5FA' }}>
            <div className="container">
                <AccountSidebar />

                <AddressForm />
            </div>
        </main>
    )
}
