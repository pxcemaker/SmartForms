# sf-editformarea



<!-- Auto Generated Below -->


## Methods

### `getFormElement() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [sf-dynamicform](../sf-dynamicform)
- [sf-adddynform](../sf-adddynform)

### Graph
```mermaid
graph TD;
  sf-editformarea --> sf-dynamicform
  sf-editformarea --> sf-adddynform
  sf-dynamicform --> sf-emptycheckbox
  sf-dynamicform --> sf-radioempty
  sf-dynamicform --> sf-empty-image-selection
  sf-dynamicform --> sf-adddynform
  sf-dynamicform --> sf-checkbox
  sf-dynamicform --> sf-radio
  sf-dynamicform --> sf-text-area
  sf-dynamicform --> sf-image-selection
  sf-dynamicform --> sf-question
  sf-dynamicform --> sf-questionempty
  style sf-editformarea fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
