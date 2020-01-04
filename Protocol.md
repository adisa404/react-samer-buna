# useState()

useState() returns:

- a state object(getter)
- an updater function (setter)

```js
const [counter, setCounter] = useState(0) // read: counter=0;

const [currentStateValue, functionToSetNewStateValue] = useState(
  initialStateValue
)
```

go onClick we just use the function reference

logRandom without ()

# return

return <button></button> we return a functiin call
a call of React.CreateElemnet

# event

```js
function Button () {
  const [counter, setCounter] = useState(5)
  const handleClick = () => setCounter(counter * 2)

  return <button onClick={handleClick}>{counter}</button>
}
```

- display counter's value in the display component

# one way flow of data

we move the state up to the highest component

# controlled element / setting state in class components

obsereve data in input field

define value of input in state and initialize it

```js
state = { userName: '' }
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

# state

every var that is going to change in the UI should most probably be in state (general rule of thumb)

```js
const [stars, setStars] = useState(utils.random(1, 9)) //read: stars = utils.random(1, 9)
```

# components

extract elements to components if the have similar data and behaviour

# numbers in state

use mock data in useState
const [availableNumbers, setAvailableNumbers] = useState([1,2,3,4,5]);

# process

- ako kliknemo na broj sa desne strane mora se boja promjeniti
- boja se mijenja u odnosu na to da li je taj broj:
  available number (if not available it is therefor used)
  wrong number

  if the sum of numbers is greater then the stars then we have wrong numbers
