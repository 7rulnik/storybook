import root from 'window-or-global';
import { StoryStore } from '@storybook/client-api';

declare global {
  interface Window {
    __STORYBOOK_STORY_STORE__: StoryStore;
  }
}
