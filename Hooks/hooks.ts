import { Before, After, BeforeStep, AfterStep } from "../Steps/fixtures";


Before({},async function (){
    // before scenario
    console.log('\x1b[36m','Scenario started')
})

After({},async function(){
    // after scenario
    console.log('\x1b[36m','Scenario ended')
})



