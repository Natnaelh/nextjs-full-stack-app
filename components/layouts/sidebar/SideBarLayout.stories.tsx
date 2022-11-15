import { ComponentMeta, ComponentStory } from '@storybook/react';
import SideBarLayout, { ISideBarLayout } from './SideBarLayout';
import { mockSideBarLayoutProps } from './SideBarLayout.mocks';

export default {
  title: 'sidebar/SideBarLayout',
  component: SideBarLayout,
  argTypes: {},
} as ComponentMeta<typeof SideBarLayout>;

const Template: ComponentStory<typeof SideBarLayout> = (args) => (
  <SideBarLayout {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSideBarLayoutProps.base,
} as ISideBarLayout;
