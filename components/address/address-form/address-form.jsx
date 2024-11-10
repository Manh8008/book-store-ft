'use client'
import classNames from 'classnames/bind'
import styles from './address-form.module.scss'
import { useUser } from '@/context/user-context'
import Link from 'next/link'
import addressApiRequest from '@/apiRequests/address'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css'

const cx = classNames.bind(styles)

const AddressForm = () => {
    const { userData, setUserData } = useUser()

    if (!userData || !userData.address || userData.address.length === 0) {
        return <div>Chưa có địa chỉ nào</div>
    }

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa địa chỉ này?',
            text: 'Hành động này không thể hoàn tác!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy'
        })

        if (result.isConfirmed) {
            try {
                await addressApiRequest.destroy(id)
                setUserData({
                    ...userData,
                    address: userData.address.filter((address) => address.id !== id)
                })
            } catch (error) {
                toast('Không thể xóa địa chỉ. Vui lòng thử lại.')
            }
        }
    }

    return (
        <div className={cx('address-container')}>
            <div className={cx('header')}>
                <h2>Sổ địa chỉ</h2>
                <Link href="/customer/address/create" className={cx('add-address-btn')}>
                    <span>+</span> Thêm địa chỉ mới
                </Link>
            </div>
            <div className={cx('address-list')}>
                {userData.address.map((address) => (
                    <div
                        key={address.id}
                        className={cx('address-item', address.default ? 'default' : '')}
                    >
                        <div className={cx('info')}>
                            <h3>
                                {address.name}{' '}
                                {address.default === 1 && (
                                    <span className={cx('default-label')}>Địa chỉ mặc định</span>
                                )}
                            </h3>
                            <p>
                                Địa chỉ: {address.address_line}, {address.town}, {address.district}{' '}
                                ,{address.province}
                            </p>
                            <p>Điện thoại: {address.phone}</p>
                        </div>
                        <div className={cx('actions')}>
                            <Link
                                href={`/customer/address/update/${address.id}`}
                                className={cx('edit-btn')}
                            >
                                Chỉnh sửa
                            </Link>
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
