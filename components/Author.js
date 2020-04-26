import React from "react"

export default function Author({ name, title, avatar }) {
  return (
    <section className="author">
      <img src={avatar} alt={name} />
      <div className="info">
        <span className="name">{name}</span>
        <span className="title">{title}</span>
      </div>
      <style jsx>{`
        .author {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin: 3rem 0;
        }
        img {
          width: 4rem;
          border-radius: 50%;
          margin-right: 1rem;
        }
        .info {
          display: flex;
          flex-direction: column;
        }
        .name {
          color: #333;
          font-family: "Passion One", sans-serif;
          font-size: 1.75rem;
          margin-bottom: 0.3rem;
        }
        .title {
          font-size: 0.875rem;
        }
      `}</style>
    </section>
  )
}
