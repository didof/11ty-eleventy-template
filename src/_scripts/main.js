import './lazy-picture.js'
import { toggle, listen } from './dom.js'

console.log('You can run any custom script. Start from src/_scripts/main.js')

listen.onclick('btn_toggle', () => {
  console.log('ciao')
  toggle.disable('skeu')
  toggle.disable('minimal_3d')
})