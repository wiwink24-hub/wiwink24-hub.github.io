import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const Home = () => {
  const featuredProducts = [
    { id: 1, name: "Premium Headphones", price: 299, image: product1, category: "Audio", description: "Experience superior sound quality with our premium wireless headphones." },
    { id: 2, name: "Luxury Watch", price: 599, image: product2, category: "Accessories", description: "Elegant timepiece crafted with precision and sapphire crystal glass." },
    { id: 3, name: "Designer Sneakers", price: 199, image: product3, category: "Footwear", description: "Step up your style with these premium designer sneakers." },
    { id: 4, name: "Premium Backpack", price: 149, image: product4, category: "Bags", description: "Stylish and functional backpack perfect for daily use." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroBanner}
              alt="Hero Banner"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Premium Quality
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Elevate your lifestyle with our curated collection of luxury products
              </p>
              <Link to="/shop">
                <Button size="lg" className="text-lg px-8">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">
              Handpicked selection of our best sellers
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
              <p className="text-muted-foreground text-lg">
                Find exactly what you're looking for
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Audio", "Accessories", "Footwear", "Bags"].map((category) => (
                <Link key={category} to="/shop">
                  <div className="bg-card p-8 rounded-lg text-center hover:shadow-lg transition-shadow border border-border hover:border-primary">
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-8 opacity-90">
              Get exclusive access to new products and special offers
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
