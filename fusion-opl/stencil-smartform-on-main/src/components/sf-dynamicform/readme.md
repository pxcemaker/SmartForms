# sf-dynamicform

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description | Type                                                  | Default         |
| ------------- | --------------- | ----------- | ----------------------------------------------------- | --------------- |
| `description` | `description`   |             | `string`                                              | `undefined`     |
| `isOpen`      | `is-open`       |             | `boolean`                                             | `undefined`     |
| `question`    | `question`      |             | `string`                                              | `'Deine Frage'` |
| `radio`       | `radio`         |             | `string`                                              | `undefined`     |
| `radioIdNmbr` | `radio-id-nmbr` |             | `number`                                              | `0`             |
| `result`      | `result`        |             | `CheckBoxDef[] \| ImageDef[] \| RadioDef[] \| string` | `undefined`     |


## Dependencies

### Used by

 - [sf-editformarea](../sf-editformarea)

### Depends on

- [sf-emptycheckbox](../sf-emptycheckbox)
- [sf-radioempty](../sf-radioempty)
- [sf-empty-image-selection](../sf-empty-image-selection)
- [sf-adddynform](../sf-adddynform)
- [sf-checkbox](../sf-checkbox)
- [sf-radio](../sf-radio)
- [sf-text-area](../sf-text-area)
- [sf-image-selection](../sf-image-selection)
- [sf-question](../sf-question)
- [sf-description](../sf-description)
- [sf-questionempty](../sf-questionempty)
- [sf-descriptionempty](../sf-descriptionempty)

### Graph
```mermaid
graph TD;
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
  sf-editformarea --> sf-dynamicform
  style sf-dynamicform fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
