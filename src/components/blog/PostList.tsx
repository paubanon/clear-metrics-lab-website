"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { GlassCard } from "../ui/GlassCard";
import { Calendar, Tag } from "lucide-react";

interface Post {
    slug: string;
    title: string;
    description: string;
    pubDate: string;
    appSlug: string;
    tags: string[];
}

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    const formattedDate = new Date(post.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <a href={`/blog/${post.slug}`} className="block">
            <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-2 text-sm text-text-muted mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.pubDate}>{formattedDate}</time>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                </h3>

                <p className="text-text-muted text-sm mb-4 line-clamp-2">
                    {post.description}
                </p>

                {post.tags.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                        <Tag className="w-3 h-3 text-text-muted" />
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </GlassCard>
        </a>
    );
}

interface PostListProps {
    posts: Post[];
}

export function PostList({ posts }: PostListProps) {
    if (posts.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-text-muted">No posts found.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 0.05}>
                    <PostCard post={post} />
                </ScrollReveal>
            ))}
        </div>
    );
}
