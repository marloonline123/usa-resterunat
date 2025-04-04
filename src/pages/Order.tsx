
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Minus, Plus, ShoppingBag, Clock, MapPin, CreditCard, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

type CartItem = MenuItem & {
  quantity: number;
  specialInstructions?: string;
};

const Order = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeTab, setActiveTab] = useState("popular");
  const [orderType, setOrderType] = useState("delivery");
  const [checkoutStep, setCheckoutStep] = useState(1);

  const menuCategories = [
    { id: "popular", label: "Popular" },
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
    { id: "sides", label: "Sides" },
    { id: "desserts", label: "Desserts" },
    { id: "drinks", label: "Drinks" },
  ];

  const menuItems: MenuItem[] = [
    // Popular Items
    {
      id: 1,
      name: "Classic Burger",
      description: "Beef patty with cheese, lettuce, tomato, pickles and special sauce on a toasted brioche bun.",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965",
      category: "popular",
    },
    {
      id: 2,
      name: "Country Breakfast",
      description: "Three eggs any style with bacon, sausage, hash browns, and toast.",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032",
      category: "popular",
    },
    {
      id: 3,
      name: "Homestyle Meatloaf",
      description: "Traditional meatloaf with our secret blend of spices, served with mashed potatoes and seasonal vegetables.",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=2187",
      category: "popular",
    },
    {
      id: 4,
      name: "BBQ Ribs",
      description: "Slow-cooked baby back ribs with our house BBQ sauce. Served with fries and coleslaw.",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
      category: "popular",
    },
    
    // More items for other categories...
    // Breakfast
    {
      id: 5,
      name: "Pancake Stack",
      description: "Fluffy pancakes served with butter and maple syrup. Add blueberries or chocolate chips.",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1575853121743-60c24f0a7502?q=80&w=2070",
      category: "breakfast",
    },
    {
      id: 6,
      name: "Denver Omelette",
      description: "Three egg omelette with ham, bell peppers, onions, and cheddar cheese. Served with toast and hash browns.",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?q=80&w=2070",
      category: "breakfast",
    },
    
    // Lunch
    {
      id: 7,
      name: "Turkey Club Sandwich",
      description: "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=2070",
      category: "lunch",
    },
    {
      id: 8,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing. Add grilled chicken for $3.",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070",
      category: "lunch",
    },
    
    // Dinner
    {
      id: 9,
      name: "Grilled Salmon",
      description: "Fresh salmon fillet grilled to perfection, served with rice pilaf and steamed broccoli.",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?q=80&w=1974",
      category: "dinner",
    },
    {
      id: 10,
      name: "Chicken Parmesan",
      description: "Breaded chicken breast topped with marinara sauce and melted mozzarella. Served with spaghetti.",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=1964",
      category: "dinner",
    },
    
    // Sides
    {
      id: 11,
      name: "French Fries",
      description: "Crispy golden fries seasoned with our special blend of spices.",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1935",
      category: "sides",
    },
    {
      id: 12,
      name: "Onion Rings",
      description: "Beer battered onion rings, fried until golden and crispy.",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=2069",
      category: "sides",
    },
    
    // Desserts
    {
      id: 13,
      name: "Apple Pie",
      description: "Classic apple pie with a flaky crust. Served warm with vanilla ice cream.",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=1974",
      category: "desserts",
    },
    {
      id: 14,
      name: "Chocolate Brownie Sundae",
      description: "Warm chocolate brownie topped with vanilla ice cream, chocolate sauce, and whipped cream.",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2127",
      category: "desserts",
    },
    
    // Drinks
    {
      id: 15,
      name: "Fresh Lemonade",
      description: "Freshly squeezed lemonade with just the right amount of sweetness.",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=1887",
      category: "drinks",
    },
    {
      id: 16,
      name: "Classic Milkshake",
      description: "Thick and creamy milkshake available in chocolate, vanilla, or strawberry.",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1887",
      category: "drinks",
    },
  ];

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex > -1) {
        // Item already in cart, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        // Add new item to cart
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your order.`,
    });
  };

  const increaseQuantity = (itemId: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };

  const decreaseQuantity = (itemId: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (itemId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const updateSpecialInstructions = (itemId: number, instructions: string) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId 
          ? { ...item, specialInstructions: instructions } 
          : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.0875; // 8.75% tax
  };

  const calculateDeliveryFee = () => {
    return orderType === "delivery" ? 3.99 : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateDeliveryFee();
  };

  const placeOrder = () => {
    toast({
      title: "Order placed successfully!",
      description: "Your order has been received and will be ready soon.",
    });
    setCart([]);
    setCheckoutStep(1);
  };

  const renderMenuItems = (category: string) => {
    const filteredItems = menuItems.filter(item => item.category === category);
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <span className="font-bold text-restaurant-red">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
              <Button 
                onClick={() => addToCart(item)}
                className="w-full bg-restaurant-red hover:bg-red-700"
              >
                Add to Order
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCartItems = () => {
    if (cart.length === 0) {
      return (
        <div className="text-center py-12">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
          <p className="text-gray-500">Add some delicious items to get started!</p>
        </div>
      );
    }

    return (
      <div>
        {cart.map(item => (
          <div key={item.id} className="border-b border-gray-200 py-4">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8"
                  onClick={() => increaseQuantity(item.id)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Input 
                placeholder="Special instructions..."
                value={item.specialInstructions || ''}
                onChange={(e) => updateSpecialInstructions(item.id, e.target.value)}
                className="text-sm"
              />
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-red-500 hover:text-red-700 hover:bg-transparent"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderOrderSummary = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax();
    const deliveryFee = calculateDeliveryFee();
    const total = calculateTotal();

    return (
      <div className="bg-restaurant-cream p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-4">Order Summary</h3>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          {orderType === "delivery" && (
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
          )}
          <div className="border-t border-gray-300 pt-2 font-bold flex justify-between">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderCheckoutSteps = () => {
    switch (checkoutStep) {
      case 1: // Cart review
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Order</h2>
            {renderCartItems()}
            {cart.length > 0 && (
              <div className="mt-6 space-y-4">
                {renderOrderSummary()}
                <Button 
                  className="w-full bg-restaurant-red hover:bg-red-700"
                  onClick={() => setCheckoutStep(2)}
                >
                  Continue to Delivery Options
                </Button>
              </div>
            )}
          </div>
        );
      
      case 2: // Delivery options
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Delivery Options</h2>
            
            <RadioGroup defaultValue={orderType} onValueChange={setOrderType} className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <RadioGroupItem value="delivery" id="delivery" />
                <Label htmlFor="delivery" className="flex items-center font-medium">
                  <MapPin className="mr-2 h-5 w-5 text-restaurant-red" />
                  Delivery
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pickup" id="pickup" />
                <Label htmlFor="pickup" className="flex items-center font-medium">
                  <Clock className="mr-2 h-5 w-5 text-restaurant-red" />
                  Pickup
                </Label>
              </div>
            </RadioGroup>
            
            {orderType === "delivery" ? (
              <div className="space-y-4 mb-6">
                <h3 className="font-bold">Delivery Address</h3>
                <Input placeholder="Street Address" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="City" />
                  <Input placeholder="ZIP Code" />
                </div>
                <Input placeholder="Delivery Instructions (Optional)" />
              </div>
            ) : (
              <div className="space-y-4 mb-6">
                <h3 className="font-bold">Pickup Information</h3>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium">USA Family Restaurant</p>
                  <p className="text-gray-600">123 Main Street, Anytown, USA 12345</p>
                  <p className="text-gray-600 mt-2">Your order will be ready for pickup in approximately 20-30 minutes.</p>
                </div>
              </div>
            )}
            
            {renderOrderSummary()}
            
            <div className="flex space-x-4 mt-6">
              <Button 
                variant="outline" 
                className="w-1/2"
                onClick={() => setCheckoutStep(1)}
              >
                Back to Cart
              </Button>
              <Button 
                className="w-1/2 bg-restaurant-red hover:bg-red-700"
                onClick={() => setCheckoutStep(3)}
              >
                Continue to Payment
              </Button>
            </div>
          </div>
        );
      
      case 3: // Payment
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <CreditCard className="h-5 w-5 text-restaurant-red" />
                <h3 className="font-bold">Card Details</h3>
              </div>
              
              <div className="space-y-4">
                <Input placeholder="Card Number" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM/YY" />
                  <Input placeholder="CVC" />
                </div>
                <Input placeholder="Name on Card" />
              </div>
            </div>
            
            {renderOrderSummary()}
            
            <div className="flex space-x-4 mt-6">
              <Button 
                variant="outline" 
                className="w-1/2"
                onClick={() => setCheckoutStep(2)}
              >
                Back
              </Button>
              <Button 
                className="w-1/2 bg-restaurant-red hover:bg-red-700"
                onClick={placeOrder}
              >
                Place Order
              </Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom py-12">
        <h1 className="text-3xl font-bold mb-4 text-center">Online Ordering</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Order your favorite dishes for pickup or delivery. Fast, fresh, and convenient!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="popular" value={activeTab} onValueChange={setActiveTab}>
              <div className="mb-6">
                <TabsList className="bg-restaurant-cream overflow-x-auto max-w-full flex flex-nowrap sm:flex-wrap">
                  {menuCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="data-[state=active]:bg-restaurant-red data-[state=active]:text-white"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  {renderMenuItems(category.id)}
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          {/* Order Summary Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {renderCheckoutSteps()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
