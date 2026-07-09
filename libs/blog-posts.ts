// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'standby-vs-portable-generator',
    title:    'Standby vs Portable Generator: Which Is Right for Your Waco Home?',
    excerpt:  'Automatic whole-home backup or a portable unit with interlock? Compare cost, convenience, fuel, and safety for Central Texas outages.',
    category: 'Buying Guide',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Standby vs portable generator comparison for Waco TX homeowners',
    featured: true,
  },
  {
    slug:     'how-to-size-home-generator',
    title:    'How to Size a Home Generator for Central Texas Loads',
    excerpt:  'HVAC, well pumps, freezers, and medical equipment — an honest guide to load calculations so you do not overbuy or undersize.',
    category: 'Installation',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'How to size a home generator guide for Waco TX',
  },
  {
    slug:     'generator-maintenance-schedule',
    title:    'Generator Maintenance Schedule: Keep Your Backup Ready Year-Round',
    excerpt:  'Oil, filters, batteries, exercise cycles, and load bank testing — the maintenance checklist that prevents failed starts during storms.',
    category: 'Maintenance',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Generator maintenance schedule for Central Texas homeowners',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
