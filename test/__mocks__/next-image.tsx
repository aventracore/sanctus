import * as React from 'react';
// eslint-disable-next-line @next/next/no-img-element
const NextImage = ({ src, alt, ...props }: any) => <img src={typeof src === 'string' ? src : ''} alt={alt} {...props} />;
export default NextImage;