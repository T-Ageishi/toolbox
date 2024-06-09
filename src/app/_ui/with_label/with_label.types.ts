import React from 'react';

export interface WithLabelProps extends React.ComponentPropsWithoutRef<'label'> {
  label: string;
}