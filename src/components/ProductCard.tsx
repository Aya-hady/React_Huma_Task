import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full object-cover"
      />

      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-xl font-bold">
          ${product.price}
        </p>

        <p className="text-sm text-muted-foreground">
          Rating: {product.rating}
        </p>
      </CardContent>

      <CardFooter>
        <Link
          to={`/products/${product.id}`}
          className="w-full rounded-md bg-primary px-4 py-2 text-center text-primary-foreground"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;