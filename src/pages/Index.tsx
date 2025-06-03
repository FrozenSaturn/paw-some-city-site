
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Users, MapPin, Star, Menu, X, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    role: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the movement! 🐾",
      description: `Thanks ${formData.name}! We'll be in touch soon about volunteer opportunities in ${formData.city}.`,
    });
    setFormData({ name: '', city: '', role: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const petCards = [
    { name: "Buddy", breed: "Golden Retriever", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=300&fit=crop", age: "3 years" },
    { name: "Luna", breed: "Tabby Cat", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop", age: "2 years" },
    { name: "Max", breed: "German Shepherd", image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=300&h=300&fit=crop", age: "4 years" },
    { name: "Mia", breed: "Persian Cat", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=300&fit=crop", age: "1 year" },
    { name: "Charlie", breed: "Labrador", image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop", age: "5 years" },
    { name: "Whiskers", breed: "Maine Coon", image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=300&h=300&fit=crop", age: "3 years" }
  ];

  const impactStories = [
    {
      title: "Downtown Dog Parks Project",
      description: "We helped create 15 new dog parks across the city center, giving urban pets safe spaces to play and socialize.",
      icon: "🏙️",
      metric: "15 Parks Created"
    },
    {
      title: "Pet-Friendly Housing Initiative",
      description: "Our advocacy led to new policies allowing pets in 200+ previously restricted housing units.",
      icon: "🏠",
      metric: "200+ Homes Opened"
    },
    {
      title: "Community Adoption Events",
      description: "Through monthly adoption drives, we've helped 500+ pets find their forever families this year.",
      icon: "❤️",
      metric: "500+ Adoptions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warmgray via-white to-mint/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-poppins font-bold text-coral">
              🐾 PawCity
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="font-inter text-gray-700 hover:text-coral transition-colors">Home</button>
              <button onClick={() => scrollToSection('volunteer')} className="font-inter text-gray-700 hover:text-coral transition-colors">Volunteer</button>
              <button onClick={() => scrollToSection('impact')} className="font-inter text-gray-700 hover:text-coral transition-colors">Impact</button>
              <button onClick={() => scrollToSection('adopt')} className="font-inter text-gray-700 hover:text-coral transition-colors">Adopt</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="text-coral" /> : <Menu className="text-coral" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-4">
                <button onClick={() => scrollToSection('home')} className="font-inter text-gray-700 hover:text-coral transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('volunteer')} className="font-inter text-gray-700 hover:text-coral transition-colors text-left">Volunteer</button>
                <button onClick={() => scrollToSection('impact')} className="font-inter text-gray-700 hover:text-coral transition-colors text-left">Impact</button>
                <button onClick={() => scrollToSection('adopt')} className="font-inter text-gray-700 hover:text-coral transition-colors text-left">Adopt</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-coral/20 via-mint/20 to-skyblue/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold text-gray-800 mb-6">
              Making Cities 
              <span className="text-coral block animate-bounce-gentle">Paw-some!</span>
            </h1>
            <p className="text-xl md:text-2xl font-inter text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our mission to create pet-friendly communities where every furry friend feels at home 🐾
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('volunteer')}
                className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Join the Movement <ArrowRight className="ml-2" />
              </Button>
              <Button 
                onClick={() => scrollToSection('adopt')}
                variant="outline"
                className="border-mint text-mint hover:bg-mint hover:text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg transform hover:scale-105 transition-all duration-300"
              >
                Adopt a Pet <Heart className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-paw-wave">🐾</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-bounce-gentle">🐕</div>
        <div className="absolute top-1/2 left-20 text-5xl animate-paw-wave" style={{animationDelay: '0.5s'}}>🐱</div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
              Become a <span className="text-mint">Volunteer</span> 🙋‍♀️
            </h2>
            <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
              Ready to make a difference? Join thousands of volunteers making cities more pet-friendly, one paw at a time.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-0 bg-gradient-to-r from-white to-warmgray">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="w-full border-gray-300 focus:border-coral"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                      Your City
                    </label>
                    <Input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      placeholder="Which city are you in?"
                      className="w-full border-gray-300 focus:border-coral"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                      How would you like to help?
                    </label>
                    <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                      <SelectTrigger className="w-full border-gray-300 focus:border-coral">
                        <SelectValue placeholder="Choose your volunteer role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="advocacy">Policy Advocacy</SelectItem>
                        <SelectItem value="events">Event Organization</SelectItem>
                        <SelectItem value="rescue">Pet Rescue Support</SelectItem>
                        <SelectItem value="education">Community Education</SelectItem>
                        <SelectItem value="fundraising">Fundraising</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-coral to-mint hover:from-coral/90 hover:to-mint/90 text-white py-4 rounded-full font-poppins font-semibold text-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Join Our Pack! 🐾
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-20 bg-gradient-to-r from-mint/10 to-skyblue/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
              Our <span className="text-skyblue">Impact</span> Stories ⭐
            </h2>
            <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
              See how our community is transforming cities into pet-friendly havens across the nation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{story.icon}</div>
                  <h3 className="text-xl font-poppins font-bold text-gray-800 mb-3">{story.title}</h3>
                  <p className="font-inter text-gray-600 mb-4">{story.description}</p>
                  <div className="bg-gradient-to-r from-coral to-mint text-white px-4 py-2 rounded-full font-semibold inline-block">
                    {story.metric}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Adoption Carousel */}
      <section id="adopt" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-6">
              Find Your <span className="text-coral">Furry Friend</span> 🐾
            </h2>
            <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
              These adorable pets are waiting for their forever homes. Could one of them be perfect for you?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {petCards.map((pet, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-warmgray">
                <div className="relative">
                  <img 
                    src={pet.image} 
                    alt={pet.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                    <Heart className="text-coral" size={20} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-2">{pet.name}</h3>
                  <p className="font-inter text-gray-600 mb-1">{pet.breed}</p>
                  <p className="font-inter text-gray-500 text-sm mb-4">{pet.age} old</p>
                  <Button className="w-full bg-gradient-to-r from-mint to-skyblue hover:from-mint/90 hover:to-skyblue/90 text-white rounded-full font-poppins font-semibold">
                    Adopt {pet.name} 💕
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-3xl font-poppins font-bold text-coral mb-4">🐾 PawCity</div>
          <p className="font-inter text-gray-300 mb-6">
            Making cities paw-some, one community at a time.
          </p>
          <div className="flex justify-center space-x-6 text-3xl">
            <span className="animate-paw-wave">🐶</span>
            <span className="animate-bounce-gentle">❤️</span>
            <span className="animate-paw-wave" style={{animationDelay: '0.5s'}}>🐱</span>
          </div>
          <p className="font-inter text-gray-400 mt-6 text-sm">
            © 2024 Pet-Friendly City Campaign. Made with ❤️ for our furry friends.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
