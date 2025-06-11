
const percentage = (getal, percentage) => (getal / 100) * percentage;
const som = (fn, arr) => arr.reduce((acc, arg) => acc + fn(arg), 0);

// Cumlatief per maand

export {cumlatief_per_maand, cumlatief_per_maand_met_iit}

const cumlatief_per_maand = (zorgverzekering, zorgverzekering_partner, partner, partner_tijdens_berekeningsjaar, leeftijden_kinderen, kinderbijslag, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner ) =>
      kgb_per_maand(partner, partner_tijdens_berekeningsjaar, leeftijden_kinderen, kinderbijslag, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner ) 
      +
      zorgtoeslag_per_maand(zorgverzekering, zorgverzekering_partner, partner_tijdens_berekeningsjaar, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner) 
      
const cumlatief_per_maand_met_iit =  (zorgverzekering, zorgverzekering_partner, partner, partner_tijdens_berekeningsjaar, leeftijden_kinderen, kinderbijslag, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner, zichtopverbetering, woonplaats, leeftijd, leeftijdPartner, vermogenHuishouden, gezamenlijkHuishouden, woningdeler, inkomen2024, inkomen2023, inkomen2022, inkomenPartner2024, inkomenPartner2023, inkomenPartner2022 ) =>
      kgb_per_maand(partner, partner_tijdens_berekeningsjaar, leeftijden_kinderen, kinderbijslag, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner ) 
      +
      zorgtoeslag_per_maand(zorgverzekering, zorgverzekering_partner, partner_tijdens_berekeningsjaar, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner) 
      +
      iit_per_maand(zichtopverbetering, woonplaats, leeftijd, leeftijdPartner, vermogenHuishouden, gezamenlijkHuishouden, woningdeler, inkomen2024, inkomen2023, inkomen2022, inkomenPartner2024, inkomenPartner2023, inkomenPartner2022)


// Generiek Toeslagen 2025

const minimumloon_per_maand = 2191.80;

const drempelinkomen = 1.08 * 12 * minimumloon_per_maand;

const rendementsgrondslag_norm = (partner_tijdens_berekeningsjaar) => partner_tijdens_berekeningsjaar ? 179429 : 141896


const rendementsgrondslag_som =  (partner_tijdens_berekeningsjaar, rendementsgrondslag, rendementsgrondslag_partner) =>
      partner_tijdens_berekeningsjaar ? rendementsgrondslag + rendementsgrondslag_partner : rendementsgrondslag


// KGB 2025

export {kgb, kgb_per_maand}

const kgb_toevoeging_geen_partner = 3389

const kgb_per_kind = (leeftijd) => kgb_basis(leeftijd) +  kgb_leeftijdafhankelijk(leeftijd)
const kgb_basis = (leeftijd) => (leeftijd < 18 ? 2511 : 0)

const kgb_leeftijdafhankelijk = (leeftijd) => (leeftijd >= 12 && leeftijd < 16 ? 703 :
					       leeftijd >= 16 && leeftijd <= 17 ? 936 : 0)

const kgb_per_maand = (partner, partner_tijdens_berekeningsjaar, leeftijden_kinderen, kinderbijslag, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner ) =>
      kgb(partner, partner_tijdens_berekeningsjaar, leeftijden_kinderen, kinderbijslag, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner ) / 12

const kgb = (partner, partner_tijdens_berekeningsjaar, leeftijden_kinderen, kinderbijslag, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner ) =>
      (
	  (kinderbijslag == true && partner == false && toetsingsinkomen > drempelinkomen
	  && rendementsgrondslag_som(partner_tijdens_berekeningsjaar, vermogen, vermogen_partner) < rendementsgrondslag_norm(partner_tijdens_berekeningsjaar))
	  && ((som(kgb_per_kind, leeftijden_kinderen) +  kgb_toevoeging_geen_partner) - percentage(7.1, (toetsingsinkomen - drempelinkomen))) > 0
	  ? ((som(kgb_per_kind, leeftijden_kinderen) +  kgb_toevoeging_geen_partner) - percentage(7.1, (toetsingsinkomen - drempelinkomen)))
	  :
	  (kinderbijslag == true && partner == false && toetsingsinkomen <= drempelinkomen
	  && rendementsgrondslag_som(partner_tijdens_berekeningsjaar, vermogen, vermogen_partner) < rendementsgrondslag_norm(partner_tijdens_berekeningsjaar))
	  ? (som(kgb_per_kind, leeftijden_kinderen) +  kgb_toevoeging_geen_partner)
	  :
	  (kinderbijslag == true && partner == true && (toetsingsinkomen + toetsingsinkomen_partner) > (drempelinkomen + 9139)
	  && rendementsgrondslag_som(partner_tijdens_berekeningsjaar, vermogen, vermogen_partner) < rendementsgrondslag_norm(partner_tijdens_berekeningsjaar))
	  && (som(kgb_per_kind, leeftijden_kinderen) - percentage(7.1, ((toetsingsinkomen + toetsingsinkomen_partner) - (drempelinkomen + 9139)))) > 0
	  ? (som(kgb_per_kind, leeftijden_kinderen) - percentage(7.1, ((toetsingsinkomen + toetsingsinkomen_partner) - (drempelinkomen + 9139))))
	  :
	  (kinderbijslag == true && partner == true && (toetsingsinkomen + toetsingsinkomen_partner) <= (drempelinkomen + 9139)
	  && rendementsgrondslag_som(partner_tijdens_berekeningsjaar, vermogen, vermogen_partner) < rendementsgrondslag_norm(partner_tijdens_berekeningsjaar))
	  ? som(kgb_per_kind, leeftijden_kinderen)
	  : 0
      )

// Zorgtoeslag 2025

export {zorgtoeslag, zorgtoeslag_per_maand}

const standaardpremie = 2112;

const toetsingsinkomen_boven_drempelinkomen = (zorgverzekering_partner, toetsingsinkomen, toetsingsinkomen_partner) =>
      (zorgverzekering_partner == true
      && 
       ((toetsingsinkomen + toetsingsinkomen_partner) > drempelinkomen))
      ? (toetsingsinkomen + toetsingsinkomen_partner) - drempelinkomen
      :
      (zorgverzekering_partner == false
      &&
       toetsingsinkomen > drempelinkomen)
      ?
      toetsingsinkomen - drempelinkomen
      : 0

const normpremie = (zorgverzekering_partner, toetsingsinkomen, toetsingsinkomen_partner) =>
      zorgverzekering_partner
      ? (percentage(drempelinkomen, 4.273) + percentage(toetsingsinkomen_boven_drempelinkomen(zorgverzekering_partner, toetsingsinkomen, toetsingsinkomen_partner),13.7))
      : (percentage(drempelinkomen, 1.896) + percentage(toetsingsinkomen_boven_drempelinkomen(zorgverzekering_partner, toetsingsinkomen, toetsingsinkomen_partner),13.7));

const zorgtoeslag_per_maand = (zorgverzekering, zorgverzekering_partner, partner_tijdens_jaar, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner) =>
      zorgtoeslag(zorgverzekering, zorgverzekering_partner, partner_tijdens_jaar, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner) / 12

const zorgtoeslag = (zorgverzekering, zorgverzekering_partner, partner_tijdens_jaar, toetsingsinkomen, toetsingsinkomen_partner, vermogen, vermogen_partner) =>
      (zorgverzekering == true
       &&
       zorgverzekering_partner == false
       &&
       normpremie(zorgverzekering_partner, toetsingsinkomen, toetsingsinkomen_partner) < standaardpremie
       &&
       rendementsgrondslag_som(partner_tijdens_jaar, vermogen, vermogen_partner) < rendementsgrondslag_norm(zorgverzekering_partner))
      ? (standaardpremie - normpremie(zorgverzekering_partner, toetsingsinkomen, toetsingsinkomen_partner))
      :
      ((zorgverzekering == true
	&&
	zorgverzekering_partner == true
	&&
	normpremie(zorgverzekering_partner, toetsingsinkomen, toetsingsinkomen_partner) < (2 * standaardpremie)
	&&
	rendementsgrondslag_som(partner_tijdens_jaar, vermogen, vermogen_partner) < rendementsgrondslag_norm(zorgverzekering_partner))
       ? ((2 * standaardpremie) - normpremie(zorgverzekering_partner, toetsingsinkomen, toetsingsinkomen_partner))
       : 0);

// IIT 2025

export {iit, iit_per_maand}

const iit_per_maand = (zichtopverbetering, woonplaats, leeftijd, leeftijd_partner, vermogen, partner, woningdeler,
		       inkomensgegeven_2024, inkomensgegeven_2023, inkomensgegeven_2022,
		       inkomensgegeven_partner_2024, inkomensgegeven_partner_2023, inkomensgegeven_partner_2022) =>
      
      iit(zichtopverbetering, woonplaats, leeftijd, leeftijd_partner, vermogen, partner, woningdeler,
	  inkomensgegeven_2024, inkomensgegeven_2023, inkomensgegeven_2022,
	  inkomensgegeven_partner_2024, inkomensgegeven_partner_2023, inkomensgegeven_partner_2022) / 12
      

const iit = (zichtopverbetering, woonplaats, leeftijd, leeftijd_partner, vermogen, partner, woningdeler,
		  inkomensgegeven_2024, inkomensgegeven_2023, inkomensgegeven_2022,
		  inkomensgegeven_partner_2024, inkomensgegeven_partner_2023, inkomensgegeven_partner_2022) =>
      (
      woonplaats == "Amsterdam" &&
      zichtopverbetering == false &&
      vermogen < vermogensgrens(partner) &&
      leeftijd >= 21 &&
      leeftijd < aow_leeftijd &&
      (partner == false || leeftijd_partner >= 21) &&
      (partner == false || leeftijd_partner < aow_leeftijd) &&
      inkomensgegeven_2024 <= norm_laag_inkomen(partner, woningdeler) &&
      inkomensgegeven_2023 <= norm_laag_inkomen(partner, woningdeler) &&      
      inkomensgegeven_2022 <= norm_laag_inkomen(partner, woningdeler) &&
      (partner == false || inkomensgegeven_partner_2024 <= norm_laag_inkomen(partner, woningdeler)) &&
      (partner == false || inkomensgegeven_partner_2023 <= norm_laag_inkomen(partner, woningdeler)) &&
      (partner == false || inkomensgegeven_partner_2022 <= norm_laag_inkomen(partner, woningdeler))
      )
      ? iit_bedrag(partner) : 0;

const vermogensgrens = (partner) => (partner ? 15540 : 7700);
const iit_bedrag = (partner) => (partner ? 170 : 85);
const aow_leeftijd = 67;

const norm_laag_inkomen = (partner, woningdeler) => iaow_norm(partner, woningdeler) * 12 * 1.2;

const iaow_norm = (partner, woningdeler) => partner ? 2194.30
					    : woningdeler ? 1097.15
					    : 1697.32;
// Kinderopvangtoeslag

// Niet in gebruik

const kot_percentages = (toetsingsinkomen) =>
      toetsingsinkomen <= 47403 ? [96, 96] :
      toetsingsinkomen > 47404 && toetsingsinkomen <= 49108 ? [95.3, 95.6] :
      toetsingsinkomen > 49109 && toetsingsinkomen <= 50811 ? [94.6,95.2] : 
      toetsingsinkomen > 50812 && toetsingsinkomen <= 52519 ? [93.7,94.8] : 
      toetsingsinkomen > 52520 && toetsingsinkomen <= 54221 ? [93.1,94.5] : 
      toetsingsinkomen > 54222 && toetsingsinkomen <= 55925 ? [92.3,94.5] : 
      toetsingsinkomen > 55926 && toetsingsinkomen <= 57629 ? [91.6,94.5] : 
      toetsingsinkomen > 57630 && toetsingsinkomen <= 59492 ? [90.7,94.5] : 
      toetsingsinkomen > 59493 && toetsingsinkomen <= 63144 ? [89.2,94.5] : 
      toetsingsinkomen > 63145 && toetsingsinkomen <= 66794 ? [88.4,94.1] : 
      toetsingsinkomen > 66795 && toetsingsinkomen <= 70446 ? [87.3,93.5] : 
      toetsingsinkomen > 70447 && toetsingsinkomen <= 74100 ? [85.0,93.1] : 
      toetsingsinkomen > 74101 && toetsingsinkomen <= 77750 ? [82.7,92.8] : 
      toetsingsinkomen > 77751 && toetsingsinkomen <= 81404 ? [80.5,92.1] : 
      toetsingsinkomen > 81405 && toetsingsinkomen <= 85055 ? [78.0,91.6] : 
      toetsingsinkomen > 85056 && toetsingsinkomen <= 88707 ? [75.7,91.1] : 
      toetsingsinkomen > 88708 && toetsingsinkomen <= 92360 ? [73.5,90.4] : 
      toetsingsinkomen > 92361 && toetsingsinkomen <= 96010 ? [71.1,89.8] : 
      toetsingsinkomen > 96011 && toetsingsinkomen <= 99667 ? [68.9,89.4] : 
      toetsingsinkomen > 99668 && toetsingsinkomen <= 103318 ? [66.4,89.1] : 
      toetsingsinkomen > 103319 && toetsingsinkomen <= 106968 ? [64.1,88.4] : 
      toetsingsinkomen > 106969 && toetsingsinkomen <= 110621 ? [61.9,88.0] : 
      toetsingsinkomen > 110622 && toetsingsinkomen <= 114344 ? [59.5,87.5] : 
      toetsingsinkomen > 114345 && toetsingsinkomen <= 118086 ? [57.4,86.8] : 
      toetsingsinkomen > 118087 && toetsingsinkomen <= 121825 ? [55.3,86.3] : 
      toetsingsinkomen > 121826 && toetsingsinkomen <= 125565 ? [53.2,85.9] : 
      toetsingsinkomen > 125566 && toetsingsinkomen <= 129303 ? [51.0,85.6] : 
      toetsingsinkomen > 129304 && toetsingsinkomen <= 133045 ? [49.1,84.9] : 
      toetsingsinkomen > 133046 && toetsingsinkomen <= 136786 ? [47.2,84.3] : 
      toetsingsinkomen > 136787 && toetsingsinkomen <= 140528 ? [45.3,83.9] : 
      toetsingsinkomen > 140529 && toetsingsinkomen <= 144264 ? [43.3,83.3] : 
      toetsingsinkomen > 144265 && toetsingsinkomen <= 148003 ? [41.3,82.9] : 
      toetsingsinkomen > 148004 && toetsingsinkomen <= 151746 ? [39.3,82.2] : 
      toetsingsinkomen > 151747 && toetsingsinkomen <= 155484 ? [37.3,81.6] : 
      toetsingsinkomen > 155485 && toetsingsinkomen <= 159224 ? [35.3,80.6] : 
      toetsingsinkomen > 159225 && toetsingsinkomen <= 162963 ? [33.3,80.3] : 
      toetsingsinkomen > 162964 && toetsingsinkomen <= 166705 ? [33.3,79.5] : 
      toetsingsinkomen > 166706 && toetsingsinkomen <= 170449 ? [33.3,78.6] : 
      toetsingsinkomen > 170450 && toetsingsinkomen <= 174186 ? [33.3,78.0] : 
      toetsingsinkomen > 174187 && toetsingsinkomen <= 177926 ? [33.3,77.1] : 
      toetsingsinkomen > 177927 && toetsingsinkomen <= 181663 ? [33.3,76.6] : 
      toetsingsinkomen > 181664 && toetsingsinkomen <= 185406 ? [33.3,75.8] : 
      toetsingsinkomen > 185407 && toetsingsinkomen <= 189147 ? [33.3,75.1] : 
      toetsingsinkomen > 189148 && toetsingsinkomen <= 192888 ? [33.3,74.4] : 
      toetsingsinkomen > 192889 && toetsingsinkomen <= 196627 ? [33.3,73.4] : 
      toetsingsinkomen > 196628 && toetsingsinkomen <= 200363 ? [33.3,72.9] : 
      toetsingsinkomen > 200364 && toetsingsinkomen <= 204107 ? [33.3,72.2] : 
      toetsingsinkomen > 204108 && toetsingsinkomen <= 207845 ? [33.3,71.4] : 
      toetsingsinkomen > 207846 && toetsingsinkomen <= 211586 ? [33.3,70.7] : 
      toetsingsinkomen > 211587 && toetsingsinkomen <= 215327 ? [33.3,70.1] : 
      toetsingsinkomen > 215328 && toetsingsinkomen <= 219065 ? [33.3,69.3] : 
      toetsingsinkomen > 219066 && toetsingsinkomen <= 222806 ? [33.3,68.5] : 
      toetsingsinkomen > 222807 && toetsingsinkomen <= 226545 ? [33.3,68.0] : 
      [33.3,67.1];
