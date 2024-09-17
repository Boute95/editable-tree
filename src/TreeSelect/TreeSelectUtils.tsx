import React from 'react'
import { MenuItem, TreeNodeInfo } from '@blueprintjs/core'
import {
  ItemModifiers,
  ItemPredicate,
  ItemRenderer,
  ItemRendererProps,
} from '@blueprintjs/select'

export namespace TreeSelectUtils {
  // export type TreeItemModifiers = ItemModifiers & {
  //   selected: boolean
  // }

  // export type TreeItemRendererProps<T extends HTMLElement> =
  //   ItemRendererProps<T> & {
  //     modifiers: TreeItemModifiers
  //   }

  // export type TreeItemRenderer<T> = ItemRenderer<T> & {
  //   itemProps: TreeItemRendererProps
  // }

  ////////////////////////////////////////////////////////////////////////////////
  export const itemRenderer: ItemRenderer<TreeNodeInfo> = (
    item: TreeNodeInfo,
    itemProps: ItemRendererProps
  ) => {
    return (
      <MenuItem
        text={item.label}
        key={item.id}
        onClick={itemProps.handleClick}
        onFocus={itemProps.handleFocus}
        active={itemProps.modifiers.active}
        roleStructure="listoption"
      />
    )
  }

  ///////////////////////////////////////////////////////////////////////////////
  export const itemPredicate: ItemPredicate<TreeNodeInfo> = (
    query,
    item,
    idx,
    exactMatch
  ) => {
    if (typeof item.label !== 'string') {
      throw new Error(
        'Item label must be of type string. If not, you might give your own itemPredicate function'
      )
    }
    const normalizedItem = item.label.toLowerCase()
    const normalizedQuery = query.toLowerCase()
    if (exactMatch) {
      return normalizedItem === normalizedQuery
    } else {
      return normalizedItem.indexOf(normalizedQuery) >= 0
    }
  }
} // end namespace

// ///////////////////////////////////////////////////////////////////////////////
// export function onCategorySelect(cat, selectedCatArray, setSelectedCatArray) {
//   if (isCategorySelected(cat, selectedCatArray)) {
//     deselectCategory(cat, selectedCatArray, setSelectedCatArray)
//   } else {
//     setSelectedCatArray([cat, ...selectedCatArray])
//   }
// }

// ///////////////////////////////////////////////////////////////////////////////
// export function clearSelectedCategories(setSelectedCatArray) {
//   setSelectedCatArray([])
// }

// ///////////////////////////////////////////////////////////////////////////////
// export function deselectCategory(
//   catToDeselect,
//   selectedCatArray,
//   setSelectedCatArray
// ) {
//   const newArray = [...selectedCatArray]
//   setSelectedCatArray(newArray.filter((cat) => cat !== catToDeselect))
// }

// ///////////////////////////////////////////////////////////////////////////////
// function isCategorySelected(catToTest, selectedCatArray) {
//   return selectedCatArray.indexOf(catToTest) !== -1
// }
