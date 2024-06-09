import * as Icons from '@mui/icons-material';

export type Setting = {
  id: number;
  label: string;
  icon?: keyof typeof Icons;
  path: string;
  children: Setting[];
};