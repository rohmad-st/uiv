# Affix

> The affix component toggles `position: fixed` on and off, emulating the effect found with `position: sticky`.

The navigation **on the right** is a live demo of the affix component.

**Note**:

* You must provide CSS for the positioning and width of your affixed content.
* Do not use affix on an element contained in a relatively positioned element, such as a pulled or pushed column.

## Example

```html
<affix :offset="50">
  <ul>
    <li>...</li>
    <li>...</li>
    <li>...</li>
  </ul>
</affix>
```

# API Reference

## [Affix.vue](https://github.com/wxsms/uiv/tree/master/src/components/affix/Affix.vue)

### Props

Name             | Type       | Default      | Required | Description
---------------- | ---------- | ------------ | -------- | -----------------------
`offset`         | Number     | 0            |          | Pixels to offset from screen when calculating position of scroll.

### Slots

Name      | Description
--------- | -----------------------
`default` | The affix body.