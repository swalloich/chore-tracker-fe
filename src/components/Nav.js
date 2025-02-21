import React from 'react'

/**
 * The site navigation bar
 * @param {Object} param0.links - An array of objects
 * @param {string} param0.links[].displayText - The text to display
 * @param {string} param0.links[].url - The URL to link to
 */
export default function Nav({ links }) {
  return (
    <nav>
      <ul>
        {links.map(link => (
          <li key={link.url}>
            <a href={link.url}>{link.displayText}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}