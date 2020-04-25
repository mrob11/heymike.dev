import React from "react"

export default function Footer({ links = [] }) {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Mike Robinson</p>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        footer {
          margin: 2rem 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        p {
          font-size: 0.875rem;
          margin: 0;
        }
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          font-size: 0.875rem;
        }
        li:not(:first-child) {
          margin-left: 1rem;
        }
      `}</style>
    </footer>
  )
}
