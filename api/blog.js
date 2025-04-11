import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { basename, join } from 'path';
import matter from 'gray-matter'; // Popular library for parsing frontmatter
import slugify from 'slugify'; // For converting titles to URL-friendly slugs
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// export const PORT = 5000

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

function processMarkdownFile(filePath, isProduction) {
  const fileContent = readFileSync(filePath, 'utf8');
  
  const { data, content } = matter(fileContent);
  
  const slug = data.slug || slugify(data.title, { lower: true });
  
  const excerpt = data.excerpt || content.trim().slice(0, 150) + '...';
  
  const contentUrl = isProduction 
    ? `https://yourcdn.com/posts/${basename(filePath)}`
    : `/posts/${basename(filePath)}`;
  
  return {
    title: data.title,
    date: data.date,
    tags: data.tags || [],
    slug,
    excerpt,
    contentUrl
  };
}

function processAllPosts(postsDir, isProduction) {
  const files = readdirSync(postsDir).filter(file => file.endsWith('.md'));
  
  const posts = files.map(file => {
    return processMarkdownFile(join(postsDir, file), isProduction);
  });
  
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return { posts };
}

const blogData = processAllPosts(join(__dirname, 'posts'), process.env.NODE_ENV === 'production');

writeFileSync(join(__dirname, 'public', 'blog-data.json'), JSON.stringify(blogData, null, 2));
