import Link from 'next/link';
import React from 'react';

import {Post} from '@/types/post.types';

export const generateStaticParams = async () => {
  const postsReponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
  );
  const posts: Post[] = await postsReponse.json();
  return posts.map((post) => ({id: post.id.toString()}));
};

export default async function PostPage({params: {id}}: {params: {id: number}}) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  const post: Post = await postResponse.json();

  return (
    <div>
      <div className="mb-2">Post #{id}</div>
      <div className="border p-2 border-gray-400 border-solid mb-2">
        <div className="font-semibold">Title</div>
        <div id="title">{post.title}</div>
      </div>
      <div className="border p-2 border-gray-400 border-solid">
        <div className="font-semibold">Body</div>
        <div id="title">{post.body}</div>
      </div>
      <div className="mt-2">
        <Link href="/sandbox/posts">Back to post list page</Link>
      </div>
    </div>
  );
}
