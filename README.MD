# React generate unique key for map

Small helper library to generate unique keys for map in react when you don't have unique property.

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
