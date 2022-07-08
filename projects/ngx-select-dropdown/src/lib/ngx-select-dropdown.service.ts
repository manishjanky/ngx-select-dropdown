import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SelectDropDownService {
  openDropdownInstance = new EventEmitter<string>();
  closeDropdownInstance = new EventEmitter<string>();
  openInstances: string[] = [];
  constructor() {
    // constructor
  }
  public isOpen(instanceId) {
    return this.openInstances.indexOf(instanceId);
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
