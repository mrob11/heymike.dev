import React from "react"
import Markdown from "react-markdown"
import Author from "./Author"
import CodeBlock from "./CodeBlock"
import PostDate from "./PostDate"

export default function Post({ post }) {
  return (
    <article>
      <header>
        <h1>{post.fields.title}</h1>
        <small>
          <p>
            Published: <PostDate date={post.sys.createdAt} />
          </p>
          {post.sys.updatedAt && (
            <p>
              Updated: <PostDate date={post.sys.updatedAt} />
            </p>
          )}
        </small>
      </header>
      <section>
        <Markdown
          source={post.fields.body}
          escapeHtml={true}
          renderers={{
            code: CodeBlock,
          }}
        />
      </section>
      <footer>
        {post.fields.author && (
          <Author
            name={post.fields.author.fields.name}
            title={post.fields.author.fields.title}
            avatar={post.fields.author.fields.avatar.fields.file.url}
          />
        )}
      </footer>
      <style jsx>{`
        header {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #949499;
        }
        header h1 {
          font-family: "Passion One", sans-serif;
          font-size: 3rem;
          font-weight: 400;
          margin-bottom: 1rem;
        }
        section :global(p) {
          line-height: 1.75rem;
          margin: 2rem 0;
        }
        section :global(img) {
          max-width: 100%;
        }
        section :global(blockquote) {
          border-left: 0.5rem solid #949499;
          margin-left: 0;
          padding: 0 2rem;
          color: #646469;
        }
        section :global(li) {
          margin: 1rem 0;
          line-height: 1.5rem;
        }
        section :global(hr) {
          border: none;
          background: #949499;
          height: 1px;
        }
      `}</style>
    </article>
  )
}
