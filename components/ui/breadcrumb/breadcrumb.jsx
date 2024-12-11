'use client'
import classNames from 'classnames/bind'
import Link from 'next/link'
import styles from './breadcrumb.module.scss'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { reviewApiRequestAdmin } from '@/apiRequests/post'
import { catalogApiRequestAdmin } from '@/apiRequests/category'
import { productApiRequest } from '@/apiRequests/product'

const cx = classNames.bind(styles)

// Hàm lấy tên bài viết từ API
const fetchPostName = async (id) => {
    try {
        // Gửi yêu cầu đến API để lấy bài viết theo id
        const result = await reviewApiRequestAdmin.getPostById(id);
        // console.log('Dữ liệu trả về từ API:', result);

        if (result.payload && result.payload.data && result.payload.data.title) {
            // console.log('Tên bài viết:', result.payload.data.title);
            return result.payload.data.title; // Trả về tên bài viết
        } else {
            console.error('Không tìm thấy tên bài viết trong dữ liệu trả về'); // In lỗi nếu không có tên bài viết
            throw new Error('Không tìm thấy tên bài viết');
        }
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu bài viết:', error); // In lỗi khi gặp sự cố
        return `Chi tiết bài viết ${id}`; // Giá trị mặc định nếu có lỗi
    }
}

// Hàm lấy tên danh mục từ API
const fetchCategoryName = async (id) => {
    try {
        const result = await catalogApiRequestAdmin.getCatalogById(id); // API lấy danh mục
        // console.log('Dữ liệu trả về từ API (danh mục):', result);

        if (result.payload && result.payload.data && result.payload.data.name) {
            console.log('Tên danh mục:', result.payload.data.name);
            return result.payload.data.name; // Trả về tên danh mục
        } else {
            console.error('Không tìm thấy tên danh mục trong dữ liệu trả về');
            throw new Error('Không tìm thấy tên danh mục');
        }
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu danh mục:', error);
        return `Danh mục ${id}`; // Giá trị mặc định nếu có lỗi
    }
};

// Hàm lấy tên sản phẩm từ API
const fetchProductName = async (id) => {
    try {
        const result = await productApiRequest.bookDetail(id);
        if (result.payload && result.payload.data && result.payload.data.name) {
            return result.payload.data.name
        }
        throw new Error('Không tìm thấy tên sản phẩm')
    } catch (error) {
        console.error('Lỗi khi lấy tên sản phẩm:', error)
        return `Sản phẩm ${id}`
    }
}

export const Beardcrumb = () => {
    const pathname = usePathname() // Lấy đường dẫn hiện tại
    const [breadcrumb, setBreadcrumb] = useState([])

    useEffect(() => {
        const generateBreadcrumb = async () => {
            const segments = pathname.split('/').filter(Boolean); // Tách các segment từ URL
            const breadcrumbArray = [{ name: 'Trang chủ', href: '/' }];

            for (let i = 0; i < segments.length; i++) {
                const segment = segments[i];
                const href = `/${segments.slice(0, i + 1).join('/')}`;

                if (segment === 'shop') {
                    breadcrumbArray.push({ name: 'Cửa hàng', href });
                } else if (!isNaN(segment) && segments[i - 1] === 'shop') {
                    // Xử lý categoryId nếu trước đó là 'shop'
                    const categoryId = segment;
                    const categoryName = await fetchCategoryName(categoryId);
                    breadcrumbArray.push({ name: categoryName, href: `/shop/${categoryId}` });
                } else if (segment === 'book-detail' && segments[i + 1]) {
                    // Xử lý productId nếu trước đó là 'product-detail'
                    const productId = segments[i + 1];
                    if (productId && !isNaN(productId)) {
                        const productName = await fetchProductName(productId);
                        breadcrumbArray.push({ name: productName, href: `/book-detail/${productId}` });
                        break; // Kết thúc xử lý vì đã tìm thấy chi tiết sản phẩm
                    }
                } else if (segment === 'review-book') {
                    breadcrumbArray.push({ name: 'Bài viết', href });
                } else if (segment === 'reviewBook-detail' && segments[i + 1]) {
                    const id = segments[i + 1];
                    if (id && !isNaN(id)) {
                        const postName = await fetchPostName(id);
                        breadcrumbArray.push({ name: postName, href: `/reviewBook-detail/${id}` });
                        break;
                    }
                } else if (segment === 'contact') {
                    breadcrumbArray.push({ name: 'Liên hệ', href });
                }
            }

            setBreadcrumb(breadcrumbArray);
        };

        generateBreadcrumb();
    }, [pathname]);


    return (
        <div className={cx('breadcrumb')}>
            <ul className={cx('navigation')}>
                {breadcrumb.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href}>{item.name}</Link>
                        {index < breadcrumb.length - 1 && (
                            <span className={cx('chevron-right')}>
                                <i className="fa-solid fa-chevron-right"></i>
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
