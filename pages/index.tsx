import { GetStaticProps } from "next";
import { allPosts, Post } from ".contentlayer/generated";
import { pick } from "@contentlayer/client";

import Link from "components/Link";
import PostList from "components/postlist";

type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <div className="flex flex-col gap-20 md:gap-28">
        <div>
          <h1 className="animate-in">Welcome to My personal blog</h1>
          <p
            className="text-secondary animate-in mt-1"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I&apos;m a freelancer working as a front-end developer, I spend
            hours coding, and I&apos;m a forgetful person, so I wanted to create
            a blog to help me remember what I&apos;ve done or fix a bug.&nbsp;
            <Link
              href="https://dianananda.site"
              className="items-start underline mt-1 text-white"
            >
              Read more about me →
            </Link>
          </p>
        </div>

        <div
          className="flex flex-col items-start gap-8 animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <h2>New posts</h2>
          <PostList posts={posts} />
          <Link href="/blog" className="items-start underline">
            See all →
          </Link>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .filter((_, i) => i < 5)
    .map((post) => pick(post, ["slug", "title", "publishedAt", "image"]));

  return {
    props: { posts },
  };
};
