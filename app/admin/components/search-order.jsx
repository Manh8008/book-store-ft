'use client'

import { Button } from '@/components/ui/button'

const SearchOrder = ({ query, setQuery, onSearch }) => {
    return (
        <div className="iq-search-bar">
            <form onSubmit={onSearch} className="searchbox">
                <input
                    type="text"
                    className="text search-input"
                    placeholder="Nhập mã đơn hàng..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button type="submit" className="search-link search-btn">
                    <i className="ri-search-line"></i>
                </Button>
            </form>
        </div>
    )
}

export default SearchOrder
