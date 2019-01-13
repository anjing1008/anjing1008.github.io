import React from "react";
import PropTypes from "prop-types";

const Bodytext = props => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} />

      <style jsx>{`
        .bodytext {
          animation-name: bodytextEntry;
          animation-duration: ${theme.time.duration.long};

          :global(h2) {
            margin: 1em 0 0.75em;
          }

          :global(h3) {
            margin: 0.75em 0 0.5em;
          }

          :global(h4) {
            margin: 0.5em 0 0.25em;
          }

          :global(h5) {
            margin: 0.25em 0 0;
          }

          :global(h2) {
            font-size: ${theme.font.size.l};
          }

          :global(h3) {
            font-size: ${theme.font.size.m};
          }

          :global(h4) {
            font-size: ${theme.font.size.s};
          }

          :global(h5) {
            font-size: ${theme.font.size.s};
          }

          :global(p) {
            font-size: ${theme.font.size.s};
            line-height: ${theme.font.lineHeight.xxl};
            margin: 0 0 0.1em;
          }
          :global(ul) {
            list-style: circle;
            margin: 0 0 1.5em;
            padding: 0 0 0 1.5em;
            list-style-position: inside;
          }
          :global(ol) {
            list-style-position: inside;
          }
          :global(li) {
            margin: 0.7em 0;
            line-height: 1.5;
          }
          :global(a) {
            font-weight: ${theme.font.weight.bold};
            color: ${theme.color.brand.primary};
            text-decoration: underline;
          }
          :global(a.gatsby-resp-image-link) {
            border: 0;
            display: block;
            margin: 1.5em 0;
            border-radius: ${theme.size.radius.default};
            overflow: hidden;
            border: 1px solid ${theme.line.color};
          }
          :global(code.language-text) {
            background: ${theme.color.neutral.gray.c};
            text-shadow: none;
            color: inherit;
            padding: 0.1em 0.3em 0.2em;
            border-radius: 0.1em;
          }
          :global(figure a.gatsby-resp-image-link) {
            border: 0;
            display: block;
            margin: 1.5em 0 0;
            border-radius: ${theme.size.radius.default};
            overflow: hidden;
            border: 1px solid ${theme.line.color};
          }
          :global(figcaption.figure-caption) {
            text-align: center;
            margin: 0 0 1.5em;
          }
        }

        @keyframes bodytextEntry {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Bodytext.propTypes = {
  html: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Bodytext;
