import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from 'react-markdown';
import {
    Calendar,
    User,
    Clock,
    ArrowLeft,
    Share2,
    Facebook,
    Twitter,
    Linkedin
} from 'lucide-react';

const samplePosts = {
    '1': {
        id: '1',
        title: '10 Essential Tips for a Healthy Heart',
        slug: 'healthy-heart-tips',
        excerpt: 'Learn about lifestyle changes and dietary habits that can help maintain a healthy heart.',
        content: `
## Introduction

Heart disease remains one of the leading causes of death worldwide. However, many heart conditions can be prevented through lifestyle changes and proper care.

## 1. Eat a Heart-Healthy Diet

Focus on eating:
- Fruits and vegetables
- Whole grains
- Lean proteins
- Healthy fats like olive oil

## 2. Exercise Regularly

Aim for at least 150 minutes of moderate exercise per week. This could include:
- Brisk walking
- Swimming
- Cycling
- Dancing

## 3. Maintain a Healthy Weight

Being overweight increases your risk of heart disease. Work with your doctor to determine your ideal weight.

## 4. Don't Smoke

Smoking is a major risk factor for heart disease. If you smoke, talk to your doctor about quitting.

## 5. Limit Alcohol

If you drink alcohol, do so in moderation. This means up to one drink a day for women and up to two drinks a day for men.

## 6. Manage Stress

Chronic stress can contribute to heart disease. Find healthy ways to manage stress, such as:
- Meditation
- Deep breathing
- Yoga
- Hobbies you enjoy

## 7. Get Enough Sleep

Poor sleep quality is linked to heart disease. Aim for 7-9 hours of quality sleep each night.

## 8. Control Blood Pressure

High blood pressure is a major risk factor. Have your blood pressure checked regularly and take medications as prescribed.

## 9. Manage Diabetes

If you have diabetes, controlling your blood sugar is crucial for heart health.

## 10. Regular Health Checkups

Visit your doctor regularly for checkups and screenings.

## Conclusion

Taking care of your heart doesn't have to be complicated. Small changes in your daily habits can make a big difference in your heart health.

*For personalized advice, consult with our cardiologists at Sravani Hospital.*
    `,
        category: 'health-tips',
        featured_image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=400&fit=crop',
        author_name: 'Dr. Lakshmi Devi',
        author_image: 'https://sravanihospital.org/img/doctor-5.jpg',
        created_date: '2024-01-15',
        views: 1250
    },
    '2': {
        id: '2',
        title: 'Understanding and Managing Diabetes',
        slug: 'managing-diabetes',
        excerpt: 'A comprehensive guide to understanding diabetes, its symptoms, and effective management strategies.',
        content: `
## What is Diabetes?

Diabetes is a chronic condition that affects how your body processes blood sugar (glucose).

## Types of Diabetes

### Type 1 Diabetes
An autoimmune condition where the body doesn't produce insulin.

### Type 2 Diabetes
The most common form, where the body doesn't use insulin properly.

### Gestational Diabetes
Develops during pregnancy and usually resolves after delivery.

## Symptoms to Watch For

- Increased thirst and urination
- Unexplained weight loss
- Fatigue
- Blurred vision
- Slow-healing wounds

## Management Tips

1. **Monitor blood sugar regularly**
2. **Take medications as prescribed**
3. **Follow a balanced diet**
4. **Exercise regularly**
5. **Maintain a healthy weight**

## When to See a Doctor

If you experience any symptoms or have risk factors for diabetes, consult with our specialists at Sravani Hospital.
    `,
        category: 'health-tips',
        featured_image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=400&fit=crop',
        author_name: 'Dr. Suresh Reddy',
        author_image: 'https://sravanihospital.org/img/doctor-5.jpg',
        created_date: '2024-01-12',
        views: 980
    },
    '3': {
        id: '3',
        title: 'Pregnancy Care: A Trimester-by-Trimester Guide',
        slug: 'pregnancy-care-guide',
        excerpt: 'Essential tips and precautions for expectant mothers throughout their pregnancy journey.',
        content: `
## First Trimester (Weeks 1-12)

### What to Expect
- Morning sickness
- Fatigue
- Breast tenderness

### Tips
- Start taking prenatal vitamins
- Avoid alcohol and smoking
- Get plenty of rest

## Second Trimester (Weeks 13-26)

### What to Expect
- Baby bump becomes visible
- Increased energy
- Baby movements begin

### Tips
- Continue regular checkups
- Stay active with gentle exercise
- Eat a balanced diet

## Third Trimester (Weeks 27-40)

### What to Expect
- Increased discomfort
- Frequent urination
- Braxton Hicks contractions

### Tips
- Prepare for delivery
- Pack your hospital bag
- Attend childbirth classes

## Conclusion

Regular prenatal care is essential for a healthy pregnancy. Visit our gynaecology department at Sravani Hospital for comprehensive maternity care.
    `,
        category: 'health-tips',
        featured_image: 'https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=800&h=400&fit=crop',
        author_name: 'Dr. Priya Sharma',
        author_image: 'https://sravanihospital.org/img/doctor-3.jpg',
        created_date: '2024-01-10',
        views: 1520
    }
};

export default function BlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id') || '1';

    const { data: posts = [] } = useQuery({
        queryKey: ['blogPost', postId],
        queryFn: () => base44.entities.BlogPost.list(),
    });

    const dbPost = posts.find(p => p.id === postId);
    const post = dbPost || samplePosts[postId] || samplePosts['1'];

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const shareUrl = window.location.href;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0">
                    <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="relative max-w-4xl mx-auto px-4 h-full flex flex-col justify-end pb-12">
                    <Link to={createPageUrl('Blog')} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <Badge className="w-fit mb-4 bg-blue-600 text-white capitalize">
                        {post.category?.replace('-', ' ')}
                    </Badge>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                        {post.title}
                    </motion.h1>

                    <div className="flex flex-wrap items-center gap-6 text-white/80">
                        <div className="flex items-center gap-2">
                            <img
                                src={post.author_image || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=50&h=50&fit=crop'}
                                alt={post.author_name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <span>{post.author_name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.created_date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>5 min read</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Share Sidebar */}
                        <div className="hidden lg:block">
                            <div className="sticky top-24">
                                <p className="text-sm font-medium text-gray-600 mb-4">Share this article</p>
                                <div className="flex flex-col gap-2">
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-blue-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(shareUrl);
                                            // Optional: Show toast
                                        }}
                                        className="w-10 h-10 bg-gray-600 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                                    >
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                                <article className="prose prose-lg max-w-none prose-blue">
                                    <ReactMarkdown>{post.content}</ReactMarkdown>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
