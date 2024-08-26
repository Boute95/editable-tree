import type { Meta, StoryObj } from '@storybook/react';

import EditableTree from './EditableTree';

const meta = {
  component: EditableTree,
} satisfies Meta<typeof EditableTree>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [{
      "id": 0,
      "label": "Nanou"
    }]
  }
};