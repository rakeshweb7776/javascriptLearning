import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
/* 01 Basic */
import { setupCounter } from './01_basics/counter.js'
import {dataTypes} from './01_basics/02_data_types.js'
import { conversionsOprators } from './01_basics/03_conversionsOprators.js'
import { comparision } from './01_basics/04_comparision.js'
import { dataTypeSummary } from './01_basics/05_data_types_summary.js'
import { string } from './01_basics/06_string.js'
import { numsAndMaths } from './01_basics/07_nums_and_maths.js'
import { dateAndTime } from './01_basics/08_date_time.js'
/* 02 Basic */
import { array } from './02_basics/01_array.js'
import { array_2 } from './02_basics/02_array.js'
import { objects_1 } from './02_basics/03_objects.js'
import { objects_2 } from './02_basics/04_objects.js'
import { function_1 } from './03_basics/01_functions.js'
import { scope_1 } from './03_basics/02_scope.js'



document.querySelector('#app').innerHTML = `
  <div>    
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Javascript!</h1>
  </div>
`

// setupCounter(document.querySelector('#counter'))
// dataTypes()
// conversionsOprators()
// comparision()
// dataTypeSummary()
// string()
// numsAndMaths()
// dateAndTime()
// array()
// array_2();
// objects_1()
// objects_2()
// function_1()
scope_1()