# ngx-select-dropdown

[![GitHub license](https://img.shields.io/github/license/manishjanky/ngx-select-dropdown.svg)](https://github.com/me-and/mdf/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/ngx-select-dropdown.svg)]()
[![Build Status](https://travis-ci.org/manishjanky/ngx-select-dropdown.svg?branch=master)](https://travis-ci.org/manishjanky/ngx-select-dropdown)
[![Codecov branch](https://codecov.io/gh/manishjanky/ngx-select-dropdown/branch/master/graphs/badge.svg)]()
[![npm](https://img.shields.io/npm/dt/ngx-select-dropdown.svg)]()
[![GitHub top language](https://img.shields.io/github/languages/top/manishjanky/ngx-select-dropdown.svg)]()
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/manishjanky/ngx-select-dropdown.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/manishjanky/ngx-select-dropdown.svg)]()
[![GitHub closed issues](https://img.shields.io/github/issues-closed/manishjanky/ngx-select-dropdown.svg)]()
[![GitHub contributors](https://img.shields.io/github/contributors/manishjanky/ngx-select-dropdown.svg)]()

`ngx-select-dropdown` Custom Dropdown component for Angular 4+ with multiple and single selection options

## Features
* single select dropdown
* multi select dropdown
* search dropdown list
* arrows keys support
* limit number of items displayed in dropdown
* custom sort 


## Examples

* [demo-page](https://manishjanky.github.io/ngx-select-dropdown/)

## Installation

* `npm install ngx-select-dropdown`

### Using with webpack and tsc builds/ angular-cli builds

* import `SelectDropDownModule` into your app.module;
````
import { SelectDropDownModule } from 'ngx-select-dropdown'
````
* add `SelectDropDownModule` to the imports of your NgModule:
`````
@NgModule({
  imports: [
    ...,
    SelectDropDownModule
  ],
  ...
})
class YourModule { ... }
`````

* include css styles in you `angular-cli.json`.

`````
 "styles": [
        "../node_modules/ngx-select-dropdown/dist/assets/style.css"
      ],
`````


* use `<ngx-select-dropdown></ngx-select-dropdown>` in your templates to add the custom dropdown in your view like below

````
<ngx-select-dropdown (change)="selectionChanged($event)" [multiple]="true" [(value)]="dataModel" [config]="config" [options]="dropdownOptions"></ngx-select-dropdown>
````

## Config

### Input

* `multiple: boolean` - `true/false` beased if multiple selection required or not `Defaults to false`.
* `options: Array` - Array of string/objects that are to be the dropdown options.
* `value: any` - the model variable in which you want to save the selected options.
* `config: Object` - configuration object.
````
config = {
        displayKey:"description", //if objects array passed which key to be displayed defaults to description
        search:true //true/false for the search functionlity defaults to false,
        height: 'auto' //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
        placeholder:'Select' // text to be displayed when no item is selected defaults to Select,
        customComparator: ()=>{} // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
        limitTo: options.length // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
        moreText: 'more' // text to be displayed whenmore than one items are selected like Option 1 + 5 more
        noResultsFound: 'No results found!' // text to be displayed when no items are found while searching
        searchPlaceholder:'Search' // label thats displayed in search input
      }
````

### Output

* `value: any` - array of selected options
* `change: Event` - change event when user changes the selected options

## Changelog
* v0.1.0
````
 Added a change event so that user can attach a change event handler.
 If multiselect the selected text will display first item and + count for eg. (Option 1 + 2 more) .
````
* v0.2.0
````
 Angular 4 and above support.
 Bug with search functionality fixed.
````
* v0.3.0
````
 Support for Observable data source for options and async pipe.
 IE bug with styling.
 Few other minor bug fixes.
````
* v0.4.0
````
 Use arrows keys and enter to select items from available options.
 Case insensitive search.
 Few other minor bug fixes.
````
* v0.5.0
````
 Support for scroll bar with too many list items.
 Few other minor bug fixes.
````
* v0.7.0
````
 Support for limito pipe to limit number of options displayed in case of too many options.
 Support for customComparator / custom sort function
 Few other minor bug fixes.
````
* v0.7.2
````
 Support for angular 6
 Removed dependency on rxjs
````
* v0.8.0
````
 No Results found indicator with custom text passed with config
 Custom text for *more* when more than 1 items selected
 Open event emitted
 Close event emitted
 Search placeholder text
````
## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/manishjanky/ngx-select-dropdown/issues) here on GitHub.

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
