'use client'
import classNames from 'classnames/bind'
import Link from 'next/link'
import { toast } from 'react-toastify'
import styles from './address-form.module.scss'
import { useUser } from '@/context/user-context'
import addressApiRequest from '@/apiRequests/address'
import 'react-toastify/dist/ReactToastify.css'

const cx = classNames.bind(styles)

const AddressForm = () => {
    const { userData, setUserData } = useUser()

    if (!userData || !userData.address || userData.address.length === 0) {
        return (
            <div className={cx('new')}>
                <a href="/customer/address/create">
                    <AddAddressIcon />
                    <span>Thêm địa chỉ mới</span>
                </a>
            </div>
        )
    }

    const handleDelete = async (id) => {
        if (confirm('Bạn có thật sự muốn xóa!') == true) {
            try {
                await addressApiRequest.destroy(id)
                setUserData({
                    ...userData,
                    address: userData.address.filter((address) => address.id !== id)
                })
            } catch (error) {
                toast.error('Không thể xóa địa chỉ. Vui lòng thử lại.')
            }
        } else {
            return
        }
    }

    const handleSavingAddress = async (id) => {
        try {
            await addressApiRequest.defaultUpdate(id)
            window.location.href = '/checkout/payment'
        } catch (error) {
            toast.error('Không thể giao tới địa chỉ này.')
        }
    }

    return (
        <div className={cx('address-container')}>
            <h2>Sổ địa chỉ</h2>

            <div className={cx('new')}>
                <a href="/customer/address/create">
                    <AddAddressIcon />
                    <span>Thêm địa chỉ mới</span>
                </a>
            </div>
            <div className={cx('address-list')}>
                {userData &&
                    userData.address &&
                    userData.address.map((address) => (
                        <div
                            key={address.id}
                            className={cx('address-item', { default: address.default === 1 })}
                        >
                            <div className={cx('info')}>
                                <div className={cx('name')}>
                                    {address.name}
                                    {address.default === 1 && (
                                        <span className={cx('default-label')}>
                                            Địa chỉ mặc định
                                        </span>
                                    )}
                                </div>
                                <div className={cx('address')}>
                                    <span>Địa chỉ:</span> {address.address_line}, {address.town},
                                    {address.district}, {address.province}
                                </div>
                                <div className={cx('phone')}>
                                    <span>Điện thoại:</span> {address.phone}
                                </div>
                            </div>
                            <div className={cx('actions')}>
                                {address.default !== 1 && (
                                    <button
                                        className={cx('saving-address')}
                                        onClick={() => handleSavingAddress(address.id)}
                                    >
                                        Giao tới địa chỉ này
                                    </button>
                                )}

                                <Link
                                    href={`/customer/address/update/${address.id}`}
                                    className={cx('edit')}
                                >
                                    Chỉnh sửa
                                </Link>

                                {address.default !== 1 && (
                                    <button
                                        className={cx('delete')}
                                        onClick={() => handleDelete(address.id)}
                                    >
                                        Xóa
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

// SVG icon for adding new address
const AddAddressIcon = () => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
    </svg>
)

export default AddressForm
