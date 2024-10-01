import {NavLink} from '@/components/NavLink';
import React from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function PostListPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/pos1ts');
  const posts = await response.json();

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <NavLink href={`/sandbox/posts/${post.id}`}>{post.title}</NavLink>
        </div>
      ))}
    </div>
  );
}
