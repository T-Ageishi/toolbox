import React from 'react';

export interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  resize?: 'none' | 'horizontal' | 'vertical' | 'both';
}