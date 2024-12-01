import { Button } from "@/components/ui/button";

export default function SearchProduct({ query, setQuery, onSearch }) {

    return (
        <div className="iq-search-bar">
            <form className="searchbox" onSubmit={onSearch}>
                <input
                    type="text"
                    className="text search-input"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button type="submit" className="search-link search-btn">
                    <i className="ri-search-line"></i>
                </Button>
            </form>
        </div>
    );
}
