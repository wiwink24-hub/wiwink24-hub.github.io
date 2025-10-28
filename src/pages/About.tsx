import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About LUXE</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Your trusted source for premium quality products since 2024
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <img
                  src={aboutImage}
                  alt="About LUXE"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  LUXE was founded with a simple mission: to bring premium quality products 
                  to discerning customers who value excellence in every aspect of their lives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We carefully curate each item in our collection, ensuring that every product 
                  meets our rigorous standards for quality, design, and functionality.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 border rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Premium Products</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                  <p className="text-muted-foreground">
                    We never compromise on quality. Every product is carefully selected and tested.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                  <p className="text-muted-foreground">
                    Your happiness is our priority. We're here to ensure you have the best experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We're committed to sustainable practices and responsible sourcing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
