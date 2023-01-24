import Demo1 from './Components/Demo1'
import SingleProp from './Components/SingleProp';
import MultipleProp from './Components/MultipleProp';
import ValueProps from './Components/Value.prop'
import PropsPass from './Components/PropsPass'
import OptionalProps from './Components/OptionalProps'
import PropsSpread from './Components/PropsSpread'
import Parent from './Components/Parent'
//import Product from './ProductCard/Product';
import JsxComponent from './Components/JsxComponent'
import NotJsx from './Components/NotJsx';
//import Population from './Validation/Population';
//import Validation from './Validation/Validation'
import TotalValidation from './Validation/TotalValidation'

function App() {

  const age = 30;
  const income = 100000 * 20 % +(15000) + (2 * `${age}`)
  const x = { a: 'AMIT', b: 'SUMAN', c: 'SAQ', d: 'Supa', e: 'rohi', f: 'retw', g: 'dev' }

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

      {/* <PropsPass students={['Amit', 'Suman', 'Retwik', 'rohit', 'saq', 'Sup']} /> */}

      {/* <OptionalProps name='Deb' />
      <br />
      <OptionalProps name='' /> */}

      {/* <PropsSpread a={x.a} b={x.b} c={x.c} />
      <hr />
      <PropsSpread {...x} /> */}


      {/* <Parent>
        <Demo1 />
      </Parent> */}

      {/* <Product /> */}

      {/* <JsxComponent /> */}

      {/* <NotJsx /> */}

      {/* <Population /> */}

      {/* <Validation /> */}
      <TotalValidation />
    </>

  );
}

export default App;
