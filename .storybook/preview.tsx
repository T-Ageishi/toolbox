import type { Preview } from '@storybook/react';
import { notoSansJP } from '../src/app/_ui/fonts/fonts';
import '../src/app/globals.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={notoSansJP.className}>
        <Story/>
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
