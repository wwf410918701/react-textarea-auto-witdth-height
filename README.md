# react-auto-textarea

An easy to use replacement for textarea that can automatically resizes both horizontally and vertically as content changes.

```typescript
  import { ReactAutoTextArea } from 'react-auto-textarea'

  const somePlace = () => (
    <div>
      <ReactAutoTextArea/>
    </div>
  )
```

## Install

`npm install react-auto-textarea`

## Props

Props are almost identical as native textarea, except `rows` and `cols` are not supported, please use `min-height` and `max-height` to style the component instead.

## FAQ

### How to focus

Reference the inner textarea

```js
<TextareaAutosize ref={(ref) => (this.current = ref)} />
```

Then focus on the ref

```js
this.current.focus();
```
