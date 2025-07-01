import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChevronDown, 
  Eye, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Star,
  Palette,
  Scroll,
  Brush,
  Send,
  Menu,
  Home,
  User,
  Image as ImageIcon,
  Info,
  MessageCircle
} from 'lucide-react';

const TezhibPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'inquiry'
  });

  // Intersection observer for navigation
  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.3 });
  const [processRef, processInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (homeInView) setActiveSection('home');
    else if (aboutInView) setActiveSection('about');
    else if (galleryInView) setActiveSection('gallery');
    else if (processInView) setActiveSection('process');
    else if (contactInView) setActiveSection('contact');
  }, [homeInView, aboutInView, galleryInView, processInView, contactInView]);

  const navItems = [
    { id: 'home', label: 'Startseite', icon: Home },
    { id: 'about', label: 'Über mich', icon: User },
    { id: 'gallery', label: 'Galerie', icon: ImageIcon },
    { id: 'process', label: 'Prozess', icon: Info },
    { id: 'contact', label: 'Kontakt', icon: MessageCircle },
  ];

  const artworkCategories = [
    {
      id: 'manuscripts',
      title: 'Illuminierte Handschriften',
      description: 'Traditionelle Koran- und Literaturhandschriften mit kunstvoller Goldblatt-Illumination',
      images: [
        'https://images.unsplash.com/photo-1720701575003-51dafcf39cb4',
        'https://images.unsplash.com/photo-1720700955633-63e99df2a092',
        'https://images.pexels.com/photos/18491910/pexels-photo-18491910.jpeg'
      ]
    },
    {
      id: 'geometric',
      title: 'Geometrische Muster',
      description: 'Komplexe geometrische Designs nach traditionellen islamischen Kunstprinzipien',
      images: [
        'https://images.pexels.com/photos/32369474/pexels-photo-32369474.jpeg',
        'https://images.pexels.com/photos/29061067/pexels-photo-29061067.jpeg',
        'https://images.pexels.com/photos/32566166/pexels-photo-32566166.jpeg'
      ]
    },
    {
      id: 'calligraphy',
      title: 'Kalligrafische Kunst',
      description: 'Wunderschöne arabische und osmanisch-türkische Kalligrafie mit dekorativen Elementen',
      images: [
        'https://images.pexels.com/photos/6207365/pexels-photo-6207365.jpeg',
        'https://images.pexels.com/photos/9524087/pexels-photo-9524087.jpeg',
        'https://images.pexels.com/photos/32802854/pexels-photo-32802854.jpeg'
      ]
    }
  ];

  const processSteps = [
    {
      title: 'Design & Planung',
      description: 'Sorgfältiges Studium traditioneller Muster und Erstellung detaillierter Skizzen',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1614247262122-cf8f4643541f'
    },
    {
      title: 'Vorbereitung',
      description: 'Vorbereitung des Manuskriptpapiers und Mischen traditioneller Pigmente',
      icon: Scroll,
      image: 'https://images.pexels.com/photos/9524087/pexels-photo-9524087.jpeg'
    },
    {
      title: 'Goldblatt-Anwendung',
      description: 'Gewissenhafte Anwendung von Goldblatt mit traditionellen Techniken',
      icon: Brush,
      image: 'https://images.pexels.com/photos/6207365/pexels-photo-6207365.jpeg'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Formular übermittelt:', formData);
    alert('Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.');
    setFormData({ name: '', email: '', message: '', type: 'anfrage' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-ottoman-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-ottoman-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="font-elegant text-2xl font-bold text-ottoman-deep-blue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Tezhib Künstlerin
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-ottoman-gold bg-ottoman-gold/10'
                        : 'text-ottoman-deep-blue hover:text-ottoman-gold'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-ottoman-deep-blue hover:bg-ottoman-gold/10"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-ottoman-gold/20"
            >
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'text-ottoman-gold bg-ottoman-gold/10'
                          : 'text-ottoman-deep-blue hover:text-ottoman-gold'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={homeRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(128, 0, 32, 0.7)), url('https://images.unsplash.com/photo-1563033963-2d301e19533c')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="absolute inset-0 ottoman-pattern opacity-30" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-elegant text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Die Kunst des
              <span className="text-ottoman-gold block">Tezhib</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Bewahrung der alten osmanischen Tradition illuminierter Handschriften durch 
              kunstvolle Goldblatt-Kunst und zeitlose Schönheit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection('gallery')}
                className="bg-ottoman-gold hover:bg-ottoman-deep-gold text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Portfolio ansehen
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-ottoman-deep-blue px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Auftrag erteilen
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-elegant text-4xl md:text-5xl font-bold text-ottoman-deep-blue mb-6">
              Über die Künstlerin
            </h2>
            <div className="w-24 h-1 bg-ottoman-gold mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1614247262122-cf8f4643541f"
                alt="Artist at work"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-elegant text-3xl font-semibold text-ottoman-deep-blue">
                Bewahrung alter Traditionen
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mit über 15 Jahren Hingabe zur Kunst des Tezhib spezialisiere ich mich auf die Schaffung 
                authentischer osmanischer illuminierter Handschriften. Meine Arbeit verbindet traditionelle 
                Techniken, die über Generationen weitergegeben wurden, mit zeitgenössischer künstlerischer Vision.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Jedes Stück wird gewissenhaft mit echtem Goldblatt, natürlichen Pigmenten und 
                bewährten Methoden gefertigt. Von Koranversen bis zur klassischen Poesie erzählt jedes 
                Manuskript eine Geschichte des kulturellen Erbes und künstlerischer Exzellenz.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-ottoman-gold mb-2">15+</div>
                  <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ottoman-gold mb-2">200+</div>
                  <div className="text-sm text-gray-600">Kunstwerke erschaffen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ottoman-gold mb-2">50+</div>
                  <div className="text-sm text-gray-600">Zufriedene Kunden</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" ref={galleryRef} className="py-20 bg-ottoman-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-elegant text-4xl md:text-5xl font-bold text-ottoman-deep-blue mb-6">
              Galerie
            </h2>
            <div className="w-24 h-1 bg-ottoman-gold mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Entdecken Sie meine Sammlung illuminierter Handschriften, geometrischer Muster und kalligrafischer Kunstwerke
            </p>
          </motion.div>

          <div className="space-y-16">
            {artworkCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <h3 className="font-elegant text-3xl font-semibold text-ottoman-deep-blue mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      className="relative group cursor-pointer hover-lift"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${category.title} ${imageIndex + 1}`}
                        className="w-full h-64 object-cover rounded-xl shadow-lg transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-ottoman-deep-blue/70 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-center justify-center">
                        <div className="text-center text-white">
                          <Eye size={40} className="mx-auto mb-2" />
                          <p className="text-sm font-medium">Klicken zum Anzeigen</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" ref={processRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-elegant text-4xl md:text-5xl font-bold text-ottoman-deep-blue mb-6">
              Der kreative Prozess
            </h2>
            <div className="w-24 h-1 bg-ottoman-gold mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Jedes Kunstwerk entsteht durch einen gewissenhaften Prozess, der traditionelle Techniken ehrt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-ottoman-gold p-3 rounded-full shadow-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                  <h3 className="font-elegant text-2xl font-semibold text-ottoman-deep-blue mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-ottoman-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-elegant text-4xl md:text-5xl font-bold text-ottoman-deep-blue mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-ottoman-gold mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Interested in commissioning a piece or learning more about Tezhib art? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="font-elegant text-2xl font-semibold text-ottoman-deep-blue mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ottoman-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ottoman-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Type of Inquiry</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ottoman-gold focus:border-transparent"
                  >
                    <option value="inquiry">General Inquiry</option>
                    <option value="commission">Commission Request</option>
                    <option value="workshop">Workshop Information</option>
                    <option value="collaboration">Collaboration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ottoman-gold focus:border-transparent"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-ottoman-gold hover:bg-ottoman-deep-gold text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="font-elegant text-2xl font-semibold text-ottoman-deep-blue mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-ottoman-gold/10 p-3 rounded-lg">
                      <Mail className="text-ottoman-gold" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">tezhib.artist@example.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-ottoman-gold/10 p-3 rounded-lg">
                      <Phone className="text-ottoman-gold" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-ottoman-gold/10 p-3 rounded-lg">
                      <MapPin className="text-ottoman-gold" size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Studio</div>
                      <div className="text-gray-600">New York, NY</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-ottoman rounded-2xl shadow-xl p-8 text-white">
                <h3 className="font-elegant text-2xl font-semibold mb-6">
                  Follow My Work
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors duration-300">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors duration-300">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors duration-300">
                    <Twitter size={24} />
                  </a>
                </div>
                <p className="mt-6 opacity-90">
                  Stay updated with my latest artworks and exhibitions. Join a community of art enthusiasts who appreciate the beauty of traditional Islamic art.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ottoman-deep-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-elegant text-3xl font-bold mb-4 text-ottoman-gold">
              Tezhib Artist
            </div>
            <p className="text-ottoman-cream/80 mb-6">
              Preserving the ancient art of Ottoman illumination for future generations
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-ottoman-cream/60 hover:text-ottoman-gold transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-ottoman-cream/60 hover:text-ottoman-gold transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-ottoman-cream/60 hover:text-ottoman-gold transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
            <div className="border-t border-ottoman-gold/20 pt-8">
              <p className="text-ottoman-cream/60">
                © 2025 Tezhib Artist. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Artwork detail"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
              >
                <X className="text-white" size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TezhibPortfolio;