import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 299,
      image: product1,
      category: "Audio",
      description: "Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation and up to 30 hours of battery life.",
      features: ["Active Noise Cancellation", "30-hour Battery Life", "Premium Sound Quality", "Comfortable Design"],
    },
    {
      id: 2,
      name: "Luxury Watch",
      price: 599,
      image: product2,
      category: "Accessories",
      description: "Elegant timepiece crafted with precision. Features automatic movement and sapphire crystal glass.",
      features: ["Automatic Movement", "Sapphire Crystal", "Water Resistant", "Premium Materials"],
    },
    {
      id: 3,
      name: "Designer Sneakers",
      price: 199,
      image: product3,
      category: "Footwear",
      description: "Step up your style with these premium designer sneakers. Combines comfort with contemporary design.",
      features: ["Premium Materials", "Comfortable Fit", "Modern Design", "Durable Construction"],
    },
    {
      id: 4,
      name: "Premium Backpack",
      price: 149,
      image: product4,
      category: "Bags",
      description: "Stylish and functional backpack perfect for daily commutes and travel. Multiple compartments for organization.",
      features: ["Multiple Compartments", "Laptop Sleeve", "Water Resistant", "Ergonomic Design"],
    },
  ];

  const product = products.find((p) => p.id === parseInt(id || "1"));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 container mx-auto px-4 py-12">
          <p>Product not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success("Added to cart successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <Link to="/shop" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm text-muted-foreground uppercase mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">${product.price}</p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="w-full md:w-auto" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
