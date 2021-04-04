import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SelectDropDownService {
  private _isOpen: boolean;
  constructor() {
    // constructor
    this._isOpen = false;
  }
  get isOpen() {
    return this._isOpen;
  }
}
