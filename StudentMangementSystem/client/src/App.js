import Demo1 from './Components/Demo1'
import SingleProp from './Components/SingleProp';
import MultipleProp from './Components/MultipleProp';
import ValueProps from './Components/Value.prop'
function App() {

  const age = 30;
  const income = 100000 * 20 % +(15000) + (2 * `${age}`)

  return (
    <>
      {/* <Demo1 />
      <SingleProp name='suman' />
      <MultipleProp x="Amit" y="Suman" z="Rohit" />
      <MultipleProp x="Amit" /> */}

      <ValueProps
        strData="This is String Value"
        templateData={`The age is ${age} and ${income}`}
        numData={23}
        boolData={false}
        objData={{ name: 'Dev' }}
        jsxData={45 % 5}
        anyData={`${age}*${income} 👍`}
      />

    </>

  );
}

export default App;
