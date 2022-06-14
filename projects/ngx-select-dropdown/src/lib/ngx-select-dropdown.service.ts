import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SelectDropDownService {
  openDropdownInstance = new EventEmitter<string>();
  closeDropdownInstance = new EventEmitter<string>();
  private _isOpen: boolean;
  constructor() {
    // constructor
    this._isOpen = false;
  }
  get isOpen() {
    return this._isOpen;
  }
  /**
   * @summary: Open a specific dropdown instance based on the instance ID.
   * @param instanceId: Instance id of the dropdown that must be opened.
   */
  openDropdown(instanceId: string) {
    this.openDropdownInstance.emit(instanceId);
  }
  /**
   * @summary: Close a specific dropdown instance based on the instance ID.
   * @param instanceId: Instance id of the dropdown that must be closed.
   */
  closeDropdown(instanceId: string) {
    this.closeDropdownInstance.emit(instanceId);
  }
}
