import type { Component } from 'solid-js'
import { createResource, For, Suspense, Show, Index } from 'solid-js'
import SolidjsMarkdown from 'solidjs-markdown'

export default function Posts() {
  const [posts] = createResource(() => Posts, fetchPosts, {
    deferStream: true,
  })

  async function fetchPosts() {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/blog/devusercontact/posts`,
    )
    let posts = await response.json()
    posts = posts.reverse()
    return posts
  }

  return (
    <div class='grid place-items-center '>
      <Suspense>
        <Show when={posts}>
          <div class='grid grid-cols-1 m-10 w-4/5 '>
            <For each={posts()}>
              {(post: any) => (
                <div class='grid m-10 p-5 gap-5 content-center border-solid border-2 border-black'>
                  <h1>{post.title}</h1>
                  <h2>{post.subtitle}</h2>
                  <a target='_blank'>
                    <SolidjsMarkdown>{post.body}</SolidjsMarkdown>
                  </a>
                </div>
              )}
            </For>
          </div>
        </Show>
      </Suspense>
    </div>
  )
}
