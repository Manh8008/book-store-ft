import classNames from 'classnames/bind'
import MainLayout from '@/layouts/main-layout'
import Image from 'next/image'

import styles from './product-by-category.module.scss'
import { Beardcrumb } from '@/components/ui/breadcrumb'
import { Subcategory } from '@/components/ui/subcategory'
import { FilterBooks } from '@/components/ui/filter-books'
import ProductList from '@/components/product-list/product-list'
const cx = classNames.bind(styles)

const ProductByCategory = () => {
    return (
        <MainLayout>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper-content')}>
                    <Beardcrumb />
                    <div className={cx('banner')}>
                        <Image width={1349} height={400} src={'/img/sachkinhte-taichinh.png'} />
                    </div>
                    <Subcategory />
                    <FilterBooks />
                    <ProductList title={'Sách kinh tế - tài chính'} />
                </div>
            </div>
        </MainLayout>
    )
}

export default ProductByCategory
