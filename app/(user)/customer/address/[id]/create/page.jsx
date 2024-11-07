'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import '@/public/styles/profile.scss'
import addressApiRequest from '@/apiRequests/address'
import { CreateAddressForm } from '@/components/address/create-address-form'

const Menu = () => {
    return (
        <div className="menu">
            <Link className="active" href="#">
                <i className="fas fa-user"></i> Thông tin tài khoản
            </Link>
            <Link href="#">
                <i className="fas fa-id-card"></i> Hồ sơ cá nhân
            </Link>
            <Link href="#">
                <i className="fas fa-map-marker-alt"></i> Số địa chỉ
            </Link>
            <Link href="/auth/change-password">
                <i className="fas fa-key"></i> Đổi mật khẩu
            </Link>
            <Link href="#">
                <i className="fas fa-file-invoice"></i> Thông tin xuất hóa đơn GTGT
            </Link>
            <Link href="#">
                <i className="fas fa-gift"></i> Ưu đãi thành viên
            </Link>
            <Link href="#">
                <i className="fas fa-box"></i> Đơn hàng của tôi
            </Link>
            <Link href="#">
                <i className="fas fa-wallet"></i> Ví voucher{' '}
                <span style={{ color: 'red' }}>14</span>
            </Link>
            <Link href="#">
                <i className="fas fa-coins"></i> Tài Khoản F-Point / Freeship
            </Link>
        </div>
    )
}

export default function CreateAddress({ params }) {
    const [address, setAddress] = useState([])

    useEffect(() => {
        const fetchRequest = async () => {
            const result = await addressApiRequest.getAddress(params.id)
            const data = result.payload.data

            setAddress(data)
        }
        fetchRequest()
    }, [params.id])

    return (
        <main style={{ background: '#F5F5FA' }}>
            <div className="container">
                <div className="sidebar">
                    <img
                        alt="User profile picture"
                        height="100"
                        src="https://tse2.mm.bing.net/th?id=OIP.HHd8yrds00omoiO_XM1x2AHaHa&pid=Api&P=0&h=220"
                        width="100"
                    />
                    <div className="status">
                        <div className="badge">Thành viên Bạc</div>
                        <div className="points">F-Point tích lũy 0</div>
                        <div className="points">Thêm 30.000 để nâng hạng Vàng</div>
                    </div>
                    <Menu />
                </div>

                <CreateAddressForm />
            </div>
        </main>
    )
}
