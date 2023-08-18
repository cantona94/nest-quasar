export interface ExampleStateInterface {
  prop: string;
}

function state(): ExampleStateInterface {
  return {
    prop: 'hello'
  }
}

export default state;
