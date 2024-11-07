'use client'
import classNames from 'classnames/bind'
import { useState, useEffect } from 'react'
import styles from './address-form.module.scss'
import addressApiRequest from '@/apiRequests/address'

const cx = classNames.bind(styles)

const AddressForm = ({ data }) => {
    const [addresses, setAddresses] = useState(data)

    useEffect(() => {
        setAddresses(data)
    }, [data])

    const handleDelete = async (id) => {
        try {
            await addressApiRequest.destroy(id)

            setAddresses(addresses.filter((address) => address.id !== id))
        } catch (error) {
            console.error('Failed to delete address:', error)
        }
    }

    return (
        <div className={cx('address-container')}>
            <div className={cx('header')}>
                <h2>Sổ địa chỉ</h2>
                <button className={cx('add-address-btn')}>
                    <span>+</span> Thêm địa chỉ mới
                </button>
            </div>
            <div className={cx('address-list')}>
                {addresses.map((address) => (
                    <div
                        key={address.id}
                        className={cx('address-item', address.isDefault ? 'default' : '')}
                    >
                        <div className={cx('info')}>
                            <h3>
                                {address.name}{' '}
                                {address.isDefault && (
                                    <span className={cx('default-label')}>Địa chỉ mặc định</span>
                                )}
                            </h3>
                            <p>Địa chỉ: {address.address_line}</p>
                            <p>Điện thoại: {address.phone}</p>
                        </div>
                        <div className={cx('actions')}>
                            <button className={cx('edit-btn')}>Chỉnh sửa</button>
                            <button
                                className={cx('delete-btn')}
                                onClick={() => handleDelete(address.id)}
                            >
                                Xóa
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddressForm
