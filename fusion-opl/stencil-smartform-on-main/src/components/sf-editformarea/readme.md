# sf-editformarea



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type      | Default           |
| -------- | --------- | ----------- | --------- | ----------------- |
| `ftitle` | `ftitle`  |             | `string`  | `'Deine Umfrage'` |
| `isOpen` | `is-open` |             | `boolean` | `false`           |


## Methods

### `getFormElement() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [sf-dynamicform](../sf-dynamicform)
- [sf-title](../sf-title)
- [sf-title-empty](../sf-title-empty)
- [sf-adddynform](../sf-adddynform)

### Graph
```mermaid
graph TD;
  sf-editformarea --> sf-dynamicform
  sf-editformarea --> sf-title
  sf-editformarea --> sf-title-empty
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
  sf-dynamicform --> sf-description
  sf-dynamicform --> sf-questionempty
  sf-dynamicform --> sf-descriptionempty
  style sf-editformarea fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
