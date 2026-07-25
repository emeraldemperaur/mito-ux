/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/codexFooter.scss';
import { getCopyrightYear } from '../utils/chronometer';
import devLogoWhite from '../assets/me-dev-logo-white.png';
// @ts-expect-error -- used inside pug template after babel-plugin-transform-react-pug
import { NavLink } from 'react-router-dom';


declare function pug(strings: TemplateStringsArray, ...args: any[]): any;


const CodexFooter = () => {

  return pug`
    .div
      .footer
        .bubbles
          - const bubbles = Array.from({ length: 128 })
          each _, i in bubbles
            - const size = 2 + Math.random() * 4
            - const distance = 6 + Math.random() * 4
            - const position = -5 + Math.random() * 110
            - const time = 2 + Math.random() * 2
            - const delay = -1 * (2 + Math.random() * 2)
            - const s = { '--size': size + 'rem', '--distance': distance + 'rem', '--position': position + '%', '--time': time + 's', '--delay': delay + 's' }
            .bubble(key=i style=s)
        .content
          div(style={fontFamily: 'Mozilla Headline', fontWeight: 500, letterSpacing: '0.13em'})
            div
              b Useful Links
              NavLink(to="/getting-started" style={fontWeight: '300 !important'}) Getting Started
              NavLink(to="/faqs" style={fontWeight: '300 !important'}) FAQs
              NavLink(to="/components" style={fontWeight: '300 !important'}) AI Components
              NavLink(to="/mito-mcp" style={fontWeight: '300 !important'}) Mito MCP
            div
              b Resources
              NavLink(to="/documentation" style={fontWeight: '300 !important'}) Documentation
              NavLink(to="/learn" style={fontWeight: '300 !important'}) Learn
              a(href="https://www.udemy.com/topic/react" target="_blank" data-discover="true" style={fontWeight: '300 !important'}) Udemy
              a(href="https://www.github.com/emeraldemperaur" target="_blank" data-discover="true" style={fontWeight: '300 !important'}) GitHub
            div
              b Knowledge
              a(href="https://www.react.dev" target="_blank" style={fontWeight: '300 !important'}) React
              a(href="https://www.redux.js.org/" target="_blank" style={fontWeight: '300 !important'}) Redux
              a(href="https://www.mobx.js.org/README.html" target="_blank" style={fontWeight: '300 !important'}) MobX
              a(href="https://www.nextjs.org/" target="_blank" style={fontWeight: '300 !important'}) Next.js
            div
              b Technologies
              a(href="https://cursor.com/home" target="_blank" style={fontWeight: '300 !important'}) Cursor
              a(href="https://www.windsurf.com/" target="_blank" style={fontWeight: '300 !important'}) Windsurf
              a(href="https://www.devin.ai/" target="_blank" style={fontWeight: '300 !important'}) Cognition
              a(href="https://www.replit.com/" target="_blank" style={fontWeight: '300 !important'}) Replit
          div
            - const imgStyle = { width: '80px', height: '80px', marginLeft: '23px' }
            p(style={fontFamily: 'Mozilla Headline', fontWeight: 500, letterSpacing: '0.13em', marginBottom: '6px' }) ©${getCopyrightYear()} BUILD BY
            a(href="https://www.mekaegwim.ca/" target="_blank" rel="noopener noreferrer"): img(
              src=${devLogoWhite}
              target="_blank"
              rel="noreferrer"
              style=imgStyle)
            
      svg(style={ position: 'fixed', top: '100vh' })
        defs
          filter#blob
            feGaussianBlur(in="SourceGraphic" stdDeviation="10" result="blur")
            feColorMatrix(
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            )
  `;
}

export default CodexFooter;