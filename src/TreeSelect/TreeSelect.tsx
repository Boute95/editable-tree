'use client'

import React, { SyntheticEvent } from 'react'
import {
  ItemPredicate,
  ItemRenderer,
  Select,
  SelectProps,
} from '@blueprintjs/select'
import { Button, Icon, TreeNodeInfo } from '@blueprintjs/core'

// import style from './TreeSelect.module.scss'
import { TreeUtils } from '../utils/Tree'
import { TreeSelectUtils } from './TreeSelectUtils'

export interface TreeSelectProps<T extends TreeNodeInfo>
  extends Partial<SelectProps<T>> {
  tree: T[]
  onItemSelect?: (item: T, event?: React.SyntheticEvent<Element>) => void
  itemRenderer?: ItemRenderer<T>
  itemPredicate?: ItemPredicate<T>
  buttonName?: string
}

///////////////////////////////////////////////////////////////////////////////
const TreeSelect: React.FC<TreeSelectProps<TreeNodeInfo>> = ({
  tree,
  buttonName,
  onItemSelect,
  itemRenderer = TreeSelectUtils.itemRenderer,
  itemPredicate = TreeSelectUtils.itemPredicate,
  ...selectProps
}) => {
  const [list, setList] = React.useState<TreeNodeInfo[]>([])
  const [selectedItem, setSelectedItem] = React.useState<
    TreeNodeInfo | undefined
  >()

  const _onItemSelect = (item: TreeNodeInfo, event?: SyntheticEvent) => {
    setSelectedItem(item)
    if (onItemSelect) {
        onItemSelect(item, event)
    }
  }

  React.useEffect(() => {
    const newList: TreeNodeInfo[] = []
    TreeUtils.walk({ childNodes: tree }, (node) =>
      newList.push(node as TreeNodeInfo)
    )
    setList(newList)
  }, [tree])

  return (
    <Select<TreeNodeInfo>
      {...selectProps}
      items={list}
      onItemSelect={_onItemSelect}
      itemRenderer={itemRenderer}
      itemPredicate={itemPredicate}
    >
      <Button
        name={buttonName}
        value={selectedItem?.id}
        text={selectedItem ? selectedItem.label : '(Aucune sélection)'}
        rightIcon={<Icon icon="caret-down" />}
      />
    </Select>
  )
}

export default TreeSelect
