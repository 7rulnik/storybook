import { Meta, Story } from '@storybook/lit';
import { html } from 'lit';

import * as HeaderStories from './sb-header.stories';

import { SbPage } from './sb-page';

export default {
  title: 'Example/Page',
} as Meta;

const Template: Story<SbPage> = ({ user }) => html`<sb-page user="${user}"></sb-page>`;

export const LoggedIn: Story<SbPage> = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut: Story<SbPage> = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
