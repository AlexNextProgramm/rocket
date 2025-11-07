import './css/root.scss'
import { $ } from '@rocet/core/rocet';
import '@rocet/core/ListenEvents';
import './block/rocket'
import { HelloWord } from './block/rocket';



$('#try').on('click', () => {
    HelloWord();
})