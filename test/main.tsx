import './css/root.scss'
import { $ } from '@rocet/core/rocet';
import { integ } from '@rocet/core/integration';
import '@rocet/core/ListenEvents';
import './block/rocket'
import { HelloWord } from './block/rocket';


$('#try').on('click', () => {
    HelloWord();
})