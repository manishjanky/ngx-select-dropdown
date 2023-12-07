export interface NgxDropdownConfig {
  displayFn?: any;
  displayKey?: string;
  search?: boolean;
  height?: string;
  placeholder?: string;
  customComparator?: (a: any, b: any) => number;
  limitTo?: number;
  moreText?: string;
  noResultsFound?: string;
  searchPlaceholder?: string;
  searchOnKey?: string;
  clearOnSelection?: boolean;
  inputDirection?: string;
  selectAllLabel?: string;
  enableSelectAll?: boolean;
  dropDownClass: string;
}
