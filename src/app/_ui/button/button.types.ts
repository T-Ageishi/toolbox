import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'filled' | 'tonal' | 'outlined' | 'danger';
  size?: 'medium' | 'large';
  label: string;
}