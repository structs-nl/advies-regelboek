---

theme: dashboard
title: Toeslagen
toc: false
style: custom-style.css
---


```js

import dot from "npm:@observablehq/dot";

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

const kinderbijslagInput = Inputs.toggle({label: html`<span>Ontvangt u kinderbijslag?</span>`})
const kinderbijslag = Generators.input(kinderbijslagInput)

const kinderenInput = Inputs.text({label: "Wat zijn de leeftijden van uw kinderen?"})
const kinderen = Generators.input(kinderenInput)

const ondernemerInput = Inputs.toggle({label: "Bent u ondernemer?"})
const ondernemer = Generators.input(ondernemerInput)

const winstInput = Inputs.range([inkomen_van, inkomen_tot], {step: 1, value: 2000, label: "Wat is de belastbare winst?"})
const winst = Generators.input(winstInput);

```

```js


 // TODO toeslag inkomen en vermogen optellen
 // TODO cumlatieve waarde toevoegen
 // TODO standaardwaarde kinderen
 // TODO hogere waarden dan toegestaan?
 // TODO kleuren terug laten komen bij de regelingen

 
 const vermogenTotaal = (vermogen, toeslagpartner, vermogenPartner) => vermogen + (toeslagpartner ? vermogenPartner : 0)

 const zorgdata =  x.map((e,i) => (
    { "Inkomen": e,
      "Bedrag": Regelboek.zorgtoeslag(toeslagpartner, e, vermogen)
    }
  ))

 const kgbdata =  x.map((e,i) => (
    { "Inkomen": e,
      "Bedrag": Regelboek.kgb(toeslagpartner, intarray(kinderen), kinderbijslag, e, vermogen)
    }
  ))

const lines = Plot.plot({
  marks: [
    Plot.lineY(zorgdata, {x: "Inkomen", y: "Bedrag", stroke: "red"}),
    Plot.lineY(kgbdata, {x: "Inkomen", y: "Bedrag", stroke: "blue"})
  ]
})

```

<div class="grid grid-cols-3">

  <div class="card grid-colspan-1">
      ${inkomenInput}
      ${vermogenInput}
      ${toeslagpartnerInput}
      ${toeslagpartner ? inkomenPartnerInput: ''}
      ${toeslagpartner ? vermogenPartnerInput: ''}
      ${kinderbijslagInput}
      ${kinderbijslag ? kinderenInput: ''}
      ${ondernemerInput}
      ${ondernemer ? winstInput : ''}
  </div>


  <div class="card grid-colspan-2">
    <h2>Inkomen</h2>
    ${display(lines)}
  </div>
  
  </div>
  
  <div class="grid grid-cols-3">


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
