# react-textarea-auto-witdth-height

An easy to use replacement for textarea that can automatically resizes both horizontally and vertically as content changes.

```typescript
  import { AutoTextArea } from 'react-textarea-auto-witdth-height'

  const somePlace = () => (
    <div>
      <AutoTextArea/>
    </div>
  )
```

## Demo

https://react-textarea-auto-witdth-height-8j96.vercel.app/

## Install

`npm i react-textarea-auto-witdth-height`

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
