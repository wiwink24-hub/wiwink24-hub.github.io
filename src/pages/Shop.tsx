import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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

const Shop = () => {
  const products = [
    { id: 1, name: "Premium Wireless Headphones", price: 299, image: audio1, category: "Audio", description: "Experience superior sound quality with our premium wireless headphones." },
    { id: 2, name: "Noise-Cancelling Earbuds", price: 179, image: audio2, category: "Audio", description: "Compact yet powerful earbuds with advanced noise cancellation technology." },
    { id: 3, name: "Studio Monitor Headphones", price: 349, image: audio3, category: "Audio", description: "Professional-grade studio headphones designed for audio engineers and musicians." },
    { id: 4, name: "Sport Wireless Earbuds", price: 159, image: audio4, category: "Audio", description: "Designed for active lifestyles with secure fit and sweat resistance." },
    { id: 5, name: "Over-Ear Bluetooth Headphones", price: 279, image: audio5, category: "Audio", description: "Luxurious over-ear headphones with plush cushions and exceptional comfort." },
    
    { id: 6, name: "Luxury Automatic Watch", price: 599, image: accessory1, category: "Accessories", description: "Elegant timepiece crafted with precision. Features automatic movement and sapphire crystal glass." },
    { id: 7, name: "Smart Fitness Watch", price: 399, image: accessory2, category: "Accessories", description: "Advanced smartwatch with comprehensive fitness tracking." },
    { id: 8, name: "Classic Chronograph Watch", price: 499, image: accessory3, category: "Accessories", description: "Timeless chronograph design with precision quartz movement." },
    { id: 9, name: "Premium Leather Watch", price: 549, image: accessory4, category: "Accessories", description: "Sophisticated watch with genuine leather strap and premium finishing." },
    { id: 10, name: "Minimalist Designer Watch", price: 449, image: accessory5, category: "Accessories", description: "Clean, minimalist design that makes a statement." },
    
    { id: 11, name: "Designer Running Sneakers", price: 199, image: footwear1, category: "Footwear", description: "Step up your style with these premium designer sneakers." },
    { id: 12, name: "Athletic Training Shoes", price: 159, image: footwear2, category: "Footwear", description: "High-performance training shoes engineered for athletes." },
    { id: 13, name: "Premium Casual Sneakers", price: 179, image: footwear3, category: "Footwear", description: "Versatile casual sneakers perfect for everyday wear." },
    { id: 14, name: "High-Performance Running Shoes", price: 219, image: footwear4, category: "Footwear", description: "Engineered for serious runners with advanced cushioning technology." },
    { id: 15, name: "Street Style Sneakers", price: 189, image: footwear5, category: "Footwear", description: "Bold street style sneakers that make a statement." },
    
    { id: 16, name: "Premium Leather Backpack", price: 249, image: bag1, category: "Bags", description: "Stylish and functional backpack perfect for daily commutes and travel." },
    { id: 17, name: "Travel Duffel Bag", price: 199, image: bag2, category: "Bags", description: "Spacious duffel bag ideal for weekend getaways and gym sessions." },
    { id: 18, name: "Professional Laptop Bag", price: 179, image: bag3, category: "Bags", description: "Professional laptop bag designed for business travelers." },
    { id: 19, name: "Weekend Travel Backpack", price: 219, image: bag4, category: "Bags", description: "Versatile travel backpack perfect for short trips and daily use." },
    { id: 20, name: "Executive Business Bag", price: 269, image: bag5, category: "Bags", description: "Sophisticated executive bag crafted from premium leather." },
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
