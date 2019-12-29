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

- display counter's value in the display component

# one way flow of data

we move the state up to the highest component

# controlled element / setting state in class components

obsereve data in input field

define value of input in state and initialize it

```js
state = { userName: "" };
```

```js
value={this.state.userName}
```

add on change event to input

```js
onChange={(event)=> this.setState({userName: event.target.value})}
```

# data

https://api.github.com/users/sanjinharacic
