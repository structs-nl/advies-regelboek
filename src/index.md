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

import * as Parse from "./parse.js";


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

const inkomenToeslagpartnerInput = Inputs.range([inkomen_van, inkomen_tot], {step: 1, value: 2000, label: "Wat is het inkomen van uw toeslagpartner?"})
const inkomenToeslagpartner = Generators.input(inkomenToeslagpartnerInput);

const vermogenToeslagPartnerInput = Inputs.range([0, 200000], {step: 1, value: 1000, label: "Wat is het vermogen van uw toeslagpartner?"})
const vermogenToeslagPartner = Generators.input(vermogenToeslagPartnerInput);

const toeslagpartnerInput = Inputs.toggle({label: "Heeft u een toeslagpartner?"})
const toeslagpartner = Generators.input(toeslagpartnerInput)

const kinderbijslagInput = Inputs.toggle({label: "Ontvangt u kinderbijslag?"})
const kinderbijslag = Generators.input(kinderbijslagInput)

const kinderenInput = Inputs.text({label: "Wat zijn de leeftijden van uw kinderen voor wie u kinderbijslag ontvangt?"})
const kinderen = Generators.input(kinderenInput)

const leeftijdInput = Inputs.range([18, 100], {step: 1, value: 20, label: "Wat is uw leeftijd?"})
const leeftijd = Generators.input(leeftijdInput);

const leeftijdPartnerInput = Inputs.range([18, 100], {step: 1, value: 20, label: "Wat is uw partner's leeftijd?"})
const leeftijdPartner = Generators.input(leeftijdPartnerInput)


const gezamenlijkHuishoudenInput = Inputs.toggle({label: "Heeft u een gezamenlijk huishouden?"})
const gezamenlijkHuishouden = Generators.input(gezamenlijkHuishoudenInput)

const woningdelerInput = Inputs.toggle({label: "Deelt u uw woning met mensen met wie u geen huishouden deelt?"})
const woningdeler = Generators.input(woningdelerInput)

const zichtopverbeteringInput = Inputs.toggle({label: "Heeft u of uw partner zicht op een inkomensverbetering?"})
const zichtopverbetering = Generators.input(zichtopverbeteringInput)

const vermogenHuishoudenInput = Inputs.range([0, 200000], {step: 1, value: 1000, label: "Wat is het vermogen van uw huishouden?"})
const vermogenHuishouden = Generators.input(vermogenHuishoudenInput)

const inkomen2024Input = Inputs.text({label: "Wat was uw inkomen in 2024?"})
const inkomen2023Input = Inputs.text({label: "Wat was uw inkomen in 2023?"})
const inkomen2022Input = Inputs.text({label: "Wat was uw inkomen in 2022?"})

const inkomen2024 = Generators.input(inkomen2024Input)
const inkomen2023 = Generators.input(inkomen2023Input)
const inkomen2022 = Generators.input(inkomen2022Input)


const inkomenPartner2024Input = Inputs.text({label: "Wat was uw partners inkomen in 2024?"})
const inkomenPartner2023Input = Inputs.text({label: "Wat was uw partners inkomen in 2023?"})
const inkomenPartner2022Input = Inputs.text({label: "Wat was uw partners inkomen in 2022?"})

const inkomenPartner2024 = Generators.input(inkomenPartner2024Input)
const inkomenPartner2023 = Generators.input(inkomenPartner2023Input)
const inkomenPartner2022 = Generators.input(inkomenPartner2022Input)
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

<div class="grid grid-cols-2" style="grid-auto-rows: auto;">

  <div class="card">
      ${woonplaatsInput}
	  ${leeftijdInput}
      ${inkomenInput}
      ${vermogenInput}
      ${toeslagpartnerInput}
      ${toeslagpartner ? inkomenToeslagpartnerInput: ''}
      ${toeslagpartner ? vermogenToeslagPartnerInput: ''}
      ${kinderbijslagInput}
      ${kinderbijslag ? kinderenInput: ''}
	  ${woonplaats == "Amsterdam" ? inkomen2024Input : ''}
	  ${woonplaats == "Amsterdam" ? inkomen2023Input : ''}
	  ${woonplaats == "Amsterdam" ? inkomen2022Input : ''}
	  ${woonplaats == "Amsterdam" ? gezamenlijkHuishoudenInput : ''}
	  ${woonplaats == "Amsterdam" ? woningdelerInput : ''}
      ${woonplaats == "Amsterdam" && gezamenlijkHuishouden ? inkomenPartner2024Input : ''}
	  ${woonplaats == "Amsterdam" && gezamenlijkHuishouden ? inkomenPartner2023Input : ''}
	  ${woonplaats == "Amsterdam" && gezamenlijkHuishouden ? inkomenPartner2022Input : ''}
	  ${woonplaats == "Amsterdam" && gezamenlijkHuishouden ? leeftijdPartnerInput : ''}
	  ${woonplaats == "Amsterdam" ? zichtopverbeteringInput : ''}
	  ${woonplaats == "Amsterdam" ? vermogenHuishoudenInput : ''}
  </div>

  <div class="card">
    <h2>Inkomen</h2>
    ${display(lines)}
  </div>


  <div class="card grid-colspan-1" style="max-height: 100px;">
    <h2>Individuele Inkomenstoeslag Amsterdam</h2>
    <span class="big">€ ${Regelboek.iit_adam(zichtopverbetering, woonplaats, leeftijd, leeftijdPartner, vermogenHuishouden, gezamenlijkHuishouden, woningdeler, inkomen2024, inkomen2023, inkomen2022, inkomenPartner2024, inkomenPartner2023, inkomenPartner2022)} jaar</span>
  </div>

    
  <div class="card grid-colspan-1"  style="max-height: 100px;">
    <h2>Totaal</h2>
	<span class="big">€ ${Math.round(Regelboek.cumlatief(toeslagpartner, intarray(kinderen), kinderbijslag, inkomen, vermogen))},- per jaar</span>
  </div>


  <div class="card grid-colspan-1" style="max-height: 100px;">
    <h2>Zorgtoeslag</h2>
    <span class="big">€ ${Math.round(Regelboek.zorgtoeslag(toeslagpartner, inkomen, vermogen))},- per jaar</span>
  </div>

  <div class="card grid-colspan-1" style="max-height: 100px;">
    <h2>Kindgebonden budget</h2>
    <span class="big">€ ${Regelboek.kgb(toeslagpartner, intarray(kinderen), kinderbijslag, inkomen, vermogen)},- per jaar</span>
  </div>

</div>
