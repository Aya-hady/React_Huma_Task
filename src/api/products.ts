import type { Product, ProductsResponse } from "../types/product";

const BASE_URL = "https://dummyjson.com";

export async function getProducts(
  limit = 10,
  skip = 0,
  search = ""
): Promise<ProductsResponse> {
  const endpoint = search.trim()
    ? `${BASE_URL}/products/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${skip}`
    : `${BASE_URL}/products?limit=${limit}&skip=${skip}`;

  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}