"use client"

import { ProductCard } from '@/components/product-card';
import '@/public/styles/search.scss'
import { useEffect, useState } from 'react';

export default function Search(params) {
    const keyword = params.searchParams.query
    if (keyword == "") {
        return (
            <div className="text-center">
                <h3>Vui lòng nhập từ khóa tìm kiếm!</h3>
            </div>
        );
    }

    const [search, setSearch] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            if (keyword) {
                const productSearch = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/books/search?query=${keyword}`)
                    .then(res => res.json());
                setSearch(productSearch.data || []);
            }
        };
        fetchProducts();
    }, [keyword]);

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
    );
}