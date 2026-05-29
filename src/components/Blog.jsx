import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'The 2026 Guide to Studying in Japan: Best Universities for International Students',
    date: 'April 8, 2025',
    author: 'Study Abroad Expert',
    excerpt: 'Discover the top universities, scholarship opportunities, and application tips for studying in Japan in 2026.',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80',
    category: 'Study Guide',
  },
  {
    title: 'Japanese Scholarships Outlook: Record Funding Available for 2026',
    date: 'April 8, 2025',
    author: 'Scholarship Advisor',
    excerpt: 'Learn about the unprecedented scholarship opportunities for international students in Japan next year.',
    image: 'https://images.unsplash.com/photo-1496307653781-2f914cd6d18e?auto=format&fit=crop&w=800&q=80',
    category: 'Scholarships',
  },
  {
    title: 'The Ultimate Student Life Handbook: Living in Japan as an International Student',
    date: 'April 8, 2025',
    author: 'Student Life Expert',
    excerpt: 'Everything you need to know about accommodation, part-time jobs, and cultural adaptation in Japan.',
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=800&q=80',
    category: 'Student Life',
  },
];

const Blog = () => {
  return (
    <section className="py-24 bg-japan-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-japan-red font-semibold text-sm uppercase tracking-wider mb-2 block">
            STUDY ABROAD ARTICLES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Articles By Our Specialists
          </h2>
          <p className="text-japan-black/70 max-w-2xl mx-auto">
            Expert insights and tips for your educational journey in Japan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-japan-red text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <button className="text-japan-red font-semibold flex items-center gap-2 group">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;