import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/products";

function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return <p>Loading product...</p>;
  }

  if (isError) {
    return <p>Failed to load product.</p>;
  }

  if (!data) {
    return <p>Product not found.</p>;
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/products"
          className="mb-8 inline-block rounded-md border px-4 py-2"
        >
          ← Back to Products
        </Link>

        <h1 className="mb-8 text-4xl font-bold">
          {data.title}
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full rounded-lg object-cover"
          />

          <div>
            <p className="mb-4 text-2xl font-bold">
              ${data.price}
            </p>

            <p className="mb-4 text-muted-foreground">
              {data.description}
            </p>

            <p className="mb-2">
              Rating: ⭐ {data.rating}
            </p>

            <p className="mb-2">
              Category: {data.category}
            </p>

            <p>
              Stock: {data.stock}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailsPage;