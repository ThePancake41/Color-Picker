// Name: Color Picker

import "@johnlindquist/kit"

let typeOfID = await arg("Select Input", ["hex", "rgb", "hsl"])
let colorID = await arg("enter color id")
let colorAPIid = `http://www.thecolorapi.com/id?${typeOfID}=${colorID}`
let colorAPIscheme = `http://www.thecolorapi.com/scheme?${typeOfID}=${colorID}`
let responseID = await get(colorAPIid).then(response => {return response})
let responseScheme = await get(colorAPIscheme).then(response => {return response})
let responseSchemeParsed = "background-color: " + responseScheme.data.colors[0].hex.value + ";";
inspect(responseScheme)

let w = widget(`
<div >
    <p>Hex:${responseID.data.hex.value}</p>
    <p>RGB:${responseID.data.rgb.value.slice(3)}</p>
    <p>HSV:${responseID.data.hsv.value.slice(3)}</p>
</div>
`)