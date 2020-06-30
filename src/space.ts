namespace Rule {
  const str = 'aaa';
  export const rule = 100;
  export interface StringRule{
    isString():boolean;
  }

  export function bbb(str: string) {
    console.log('namespace bbb', str);
  }
}

console.log('jfldksajlfk', Rule);