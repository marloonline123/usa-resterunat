
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from 'lucide-react';

const MenuItem = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {item.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <span className="font-bold text-restaurant-red">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mb-4">{item.description}</p>
        {item.popular && (
          <div className="flex items-center mb-4">
            <span className="bg-restaurant-red/10 text-restaurant-red text-xs font-semibold px-2.5 py-1 rounded flex items-center">
              <Star className="h-3 w-3 fill-current mr-1" /> Popular
            </span>
          </div>
        )}
        <button className="w-full py-2 bg-restaurant-cream text-restaurant-charcoal font-medium rounded hover:bg-restaurant-red hover:text-white transition-colors">
          Add to Order
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("breakfast");

  const menuCategories = [
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "dinner", label: "Dinner" },
    { id: "sides", label: "Sides" },
    { id: "desserts", label: "Desserts" },
    { id: "drinks", label: "Drinks" },
  ];

  const menuItems = {
    breakfast: [
      {
        id: 1,
        name: "Country Breakfast",
        description: "Three eggs any style with bacon, sausage, hash browns, and toast.",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032",
        popular: true,
      },
      {
        id: 2,
        name: "Pancake Stack",
        description: "Fluffy pancakes served with butter and maple syrup. Add blueberries or chocolate chips.",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1575853121743-60c24f0a7502?q=80&w=2070",
        popular: false,
      },
      {
        id: 3,
        name: "Denver Omelette",
        description: "Three egg omelette with ham, bell peppers, onions, and cheddar cheese. Served with toast and hash browns.",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?q=80&w=2070",
        popular: false,
      },
      {
        id: 4,
        name: "Avocado Toast",
        description: "Toasted artisan bread with smashed avocado, cherry tomatoes, and a poached egg.",
        price: 8.49,
        image: "https://images.unsplash.com/photo-1603046891744-76e6300ec8f2?q=80&w=1974",
        popular: true,
      },
      {
        id: 5,
        name: "Belgian Waffle",
        description: "Crispy outside, fluffy inside Belgian waffle topped with fresh berries and whipped cream.",
        price: 9.49,
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f35b6?q=80&w=2025",
        popular: false,
      },
      {
        id: 6,
        name: "Breakfast Burrito",
        description: "Scrambled eggs, breakfast sausage, bell peppers, onions, and cheese wrapped in a warm tortilla.",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1887",
        popular: false,
      },
    ],
    lunch: [
      {
        id: 7,
        name: "Classic Burger",
        description: "Beef patty with cheese, lettuce, tomato, pickles and special sauce on a toasted brioche bun.",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965",
        popular: true,
      },
      {
        id: 8,
        name: "Turkey Club Sandwich",
        description: "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo on toasted bread.",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=2070",
        popular: false,
      },
      {
        id: 9,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing. Add grilled chicken for $3.",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070",
        popular: false,
      },
      {
        id: 10,
        name: "Philly Cheesesteak",
        description: "Thinly sliced beef with sautéed onions and peppers, topped with melted provolone on a hoagie roll.",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1626229679791-256cf112b736?q=80&w=1887",
        popular: true,
      },
    ],
    dinner: [
      {
        id: 11,
        name: "Homestyle Meatloaf",
        description: "Traditional meatloaf with our secret blend of spices, served with mashed potatoes and seasonal vegetables.",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=2187",
        popular: true,
      },
      {
        id: 12,
        name: "Grilled Salmon",
        description: "Fresh salmon fillet grilled to perfection, served with rice pilaf and steamed broccoli.",
        price: 17.99,
        image: "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?q=80&w=1974",
        popular: false,
      },
      {
        id: 13,
        name: "Chicken Parmesan",
        description: "Breaded chicken breast topped with marinara sauce and melted mozzarella. Served with spaghetti.",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=1964",
        popular: false,
      },
      {
        id: 14,
        name: "BBQ Ribs",
        description: "Slow-cooked baby back ribs with our house BBQ sauce. Served with fries and coleslaw.",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
        popular: true,
      },
    ],
    sides: [
      {
        id: 15,
        name: "French Fries",
        description: "Crispy golden fries seasoned with our special blend of spices.",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1935",
        popular: false,
      },
      {
        id: 16,
        name: "Onion Rings",
        description: "Beer battered onion rings, fried until golden and crispy.",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=2069",
        popular: false,
      },
      {
        id: 17,
        name: "Mac & Cheese",
        description: "Creamy macaroni and cheese with a crispy breadcrumb topping.",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1543352632-9081f6261215?q=80&w=2070",
        popular: true,
      },
    ],
    desserts: [
      {
        id: 18,
        name: "Apple Pie",
        description: "Classic apple pie with a flaky crust. Served warm with vanilla ice cream.",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=1974",
        popular: true,
      },
      {
        id: 19,
        name: "Chocolate Brownie Sundae",
        description: "Warm chocolate brownie topped with vanilla ice cream, chocolate sauce, and whipped cream.",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2127",
        popular: false,
      },
    ],
    drinks: [
      {
        id: 20,
        name: "Fresh Lemonade",
        description: "Freshly squeezed lemonade with just the right amount of sweetness.",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=1887",
        popular: false,
      },
      {
        id: 21,
        name: "Classic Milkshake",
        description: "Thick and creamy milkshake available in chocolate, vanilla, or strawberry.",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1887",
        popular: true,
      },
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container-custom py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide variety of delicious home-style American dishes, made with quality ingredients and served with love.
          </p>
        </div>

        <Tabs defaultValue="breakfast" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems[category.id].map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
