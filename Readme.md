
# spin

  Higher level spinner API auto-adjusting position and scale
  to fit within the target element. Built on[component/spinner](https://github.com/component/spinner).

  ![javascript spinner](http://i.cloudup.com/7F5SguoUkoB+e4r.png)

## Installation

    $ component install component/spin

## API

### spin(el, [options])

  Add a spinner to `el` with options, and return
  the `Spinner` instance.

   - `size` defaulting to 1/5th the element width
   - `delay` default to 300ms

```js
var s = spin(document.querySelector('.one'));
```

### Spinner#remove()

  Augments the `Spinner` returned with a `.remove()` method,
  which when removes the spinner or cancels delayed spinners.

## License

  MIT
