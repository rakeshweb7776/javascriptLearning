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
import { arrow_function } from './03_basics/03_arrow_function.js'
import { iife } from './03_basics/04_iife.js'
import { one } from './04_control_flow/one.js'
import { forLoop } from './05_iterations/01_for_loop.js'
import { whileLoop } from './05_iterations/02_while_loop.js'
import { forEach_map_filter_reduce } from './05_iterations/03_forEach_map_filter_reduce.js'
import { dom_1 } from './06_dom/01_dom.js'
import { dom_2 } from './06_dom/02_dom.js'
import { dom_3 } from './06_dom/03_dom.js'
import { color_change } from './07_projects/01_color_change.js'
import { bmi_calculator } from './07_projects/02_bmi_calculator.js'
import { digital_watch } from './07_projects/03_digital_watch.js'
import { event_01 } from './08_events/01_image_events.js'
import { event_02 } from './08_events/02_rendom_color_change_events.js'
import { get_key } from './08_events/03_get_key.js'
import { xml_https_request } from './09_advanced/01_xml_https_request.js'
import { promises } from './09_advanced/02_promises.js'



document.querySelector('#app').innerHTML = `
  <div>    
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Javascript!</h1>
    <hr style="margin:20px;"/>

   

    <hr style="margin:20px;"/>
    
    <div class="parent">
        <div class="day">Monday</div>
        <div class="day">Tudesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thusday</div>
    </div>

   <hr style="margin:20px;"/>
    <input id="langInput" placeholder"Add language">
    <button id="submitBtn">Add language</button>
    <ul class="language">
    <li>Javascript</li> 
    </ul>


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
// scope_1()
// arrow_function()
// iife()
// one()
// forLoop()
// whileLoop()
// forEach_map_filter_reduce()
// dom_1()
// dom_2()
// dom_3()
// color_change()
// bmi_calculator()
// digital_watch()
// event_01()
// event_02()
// get_key()
// xml_https_request()
promises()