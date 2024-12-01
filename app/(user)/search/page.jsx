'use client'

import { useEffect, useState } from 'react'
import { productApiRequest } from '@/apiRequests/product'
import { ProductCard } from '@/components/product-card'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'
import { handleHttpError } from '@/lib/utils'
import '@/public/styles/search.scss'

export default function Search(params) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const keyword = params.searchParams.query
    if (keyword == '') {
        return (
            <div className="text-center">
                <h3>Vui lòng nhập từ khóa tìm kiếm!</h3>
            </div>
        )
    }

    const [search, setSearch] = useState([])

    const fetchProductsSearch = async () => {
        if (loading) return
        setLoading(true)
        setError('')
        try {
            if (keyword) {
                const productSearch = await productApiRequest.searchBook(keyword)
                setSearch(productSearch.payload.data || [])
            }
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProductsSearch()
    }, [keyword])

    if (loading) return <LoadingSkeleton />

    return (
        <>
            <main style={{ background: '#F5F5FA' }}>
                <div className="home-search">
                    <div className="content">
                        <div className="title-search">
                            <h3>Kết quả tìm kiếm cho từ khóa: "{keyword}"</h3>
                        </div>
                        <div className="product-search">
                            <ProductCard data={search} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
