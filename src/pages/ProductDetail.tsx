import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import audio1 from "@assets/stock_images/premium_wireless_hea_a7d4c879.jpg";
import audio2 from "@assets/stock_images/premium_wireless_hea_7871df30.jpg";
import audio3 from "@assets/stock_images/premium_wireless_hea_8e26fc52.jpg";
import audio4 from "@assets/stock_images/premium_wireless_hea_e9573db9.jpg";
import audio5 from "@assets/stock_images/premium_wireless_hea_92d1c8fc.jpg";
import accessory1 from "@assets/stock_images/luxury_watch_elegant_18b658db.jpg";
import accessory2 from "@assets/stock_images/luxury_watch_elegant_bf0e3002.jpg";
import accessory3 from "@assets/stock_images/luxury_watch_elegant_b9c1388d.jpg";
import accessory4 from "@assets/stock_images/luxury_watch_elegant_3b57128d.jpg";
import accessory5 from "@assets/stock_images/luxury_watch_elegant_450bc861.jpg";
import footwear1 from "@assets/stock_images/designer_sneakers_pr_62881e0e.jpg";
import footwear2 from "@assets/stock_images/designer_sneakers_pr_872e610f.jpg";
import footwear3 from "@assets/stock_images/designer_sneakers_pr_38314046.jpg";
import footwear4 from "@assets/stock_images/designer_sneakers_pr_80f378e9.jpg";
import footwear5 from "@assets/stock_images/designer_sneakers_pr_8c14c307.jpg";
import bag1 from "@assets/stock_images/premium_leather_back_cf7ebc28.jpg";
import bag2 from "@assets/stock_images/premium_leather_back_cc1778fa.jpg";
import bag3 from "@assets/stock_images/premium_leather_back_56f39a42.jpg";
import bag4 from "@assets/stock_images/premium_leather_back_8b7d391d.jpg";
import bag5 from "@assets/stock_images/premium_leather_back_90cb35ab.jpg";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      image: audio1,
      category: "Audio",
      description: "Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation and up to 30 hours of battery life. Perfect for music lovers and professionals.",
      features: ["Active Noise Cancellation", "30-hour Battery Life", "Premium Sound Quality", "Comfortable Design"],
    },
    {
      id: 2,
      name: "Noise-Cancelling Earbuds",
      price: 179,
      image: audio2,
      category: "Audio",
      description: "Compact yet powerful earbuds with advanced noise cancellation technology. Ideal for commuting and travel with crystal-clear audio quality.",
      features: ["Advanced ANC Technology", "20-hour Battery", "IPX4 Water Resistant", "Touch Controls"],
    },
    {
      id: 3,
      name: "Studio Monitor Headphones",
      price: 349,
      image: audio3,
      category: "Audio",
      description: "Professional-grade studio headphones designed for audio engineers and musicians. Delivers accurate sound reproduction and exceptional clarity.",
      features: ["Studio-Grade Sound", "Detachable Cable", "50mm Drivers", "Professional Build Quality"],
    },
    {
      id: 4,
      name: "Sport Wireless Earbuds",
      price: 159,
      image: audio4,
      category: "Audio",
      description: "Designed for active lifestyles with secure fit and sweat resistance. Perfect for workouts, running, and outdoor activities.",
      features: ["Secure Fit Design", "Sweat Resistant", "12-hour Playtime", "Quick Charge"],
    },
    {
      id: 5,
      name: "Over-Ear Bluetooth Headphones",
      price: 279,
      image: audio5,
      category: "Audio",
      description: "Luxurious over-ear headphones with plush cushions and exceptional comfort. Perfect for long listening sessions with premium audio quality.",
      features: ["Memory Foam Cushions", "40-hour Battery", "Multi-Device Pairing", "Foldable Design"],
    },
    {
      id: 6,
      name: "Luxury Automatic Watch",
      price: 599,
      image: accessory1,
      category: "Accessories",
      description: "Elegant timepiece crafted with precision. Features automatic movement and sapphire crystal glass. A perfect blend of tradition and sophistication.",
      features: ["Automatic Movement", "Sapphire Crystal", "Water Resistant 100m", "Premium Materials"],
    },
    {
      id: 7,
      name: "Smart Fitness Watch",
      price: 399,
      image: accessory2,
      category: "Accessories",
      description: "Advanced smartwatch with comprehensive fitness tracking. Monitor your health, receive notifications, and stay connected on the go.",
      features: ["Heart Rate Monitor", "GPS Tracking", "Sleep Analysis", "7-day Battery Life"],
    },
    {
      id: 8,
      name: "Classic Chronograph Watch",
      price: 499,
      image: accessory3,
      category: "Accessories",
      description: "Timeless chronograph design with precision quartz movement. Perfect for both casual and formal occasions.",
      features: ["Chronograph Function", "Date Display", "Stainless Steel Case", "Italian Leather Strap"],
    },
    {
      id: 9,
      name: "Premium Leather Watch",
      price: 549,
      image: accessory4,
      category: "Accessories",
      description: "Sophisticated watch with genuine leather strap and premium finishing. Combines elegance with everyday functionality.",
      features: ["Genuine Leather Strap", "Swiss Movement", "Scratch Resistant", "Water Resistant 50m"],
    },
    {
      id: 10,
      name: "Minimalist Designer Watch",
      price: 449,
      image: accessory5,
      category: "Accessories",
      description: "Clean, minimalist design that makes a statement. Perfect for the modern professional who appreciates understated elegance.",
      features: ["Minimalist Design", "Japanese Quartz", "Mesh Band", "Ultra-Thin Case"],
    },
    {
      id: 11,
      name: "Designer Running Sneakers",
      price: 199,
      image: footwear1,
      category: "Footwear",
      description: "Step up your style with these premium designer sneakers. Combines comfort with contemporary design for everyday wear.",
      features: ["Premium Materials", "Comfortable Fit", "Modern Design", "Durable Construction"],
    },
    {
      id: 12,
      name: "Athletic Training Shoes",
      price: 159,
      image: footwear2,
      category: "Footwear",
      description: "High-performance training shoes engineered for athletes. Provides excellent support and cushioning for intense workouts.",
      features: ["Responsive Cushioning", "Breathable Mesh", "Rubber Outsole", "Arch Support"],
    },
    {
      id: 13,
      name: "Premium Casual Sneakers",
      price: 179,
      image: footwear3,
      category: "Footwear",
      description: "Versatile casual sneakers perfect for everyday wear. Features premium materials and comfortable all-day fit.",
      features: ["All-Day Comfort", "Premium Leather", "Padded Collar", "Flexible Sole"],
    },
    {
      id: 14,
      name: "High-Performance Running Shoes",
      price: 219,
      image: footwear4,
      category: "Footwear",
      description: "Engineered for serious runners with advanced cushioning technology. Delivers maximum energy return and comfort.",
      features: ["Energy Return Technology", "Lightweight Design", "Breathable Upper", "Superior Traction"],
    },
    {
      id: 15,
      name: "Street Style Sneakers",
      price: 189,
      image: footwear5,
      category: "Footwear",
      description: "Bold street style sneakers that make a statement. Perfect for fashion-forward individuals who love to stand out.",
      features: ["Unique Design", "Premium Build", "Comfortable Insole", "Fashion-Forward Style"],
    },
    {
      id: 16,
      name: "Premium Leather Backpack",
      price: 249,
      image: bag1,
      category: "Bags",
      description: "Stylish and functional backpack perfect for daily commutes and travel. Multiple compartments for organization with premium leather construction.",
      features: ["Multiple Compartments", "Laptop Sleeve", "Water Resistant", "Ergonomic Design"],
    },
    {
      id: 17,
      name: "Travel Duffel Bag",
      price: 199,
      image: bag2,
      category: "Bags",
      description: "Spacious duffel bag ideal for weekend getaways and gym sessions. Durable construction with multiple pockets for organization.",
      features: ["Large Capacity", "Durable Material", "Adjustable Strap", "Separate Shoe Compartment"],
    },
    {
      id: 18,
      name: "Professional Laptop Bag",
      price: 179,
      image: bag3,
      category: "Bags",
      description: "Professional laptop bag designed for business travelers. Protects your devices while maintaining a sleek, professional appearance.",
      features: ["Padded Laptop Compartment", "Business Card Holder", "Premium Finish", "Multiple Pockets"],
    },
    {
      id: 19,
      name: "Weekend Travel Backpack",
      price: 219,
      image: bag4,
      category: "Bags",
      description: "Versatile travel backpack perfect for short trips and daily use. Features comfortable straps and smart organization.",
      features: ["TSA-Friendly Design", "USB Charging Port", "Anti-Theft Pocket", "Breathable Back Panel"],
    },
    {
      id: 20,
      name: "Executive Business Bag",
      price: 269,
      image: bag5,
      category: "Bags",
      description: "Sophisticated executive bag crafted from premium leather. Perfect for professionals who demand style and functionality.",
      features: ["Genuine Leather", "RFID Protection", "Tablet Pocket", "Professional Design"],
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
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        description: product.description,
      });
      toast.success(`${product.name} added to cart!`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <Link to="/shop" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors" data-testid="link-back-to-shop">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              data-testid="img-product"
            />
          </div>

          <div>
            <p className="text-sm text-muted-foreground uppercase mb-2" data-testid="text-category">{product.category}</p>
            <h1 className="text-4xl font-bold mb-4" data-testid="text-product-name">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6" data-testid="text-price">${product.price}</p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-description">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-muted-foreground" data-testid={`text-feature-${index}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="w-full md:w-auto" onClick={handleAddToCart} data-testid="button-add-to-cart">
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
