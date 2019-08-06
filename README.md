# custom-select-dropdown


`custom-select-dropdown` Custom Dropdown component for Angular 4+ with multiple and single selection options

## Features
* Same features as https://manishjanky.github.io/custom-select-dropdown/ along with "Select all items" during multiple selection.


## Examples

* [demo-page](https://manishjanky.github.io/custom-select-dropdown/)

## Installation

* `npm install custom-select-dropdown`

### Using with webpack and tsc builds/ angular-cli builds

* import `SelectDropDownModule` into your app.module;
````
import { SelectDropDownModule } from 'custom-select-dropdown'
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
        "../node_modules/custom-select-dropdown/dist/assets/style.css"
      ],
`````


* use `<ngx-select-dropdown></ngx-select-dropdown>` in your templates to add the custom dropdown in your view like below

````
<ngx-select-dropdown (change)="selectionChanged($event)" [multiple]="true" [(ngModel)]="dataModel" [config]="config" [options]="dropdownOptions"></ngx-select-dropdown>
````
* use with reactive form like
````
<ngx-select-dropdown (change)="selectionChanged($event)" formControlName="selectData" [multiple]="true" [config]="config" [options]="dropdownOptions"></ngx-select-dropdown>
````

## Config

### Input

* `multiple: boolean` - `true/false` beased if multiple selection required or not `Defaults to false`.
* `options: Array` - Array of string/objects that are to be the dropdown options.
* `disabled: boolean` - disabled attribute to disable the dropdown when required.
* `config: Object` - configuration object.
````
config = {
        displayKey:"description", //if objects array passed which key to be displayed defaults to description
        search:true //true/false for the search functionlity defaults to false,
        height: 'auto' //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
        placeholder:'Select' // text to be displayed when no item is selected defaults to Select,
        customComparator: ()=>{} // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
        limitTo: options.length // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
        noResultsFound: 'No results found!' // text to be displayed when no items are found while searching
        searchPlaceholder:'Search' // label thats displayed in search input,
        searchOnKey: 'name' // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
        selectAll: 'true' // Should enable select all feature for multiple select items
        selectAllText: 'Select All' // Default text for select all feature
      }
````

### Output

* `change: Event` - change event when user changes the selected options
* `open: Event` - open event when the dropdown toogles on
* `close: Event` - close event when the dropdown toogles off

### Change detection

As of now `custom-select-dropdown` uses Default change detection startegy which means dirty checking checks for immutable data types. And in Javascript Objects and arrays are mutable. So when changing any of the @Input parameters if you mutate an object change detection will not detect it. For ex:-
````
this.options.push({id: 34, description: 'Adding new item'});

// or

config.height = '200px';

`````
Both the above scenarios will not trigger the change detection. In order for the componet to detect the changes what you need to do is:-
````
this.options = [...this.options, {id: 34, description: 'Adding new item'}];

// or

config = {...config, height:'200px'};

````


##Credits:
https://manishjanky.github.io/custom-select-dropdown/