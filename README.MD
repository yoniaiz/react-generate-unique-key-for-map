# React generate unique key for map

Small helper library to generate unique keys for map in react when you don't have unique property.

## Benefits

The unique key stays persistent every re-render and won't cause rerenders of the component.
So its a better alternative then passing just a unique generator function that will change the key every
re-render or passing the index of the item.

example

## Usage/Examples

```javascript
import Component from "my-project";
import { useGetUniqueKey } from "react-generate-unique-key-for-map";

const arrOfRandomObjects = [
  { age: 11, name: "Joni" },
  { age: 11, height: 1.8 },
  { age: 12, weight: 84 },
];

function App() {
  // works with any type of data - arrays, objects, strings, numbers...
  const getUniqueKey = useGetUniqueKey();

  return (
    <>
      {arrOfRandomObjects.map((obj) => (
        <Component age={obj.age} key={getUniqueKey(obj)} />
      ))}
    </>
  );
}
```
