import { Story } from '@storybook/react/types-6-0'

import Main from '.'

export default {
  title: 'Main',
  component: Main
}

export const Basic: Story = (args) => <Main {...args} />
