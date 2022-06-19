import React from 'react';
import {Text} from 'react-native';
import {findAll} from 'highlight-multiple-words';

import type {TextStyle} from 'react-native';
import type {FindChunksArg} from 'highlight-multiple-words';

export type HighlighterProps = FindChunksArg & {
  highlightStyle: TextStyle;
  style: TextStyle;
};

const Highlighter: React.ComponentType<HighlighterProps> = ({
  autoEscape,
  highlightStyle,
  searchWords,
  textToHighlight,
  sanitize,
  style,
  ...props
}) => {
  const chunks = findAll({textToHighlight, searchWords, sanitize, autoEscape});

  return (
    <Text style={style} {...props}>
      {chunks.map((chunk, index) => {
        const text = textToHighlight.substr(
          chunk.start,
          chunk.end - chunk.start,
        );

        return !chunk.isHighlight ? (
          text
        ) : (
          <Text key={index} style={highlightStyle}>
            {text}
          </Text>
        );
      })}
    </Text>
  );
};

export default Highlighter;
