
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Utensils, Clock, Award, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-screen flex items-center justify-center bg-cover bg-center relative" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1555992336-03a23c7b20ee?q=80&w=2000")',
          backgroundPosition: 'center 25%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 animate-fade-in">
            Welcome to USA Family Restaurant
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Bringing families together with classic American comfort food since 1985
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/menu" className="btn-primary">
              View Our Menu
            </Link>
            <Link to="/order" className="btn-secondary">
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg mb-6">
                Founded in 1985 by the Johnson family, USA Family Restaurant began as a small diner with a big dream: to create a place where families could enjoy quality American comfort food in a welcoming atmosphere.
              </p>
              <p className="text-lg mb-6">
                Decades later, we continue to serve our community with the same dedication to quality ingredients, homemade recipes, and warm, friendly service that makes everyone feel like family.
              </p>
              <Link to="/about" className="inline-flex items-center font-medium text-restaurant-red hover:underline">
                Learn more about our story
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070" 
                alt="Restaurant interior" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="bg-restaurant-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="text-restaurant-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Food</h3>
              <p className="text-gray-600">
                We use only fresh, high-quality ingredients in all our dishes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="bg-restaurant-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-restaurant-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Family Friendly</h3>
              <p className="text-gray-600">
                A welcoming environment for families and groups of all sizes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="bg-restaurant-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-restaurant-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Award Winning</h3>
              <p className="text-gray-600">
                Recognized for our exceptional food and service in the community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="bg-restaurant-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-restaurant-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Service</h3>
              <p className="text-gray-600">
                Quick service without compromising on quality or experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Popular Dishes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Try our customer favorites that keep people coming back for more
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-restaurant-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965" 
                alt="Classic Burger" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Classic Burger</h3>
                  <span className="font-bold text-restaurant-red">$12.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Our signature beef patty with cheese, lettuce, tomato, pickles and special sauce on a toasted brioche bun.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(124 reviews)</span>
                </div>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-restaurant-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032" 
                alt="Country Breakfast" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Country Breakfast</h3>
                  <span className="font-bold text-restaurant-red">$10.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Three eggs any style with bacon, sausage, hash browns, and toast. Served with pancakes on the side.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(98 reviews)</span>
                </div>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-restaurant-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=2187" 
                alt="Homestyle Meatloaf" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Homestyle Meatloaf</h3>
                  <span className="font-bold text-restaurant-red">$14.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Traditional meatloaf with our secret blend of spices, served with mashed potatoes and seasonal vegetables.
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">(87 reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="section-padding bg-cover bg-center relative" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070")',
        }}
      >
        <div className="container-custom relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white/90 italic mb-6">
                "The best family restaurant in town! The portions are generous, and the staff always makes us feel welcome. My kids love coming here every weekend."
              </p>
              <div className="flex items-center">
                <div className="bg-restaurant-red h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">S</div>
                <div>
                  <h4 className="font-bold text-white">Sarah Johnson</h4>
                  <p className="text-white/70 text-sm">Regular Customer</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white/90 italic mb-6">
                "Their breakfast menu is outstanding. I've been coming here for years and have never been disappointed. Great value for money and friendly service."
              </p>
              <div className="flex items-center">
                <div className="bg-restaurant-blue h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">M</div>
                <div>
                  <h4 className="font-bold text-white">Mike Reynolds</h4>
                  <p className="text-white/70 text-sm">Local Resident</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white/90 italic mb-6">
                "The online ordering system is so convenient! Food is always hot and fresh when it arrives. Their classic burger is absolutely the best in town."
              </p>
              <div className="flex items-center">
                <div className="bg-restaurant-red h-10 w-10 rounded-full flex items-center justify-center text-white font-bold mr-3">J</div>
                <div>
                  <h4 className="font-bold text-white">Jennifer Smith</h4>
                  <p className="text-white/70 text-sm">Food Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-restaurant-blue">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Order?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Enjoy our delicious meals in the comfort of your home. Order online for pickup or delivery.
          </p>
          <Link to="/order" className="btn-primary text-lg px-8 py-4">
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
