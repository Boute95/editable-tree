import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import TreeSelect from './TreeSelect'

const meta = {
  component: TreeSelect,
} satisfies Meta<typeof TreeSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onItemSelect: (item) => console.log('selected item:', item.label),
    tree: [
      {
        id: 0,
        label: 'Nanou',
        childNodes: [
          {
            id: 1,
            label: 'Maman',
            childNodes: [
              {
                id: 2,
                label: 'Nana',
              },
            ],
          },
          {
            id: 3,
            label: 'Papa',
            childNodes: [
              {
                id: 4,
                label: 'Mémé',
              },
              {
                id: 5,
                label: 'Papi Fabrice',
              },
            ],
          },
        ],
      },
    ],
  },
}
