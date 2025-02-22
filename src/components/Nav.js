/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import LayoutBand from './LayoutBand'

const navbarCss = css`
  display: flex;
  margin: 10px 0;

  * {
    padding: 5px 10px;
  }

  .site-logo {
    text-decoration: none;
    color: #000;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }

  .site-logo + ul::before {
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    margin: 0 5px 0 15px;
    border-radius: 100rem;
  }
`

/**
 * The site navigation bar
 * @param {Object} param0.links - An array of objects
 * @param {string} param0.links[].displayText - The text to display
 * @param {string} param0.links[].url - The URL to link to
 * @param {JSX.Element} param0.homeLink - An object with displayText and url properties
 * @returns {JSX.Element}
 */
export default function Nav({ links, homeLink }) {
  return (
    <LayoutBand>
      <nav
        css={navbarCss}
      >
        <Link className="site-logo" to={homeLink.to}>
          {homeLink.content}
        </Link>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>
                {link.displayText}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </LayoutBand>
  )
}