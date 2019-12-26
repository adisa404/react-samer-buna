# useState()

useState() returns:

- a state object(getter)
- an updater function (setter)

```js
const [counter, setCounter] = useState(0);

const [currentStateValue, functionToSetNewStateValue] = useState(
  initialStateValue
);
```

go onClick we just use the function reference

logRandom without ()

# return

return <button></button> we return a functiin call
a call of React.CreateElemnet

# event

```js
function Button() {
  const [counter, setCounter] = useState(5);
  const handleClick = () => setCounter(counter * 2);

  return <button onClick={handleClick}>{counter}</button>;
}
```
