import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    Search,
    Calendar,
    User,
    Clock,
    ArrowRight,
    BookOpen
} from 'lucide-react';

const categories = [
    { value: 'all', label: 'All Articles' },
    { value: 'health-tips', label: 'Health Tips' },
    { value: 'nutrition', label: 'Nutrition' },
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'mental-health', label: 'Mental Health' },
    { value: 'news', label: 'Hospital News' },
];

const samplePosts = [
    {
        id: '1',
        title: '10 Essential Tips for a Healthy Heart',
        slug: 'healthy-heart-tips',
        excerpt: 'Learn about lifestyle changes and dietary habits that can help maintain a healthy heart and prevent cardiovascular diseases.',
        content: 'Full article content...',
        category: 'health-tips',
        featured_image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=400&fit=crop',
        author_name: 'Dr. Lakshmi Devi',
        created_date: '2024-01-15',
        is_featured: true
    },
    {
        id: '2',
        title: 'Understanding and Managing Diabetes',
        slug: 'managing-diabetes',
        excerpt: 'A comprehensive guide to understanding diabetes, its symptoms, and effective management strategies.',
        content: 'Full article content...',
        category: 'health-tips',
        featured_image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
        author_name: 'Dr. Suresh Reddy',
        created_date: '2024-01-12',
        is_featured: true
    },
    {
        id: '3',
        title: 'Pregnancy Care: A Trimester-by-Trimester Guide',
        slug: 'pregnancy-care-guide',
        excerpt: 'Essential tips and precautions for expectant mothers throughout their pregnancy journey.',
        content: 'Full article content...',
        category: 'health-tips',
        featured_image: 'https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&h=400&fit=crop',
        author_name: 'Dr. Priya Sharma',
        created_date: '2024-01-10',
        is_featured: false
    },
    {
        id: '4',
        title: 'The Importance of Regular Health Checkups',
        slug: 'importance-health-checkups',
        excerpt: 'Why preventive health checkups are crucial for early detection and better health outcomes.',
        content: 'Full article content...',
        category: 'lifestyle',
        featured_image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop',
        author_name: 'Dr. Rajesh Kumar',
        created_date: '2024-01-08',
        is_featured: false
    },
    {
        id: '5',
        title: 'Nutrition Tips for Strong Bones and Joints',
        slug: 'nutrition-strong-bones',
        excerpt: 'Discover the best foods and nutrients to maintain healthy bones and prevent orthopedic problems.',
        content: 'Full article content...',
        category: 'nutrition',
        featured_image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
        author_name: 'Dr. Venkat Rao',
        created_date: '2024-01-05',
        is_featured: false
    },
    {
        id: '6',
        title: 'Managing Stress: Tips for Mental Wellness',
        slug: 'managing-stress-mental-wellness',
        excerpt: 'Practical strategies to manage stress and maintain good mental health in today\'s busy world.',
        content: 'Full article content...',
        category: 'mental-health',
        featured_image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
        author_name: 'Dr. Kavitha Rani',
        created_date: '2024-01-03',
        is_featured: false
    },
];

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const { data: posts = [] } = useQuery({
        queryKey: ['blogPosts'],
        queryFn: () => base44.entities.BlogPost.list('-created_date'),
    });

    const displayPosts = posts.length > 0 ? posts : samplePosts;

    const filteredPosts = displayPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredPosts = filteredPosts.filter(p => p.is_featured).slice(0, 2);
    const regularPosts = filteredPosts.filter(p => !featuredPosts.includes(p));

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-orange-500 to-red-600 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-white"
                    >
                        <BookOpen className="w-16 h-16 mx-auto mb-6 text-orange-200" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Blog</h1>
                        <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                            Expert health advice, tips, and insights from our medical specialists
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search & Filters */}
            <section className="bg-white border-b sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat.value}
                                    onClick={() => setSelectedCategory(cat.value)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat.value
                                            ? 'bg-orange-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link to={createPageUrl(`BlogPost?id=${post.id}`)}>
                                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                                            <div className="relative h-64 overflow-hidden">
                                                <img
                                                    src={post.featured_image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <Badge className="bg-orange-600 text-white">Featured</Badge>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <Badge variant="outline" className="mb-3 capitalize">
                                                    {post.category?.replace('-', ' ')}
                                                </Badge>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                                                <div className="flex items-center justify-between text-sm text-gray-500">
                                                    <div className="flex items-center gap-2">
                                                        <User className="w-4 h-4" />
                                                        <span>{post.author_name}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-4 h-4" />
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
            )}

            {/* All Posts */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                        {selectedCategory === 'all' ? 'Latest Articles' : categories.find(c => c.value === selectedCategory)?.label}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link to={createPageUrl(`BlogPost?id=${post.id}`)}>
                                    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow group h-full">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={post.featured_image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <Badge variant="outline" className="mb-3 capitalize text-xs">
                                                {post.category?.replace('-', ' ')}
                                            </Badge>
                                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>{post.author_name}</span>
                                                <span>{formatDate(post.created_date)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12">
                            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600">No articles found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}