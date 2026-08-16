import * as React from 'react';
import type { Decorator } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

export const parameters = { layout: 'fullscreen' };

function ThemeWrapper(props: { children: React.ReactNode }): React.ReactElement {
  const isDark = useDarkMode();

  return (
    <ColorSchemeProvider colorScheme={isDark ? 'dark' : 'light'} toggleColorScheme={() => {}}>
      <MantineProvider
        theme={{ colorScheme: isDark ? 'dark' : 'light' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>{props.children}</NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export const decorators: Decorator[] = [
  (renderStory, context) => <ThemeWrapper>{renderStory(context)}</ThemeWrapper>,
];