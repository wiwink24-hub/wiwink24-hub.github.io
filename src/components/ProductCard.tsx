import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

const ProductCard = ({ id, name, price, image, category, description }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, image, category, description });
    toast.success(`${name} added to cart!`);
  };

  return (
    <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-lg" data-testid={`card-product-${id}`}>
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            data-testid={`img-product-${id}`}
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground uppercase mb-2" data-testid={`text-category-${id}`}>{category}</p>
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors" data-testid={`text-name-${id}`}>
            {name}
          </h3>
        </Link>
        {description && (
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2" data-testid={`text-description-${id}`}>
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-primary" data-testid={`text-price-${id}`}>${price}</p>
          <Button size="sm" variant="default" onClick={handleAddToCart} data-testid={`button-add-to-cart-${id}`}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
