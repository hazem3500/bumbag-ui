import * as styles from './styles';
import { DropdownMenu as _DropdownMenu } from './DropdownMenu';
import { DropdownMenuPopover } from './DropdownMenuPopover';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenuButton } from './DropdownMenuButton';
import { DropdownMenuDivider } from './DropdownMenuDivider';
import { DropdownMenuGroup } from './DropdownMenuGroup';
import { useDropdownMenuState, DropdownMenuState } from './DropdownMenuState';

export * from './DropdownMenu';
export * from './DropdownMenuItem';
export * from './DropdownMenuButton';
export * from './DropdownMenuPopover';
export * from './DropdownMenuGroup';
export * from './DropdownMenuDivider';
export * from './DropdownMenuState';
export const DropdownMenu = Object.assign(_DropdownMenu, {
  Popover: DropdownMenuPopover,
  Button: DropdownMenuButton,
  Item: DropdownMenuItem,
  Divider: DropdownMenuDivider,
  Group: DropdownMenuGroup,
  useState: useDropdownMenuState,
  State: DropdownMenuState,
});
export { styles as DropdownMenuStyles };
