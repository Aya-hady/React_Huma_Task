import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const limit = 10;

    const { data, isLoading, isError } = useQuery({
    queryKey: ["products", search, page],
    queryFn: () => getProducts(limit, (page - 1) * limit, search),
    });

    const totalPages = Math.ceil((data?.total ?? 0) / limit);

    if (isLoading) {
    return <p>Loading products...</p>;
    }

    if (isError) {
    return <p>Failed to load products.</p>;
    }

    return (
        <main className="min-h-screen px-6 py-10">
        <div className="mx-auto max-w-7xl">
            <h1 className="mb-8 text-4xl font-bold">
            Products
            </h1>

            <div className="mb-8">
            <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                setSearch(searchInput);
                setPage(1);
                }
            }}
            className="w-full rounded-md border px-4 py-3 outline-none"
            />
            </div>

            {data?.products.length === 0 ? (
            <div className="py-16 text-center">
                <h2 className="text-2xl font-bold">
                No products found
                </h2>

                <p className="mt-2 text-muted-foreground">
                Try searching for another product.
                </p>
            </div>
            ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data?.products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
                ))}
            </div>
            )}

            <div className="mt-10 flex items-center justify-center gap-4">
            <button
                disabled={page === 1}
                onClick={() =>
                setPage((currentPage) => currentPage - 1)
                }
                className="rounded-md border px-4 py-2 disabled:opacity-50"
            >
                Previous
            </button>

            <span>
                Page {page} of {totalPages}
            </span>

            <button
                disabled={page === totalPages}
                onClick={() =>
                setPage((currentPage) => currentPage + 1)
                }
                className="rounded-md border px-4 py-2 disabled:opacity-50"
            >
                Next
            </button>
            </div>
        </div>
        </main>
   );
}

export default ProductsPage;

