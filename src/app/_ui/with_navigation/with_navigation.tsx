import React from 'react';

export default function WithNavigation ({children}: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}