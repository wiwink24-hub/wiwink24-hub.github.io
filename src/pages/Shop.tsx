import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const Shop = () => {
  const products = [
    { id: 1, name: "Premium Headphones", price: 299, image: product1, category: "Audio" },
    { id: 2, name: "Luxury Watch", price: 599, image: product2, category: "Accessories" },
    { id: 3, name: "Designer Sneakers", price: 199, image: product3, category: "Footwear" },
    { id: 4, name: "Premium Backpack", price: 149, image: product4, category: "Bags" },
    { id: 5, name: "Wireless Earbuds", price: 179, image: product1, category: "Audio" },
    { id: 6, name: "Smart Watch", price: 399, image: product2, category: "Accessories" },
    { id: 7, name: "Running Shoes", price: 159, image: product3, category: "Footwear" },
    { id: 8, name: "Travel Bag", price: 229, image: product4, category: "Bags" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground text-lg">
            Browse our complete collection of premium products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
