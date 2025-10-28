# Inventori Produk - LUXE E-Commerce

## Total Produk: 20 Item (5 per Kategori)

### 📻 Audio (5 Items)
1. **Premium Wireless Headphones** - $299
   - Active Noise Cancellation, 30-hour Battery Life, Premium Sound Quality, Comfortable Design

2. **Noise-Cancelling Earbuds** - $179
   - Advanced ANC Technology, 20-hour Battery, IPX4 Water Resistant, Touch Controls

3. **Studio Monitor Headphones** - $349
   - Studio-Grade Sound, Detachable Cable, 50mm Drivers, Professional Build Quality

4. **Sport Wireless Earbuds** - $159
   - Secure Fit Design, Sweat Resistant, 12-hour Playtime, Quick Charge

5. **Over-Ear Bluetooth Headphones** - $279
   - Memory Foam Cushions, 40-hour Battery, Multi-Device Pairing, Foldable Design

### ⌚ Accessories (5 Items)
6. **Luxury Automatic Watch** - $599
   - Automatic Movement, Sapphire Crystal, Water Resistant 100m, Premium Materials

7. **Smart Fitness Watch** - $399
   - Heart Rate Monitor, GPS Tracking, Sleep Analysis, 7-day Battery Life

8. **Classic Chronograph Watch** - $499
   - Chronograph Function, Date Display, Stainless Steel Case, Italian Leather Strap

9. **Premium Leather Watch** - $549
   - Genuine Leather Strap, Swiss Movement, Scratch Resistant, Water Resistant 50m

10. **Minimalist Designer Watch** - $449
    - Minimalist Design, Japanese Quartz, Mesh Band, Ultra-Thin Case

### 👟 Footwear (5 Items)
11. **Designer Running Sneakers** - $199
    - Premium Materials, Comfortable Fit, Modern Design, Durable Construction

12. **Athletic Training Shoes** - $159
    - Responsive Cushioning, Breathable Mesh, Rubber Outsole, Arch Support

13. **Premium Casual Sneakers** - $179
    - All-Day Comfort, Premium Leather, Padded Collar, Flexible Sole

14. **High-Performance Running Shoes** - $219
    - Energy Return Technology, Lightweight Design, Breathable Upper, Superior Traction

15. **Street Style Sneakers** - $189
    - Unique Design, Premium Build, Comfortable Insole, Fashion-Forward Style

### 🎒 Bags (5 Items)
16. **Premium Leather Backpack** - $249
    - Multiple Compartments, Laptop Sleeve, Water Resistant, Ergonomic Design

17. **Travel Duffel Bag** - $199
    - Large Capacity, Durable Material, Adjustable Strap, Separate Shoe Compartment

18. **Professional Laptop Bag** - $179
    - Padded Laptop Compartment, Business Card Holder, Premium Finish, Multiple Pockets

19. **Weekend Travel Backpack** - $219
    - TSA-Friendly Design, USB Charging Port, Anti-Theft Pocket, Breathable Back Panel

20. **Executive Business Bag** - $269
    - Genuine Leather, RFID Protection, Tablet Pocket, Professional Design

## Gambar Produk
Semua gambar produk adalah gambar stok berkualitas tinggi yang disimpan di:
- `attached_assets/stock_images/` (original)
- `src/assets/stock_images/` (untuk digunakan dalam aplikasi)

## Cara Menambah Produk Baru

1. **Download gambar berkualitas tinggi** dan simpan di `src/assets/stock_images/`

2. **Update `src/pages/Shop.tsx`**:
   ```tsx
   import newImage from "@assets/stock_images/new_product.jpg";
   // Tambahkan ke array products
   { id: 21, name: "New Product", price: 299, image: newImage, category: "Category" }
   ```

3. **Update `src/pages/ProductDetail.tsx`**:
   ```tsx
   // Import gambar yang sama
   import newImage from "@assets/stock_images/new_product.jpg";
   // Tambahkan detail produk lengkap
   {
     id: 21,
     name: "New Product",
     price: 299,
     image: newImage,
     category: "Category",
     description: "Product description",
     features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
   }
   ```

## Kategori yang Tersedia
- **Audio**: Headphones, Earbuds, Speakers
- **Accessories**: Watches, Sunglasses, Wallets
- **Footwear**: Sneakers, Running Shoes, Casual Shoes
- **Bags**: Backpacks, Duffel Bags, Laptop Bags

## Harga Range
- Audio: $159 - $349
- Accessories: $399 - $599
- Footwear: $159 - $219
- Bags: $179 - $269
