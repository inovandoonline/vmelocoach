import React from 'react';

const CleanText: React.FC = ({ children }) => (
  <>{children.toString().replace(/<\/?[^>]+(>|$)/g, '')}</>
);

export default CleanText;
