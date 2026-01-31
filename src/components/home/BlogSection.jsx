import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, BookOpen } from 'lucide-react';

const samplePosts = [
    {
        id: '1',
        title: '10 Tips for a Healthy Heart',
        excerpt: 'Learn essential lifestyle changes and dietary habits that can help maintain a healthy heart and prevent cardiovascular diseases.',
        category: 'health-tips',
        featured_image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=250&fit=crop',
        author_name: 'Dr. Lakshmi Devi',
        created_date: '2024-01-15'
    },
    {
        id: '2',
        title: 'Understanding Diabetes Management',
        excerpt: 'A comprehensive guide to managing diabetes through diet, exercise, and proper medication under medical supervision.',
        category: 'lifestyle',
        featured_image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop',
        author_name: 'Dr. Rajesh Kumar',
        created_date: '2024-01-10'
    },
    {
        id: '3',
        title: 'Pregnancy Care: First Trimester Guide',
        excerpt: 'Essential tips and precautions for expectant mothers during the crucial first trimester of pregnancy.',
        category: 'nutrition',
        featured_image: 'https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=400&h=250&fit=crop',
        author_name: 'Dr. Priya Sharma',
        created_date: '2024-01-05'
    },
];

export default function BlogSection({ posts = samplePosts }) {
    const displayPosts = posts.length > 0 ? posts.slice(0, 3) : samplePosts;

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                            <BookOpen className="w-4 h-4" />
                            Health Blog
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Latest Health Articles
                        </h2>
                        <p className="text-gray-600 text-lg max-w-xl">
                            Stay informed with the latest health tips, medical news, and expert advice
                            from our team of specialists.
                        </p>
                    </motion.div>

                    <Link to={createPageUrl('Blog')}>
                        <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                            View All Articles
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {displayPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link to={createPageUrl(`BlogPost?id=${post.id}`)}>
                                <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300">
                                    {/* Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={post.featured_image}
                                            alt={post.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-blue-600 capitalize">
                                                {post.category.replace('-', ' ')}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <User className="w-3 h-3" />
                                                <span>{post.author_name}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3 h-3" />
                                                <span>{formatDate(post.created_date)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}