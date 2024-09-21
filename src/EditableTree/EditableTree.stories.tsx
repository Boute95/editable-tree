import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@blueprintjs/core'
import React from 'react'

import EditableTree from './EditableTree'

const meta = {
  component: EditableTree,
} satisfies Meta<typeof EditableTree>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isFullyExpanded: true,
    contentEditNode: (e) => (<Button>Edit me</Button>),
    contentRemoveNode: (e) => (<Button>Remove me</Button>),
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

export const ClickCallback: Story = {
  args: {
    isFullyExpanded: true,
    onEditClick: () => console.log('Editing node'),
    onRemoveClick: () => console.log('Removing node'),
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

