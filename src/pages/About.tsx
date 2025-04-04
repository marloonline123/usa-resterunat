
import React from 'react';
import { Award, Clock, User, Users, Utensils } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[40vh] md:h-[50vh]" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1599458448510-59aecaea4752?q=80&w=2070")',
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-xl mx-auto">
              A family tradition of quality food and warm hospitality since 1985
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Beginning</h2>
              <p className="text-lg mb-4">
                USA Family Restaurant was founded in 1985 by John and Mary Johnson, who had a simple dream: to create a place where families could enjoy quality American comfort food in a welcoming atmosphere.
              </p>
              <p className="text-lg mb-4">
                What started as a small diner with just 10 tables has grown into a beloved local institution, serving generations of families in our community. Through economic ups and downs, our commitment to quality and service has never wavered.
              </p>
              <p className="text-lg">
                Today, the restaurant is run by the second generation of the Johnson family, who continue to honor the traditions and recipes that made us a community favorite, while also bringing fresh ideas to keep our menu exciting.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534650075489-c85c43591f46?q=80&w=2070" 
                alt="Restaurant founders" 
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-restaurant-cream">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-restaurant-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Food</h3>
              <p className="text-gray-600">
                We use only the freshest ingredients and prepare everything from scratch daily.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-restaurant-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Family First</h3>
              <p className="text-gray-600">
                We treat our customers like family and create a welcoming environment for all.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-restaurant-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p className="text-gray-600">
                We actively support local causes and strive to be a positive force in our community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-restaurant-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consistent Service</h3>
              <p className="text-gray-600">
                We pride ourselves on providing reliable, friendly service with every visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887" 
                  alt="Robert Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Robert Johnson</h3>
              <p className="text-restaurant-red font-medium mb-3">Owner & Executive Chef</p>
              <p className="text-gray-600">
                Son of the founders, Robert has been in the restaurant since he was tall enough to reach the counter. He trained at the Culinary Institute of America before returning to lead the family business.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-restaurant-red font-medium mb-3">General Manager</p>
              <p className="text-gray-600">
                With a degree in hospitality management, Sarah ensures that everything runs smoothly and that every customer leaves satisfied. She's known for remembering regulars' names and orders.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1931" 
                  alt="Michael Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Rodriguez</h3>
              <p className="text-restaurant-red font-medium mb-3">Head Chef</p>
              <p className="text-gray-600">
                Michael brings 15 years of culinary expertise to our kitchen. He's passionate about traditional American cuisine with contemporary twists that keep our menu fresh and exciting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-restaurant-blue text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Customers Love Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <p className="italic mb-6">
                "I've been coming here since I was a kid, and now I bring my own children. The food is consistently excellent, and it feels like home. Their pancakes are still the best in town!"
              </p>
              <div className="flex items-center">
                <div className="mr-3 font-bold">— James Wilson</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <p className="italic mb-6">
                "When we moved to the area five years ago, USA Family Restaurant was the first place that made us feel welcome. The staff remembers us, and the food is always delicious. It's our Friday night tradition now."
              </p>
              <div className="flex items-center">
                <div className="mr-3 font-bold">— Maria Garcia</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <p className="italic mb-6">
                "As a food critic, I appreciate places that maintain quality and tradition. This restaurant does both exceptionally well, while still innovating. Their seasonal specials are always worth trying."
              </p>
              <div className="flex items-center">
                <div className="mr-3 font-bold">— Thomas Lee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-restaurant-cream p-6 rounded-lg text-center">
              <div className="bg-restaurant-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Family Restaurant</h3>
              <p className="text-gray-600">
                County Food Awards, 2022
              </p>
            </div>
            <div className="bg-restaurant-cream p-6 rounded-lg text-center">
              <div className="bg-restaurant-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Breakfast</h3>
              <p className="text-gray-600">
                Local Dining Guide, 2023
              </p>
            </div>
            <div className="bg-restaurant-cream p-6 rounded-lg text-center">
              <div className="bg-restaurant-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Service Award</h3>
              <p className="text-gray-600">
                Chamber of Commerce, 2021
              </p>
            </div>
            <div className="bg-restaurant-cream p-6 rounded-lg text-center">
              <div className="bg-restaurant-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">35 Years of Excellence</h3>
              <p className="text-gray-600">
                Serving our community since 1985
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
