import * as React from 'react';
import { DateOrTimeViewWithMeridiem } from '../common';

export interface BaseToolbarProps<TValue, TView extends DateOrTimeViewWithMeridiem>
  extends ExportedBaseToolbarProps {
  isLandscape: boolean;
  onChange: (newValue: TValue) => void;
  value: TValue;
  /**
   * Currently visible picker view.
   */
  view: TView;
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: (view: TView) => void;
  views: readonly TView[];
  disabled?: boolean;
  readOnly?: boolean;
  titleId?: string;
}

export interface ExportedBaseToolbarProps {
  /**
   * Toolbar date format.
   */
  toolbarFormat?: string;
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder?: React.ReactNode;
  /**
   * className applied to the root component.
   */
  className?: string;
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden?: boolean;
}
