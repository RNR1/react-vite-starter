import { UserConfig } from 'vite';
import { ExtendedOptions } from 'storybook-builder-vite/types/index';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import fontsPlugin from 'vite-plugin-fonts';

export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal(config: UserConfig, _options: ExtendedOptions) {
    // This is mandatory to not override the app's default vite cache dir.
    config.cacheDir = 'node_modules/.vite-storybook';
    config.plugins = [
      ...config.plugins,
      tsconfigPathsPlugin(),
      fontsPlugin({
        google: { families: ['Roboto'] },
      }),
    ];
    return config;
  },
};
