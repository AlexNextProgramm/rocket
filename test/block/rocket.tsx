import { $ } from '@rocet/core/rocet';
import { integ } from '@rocet/core/integration';

//  тест коде  1
export function HelloWord() { 
    const code = $(<pre></pre>);
    code.text(
`import { $ } from '@rocet/core/rocet';
import { integ } from '@rocet/core/integration';
const $h1 = $(<h1>Hello Word!!!</h1>)
`)
    $('.right').add(code);
}

