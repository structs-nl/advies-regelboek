---

theme: dashboard
title: Toeslagen
toc: false
style: custom-style.css
---


```js

import * as Plot from "npm:@observablehq/plot";
import * as Inputs from "npm:@observablehq/inputs";
import * as Regelboek from "./regelboek.js";

const intarray = (input) =>  (input.split(" ").map((x) => parseInt(x)).filter((x) => !Number.isNaN(x)));

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );

const inkomen_van = 0;
const inkomen_tot = 50000;
const x = range(inkomen_van, inkomen_tot, 10);

```

# Proefberekening

```js

const woonplaatsInput = Inputs.select(["Amsterdam", "Elders"], { label: "Wat is uw woonplaats?"})
const woonplaats = Generators.input(woonplaatsInput);

const inkomenInput = Inputs.range([inkomen_van, inkomen_tot], {step: 1, value: 2000, label: "Wat is uw inkomen?"})
const inkomen = Generators.input(inkomenInput);

const vermogenInput = Inputs.range([0, 200000], {step: 1, value: 1000, label: "Wat is uw vermogen?"})
const vermogen = Generators.input(vermogenInput);

const inkomenPartnerInput = Inputs.range([inkomen_van, inkomen_tot], {step: 1, value: 2000, label: "Wat is het inkomen van uw partner?"})
const inkomenPartner = Generators.input(inkomenPartnerInput);

const vermogenPartnerInput = Inputs.range([0, 200000], {step: 1, value: 1000, label: "Wat is het vermogen van uw partner?"})
const vermogenPartner = Generators.input(vermogenPartnerInput);

const toeslagpartnerInput = Inputs.toggle({label: "Heeft u een toeslagpartner?"})
const toeslagpartner = Generators.input(toeslagpartnerInput)

const kinderbijslagInput = Inputs.toggle({label: "Ontvangt u kinderbijslag?"})
const kinderbijslag = Generators.input(kinderbijslagInput)

const kinderenInput = Inputs.text({label: "Wat zijn de leeftijden van uw kinderen?"})
const kinderen = Generators.input(kinderenInput)


const inkomenMin1Input = Inputs.text({label: "Wat was uw inkomen vorig jaar?"})
const inkomenMin2Input = Inputs.text({label: "Wat was uw inkomen twee jaar geleden?"})
const inkomenMin3Input = Inputs.text({label: "Wat was uw inkomen drie jaar geleden?"})

const inkomenMin1 = Generators.input(inkomenMin1Input)
const inkomenMin2 = Generators.input(inkomenMin2Input)
const inkomenMin3 = Generators.input(inkomenMin3Input)



```

```js

 // TODO toeslag inkomen en vermogen optellen
 // TODO standaardwaarde kinderen
 // TODO hogere waarden dan toegestaan?

 
 const vermogenTotaal = (vermogen, toeslagpartner, vermogenPartner) => vermogen + (toeslagpartner ? vermogenPartner : 0)

 const zorgdata =  x.map((e,i) => (
    { "Inkomen": e,
      "Bedrag": Regelboek.zorgtoeslag(toeslagpartner, e, vermogen),
	  regeling: "Zorgtoeslag"
    }
  ))

 const kgbdata =  x.map((e,i) => (
    { "Inkomen": e,
      "Bedrag": Regelboek.kgb(toeslagpartner, intarray(kinderen), kinderbijslag, e, vermogen),
	  regeling: "KGB"
    }
 ))
 
 const cumlatiefdata =  x.map((e,i) => (
    { "Inkomen": e,
      "Bedrag": Regelboek.cumlatief(toeslagpartner, intarray(kinderen), kinderbijslag, e, vermogen),
	  regeling: "Totaal"
    }
  ))

 const lines = Plot.plot({
	 color: {
		 legend: true,
		 scheme: "Observable10"
	 },
	 grid: true,
	 marks: [
		 Plot.lineY(zorgdata, {x: "Inkomen", y: "Bedrag", stroke: "regeling", strokeWidth: 4, strokeOpacity:0.8}),
		 Plot.lineY(kgbdata, {x: "Inkomen", y: "Bedrag", stroke: "regeling", strokeWidth: 4, strokeOpacity:0.8}),
		 Plot.lineY(cumlatiefdata, {x: "Inkomen", y: "Bedrag", stroke: "regeling", strokeWidth: 4, strokeOpacity:0.8})
  ]
})

```

<div class="grid grid-cols-2">

  <div class="card grid-colspan-1">
      ${woonplaatsInput}
      ${inkomenInput}
      ${vermogenInput}
      ${toeslagpartnerInput}
      ${toeslagpartner ? inkomenPartnerInput: ''}
      ${toeslagpartner ? vermogenPartnerInput: ''}
      ${kinderbijslagInput}
      ${kinderbijslag ? kinderenInput: ''}
	  ${woonplaats == "Amsterdam" ? inkomenMin1Input : ''}
	  ${woonplaats == "Amsterdam" ? inkomenMin2Input : ''}
	  ${woonplaats == "Amsterdam" ? inkomenMin3Input : ''}
  </div>
  
  

<div class="grid grid-cols-1">

    
  <div class="card" style="max-height: 100px;">
    <h2>Totaal</h2>
	<span class="big">€ ${Math.round(Regelboek.cumlatief(toeslagpartner, intarray(kinderen), kinderbijslag, inkomen, vermogen))},- per jaar</span>
  </div>


  <div class="card" style="max-height: 100px;">
    <h2>Zorgtoeslag</h2>
    <span class="big">€ ${Math.round(Regelboek.zorgtoeslag(toeslagpartner, inkomen, vermogen))},- per jaar</span>
  </div>

  <div class="card" style="max-height: 100px;">
    <h2>Kindgebonden budget</h2>
    <span class="big">€ ${Regelboek.kgb(toeslagpartner, intarray(kinderen), kinderbijslag, inkomen, vermogen)},- per jaar</span>
  </div>

  <div class="card" style="max-height: 100px;">
    <h2>Individuele Inkomenstoeslag Amsterdam</h2>
    <span class="big">€ 85 per jaar</span>
  </div>

</div>

  <div class="card grid-colspan-1">
    <h2>Inkomen</h2>
    ${display(lines)}
  </div>

</div>
