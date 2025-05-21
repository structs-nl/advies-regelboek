export {minimumloon_per_maand, drempelinkomen, rendementsgrondslag, rendementsgrondslag_met_partner, rendementsgrondslag_zonder_partner}

const percentage = (getal, percentage) => (getal / 100) * percentage;
const som = (fn, arr) => arr.reduce((acc, arg) => acc + fn(arg), 0);

// Cumlatief

export {cumlatief}

const cumlatief =  (partner, leeftijden_kinderen, kinderbijslag, toetsingsinkomen, vermogen ) =>
      kgb(partner, leeftijden_kinderen, kinderbijslag, toetsingsinkomen, vermogen)
      +
      zorgtoeslag(partner, toetsingsinkomen, vermogen);

// TODO namespaces, geldigheidsdatums


const minimumloon_per_maand = 2069.40;
const drempelinkomen = 1.08 * 12 * minimumloon_per_maand;

const rendementsgrondslag = (partner) => rendementsgrondslag_met_partner(partner) + rendementsgrondslag_zonder_partner(partner);
const rendementsgrondslag_met_partner = (partner) => (partner == true ? 177301 : 0);
const rendementsgrondslag_zonder_partner = (partner) => (partner == false ? 140213 : 0);


// IIT Amsterdam

export {iit_adam}

const iit_adam = (zichtopverbetering, woonplaats, leeftijd, leeftijd_partner, vermogen, partner, woningdeler,
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

// KGB

export {kgb_per_kind, kgb, kgb_basis, kgb_12_15, kgb_16_17}

const kgb_additie_aeen_partner = 3480

const kgb_basis = (leeftijd) => (leeftijd < 18 ? 2436 : 0)
const kgb_12_15 = (leeftijd) => (leeftijd >= 12 && leeftijd <= 15 ? 694 : 0)
const kgb_16_17 = (leeftijd) => (leeftijd >= 16 && leeftijd <= 17 ? 924 : 0)
const kgb_per_kind = (leeftijd) => kgb_basis(leeftijd) + kgb_12_15(leeftijd) + kgb_16_17(leeftijd)

const kgb_geen_partner_onder_drempelinkomen = (partner,leeftijden_kinderen, toetsingsinkomen) =>
    (partner == false && toetsingsinkomen <= drempelinkomen) ?
    kgb_additie_aeen_partner + som(kgb_per_kind, leeftijden_kinderen)
    : 0

const kgb_geen_partner_boven_drempelinkomen = (partner,leeftijden_kinderen, toetsingsinkomen) =>
    (partner == false && toetsingsinkomen > drempelinkomen) ?
    (kgb_additie_aeen_partner + som(kgb_per_kind, leeftijden_kinderen)) - percentage(toetsingsinkomen - drempelinkomen, 6.75)
    : 0

const kgb_partner_onder_drempelinkomen = (partner,leeftijden_kinderen, toetsingsinkomen) =>
    (partner == true && toetsingsinkomen <= (drempelinkomen + 9300)) ?
    som(kgb_per_kind, leeftijden_kinderen)
    : 0

const kgb_partner_boven_drempelinkomen = (partner,leeftijden_kinderen, toetsingsinkomen) =>
    (partner == true && toetsingsinkomen > (drempelinkomen + 9300)) ?
    som(kgb_per_kind, leeftijden_kinderen) - percentage(toetsingsinkomen - (drempelinkomen + 9300), 6.75)
    : 0

const kgb = (partner, leeftijden_kinderen, kinderbijslag, toetsingsinkomen, vermogen ) =>
    (kinderbijslag == true && vermogen < rendementsgrondslag(partner)) ?

    kgb_geen_partner_onder_drempelinkomen (partner, leeftijden_kinderen, toetsingsinkomen) +
    kgb_geen_partner_boven_drempelinkomen(partner, leeftijden_kinderen, toetsingsinkomen)  +
    kgb_partner_onder_drempelinkomen (partner, leeftijden_kinderen, toetsingsinkomen) +
    kgb_partner_boven_drempelinkomen (partner, leeftijden_kinderen, toetsingsinkomen) 
    : 0

// Zorgtoeslag

export {standaardpremie, toetsingsinkomen_boven_drempelinkomen, normpremie_geen_partner, normpremie_partner, normpremie, zorgtoeslag_partner, zorgtoeslag_geen_partner, zorgtoeslag}

const standaardpremie = 1987

const toetsingsinkomen_boven_drempelinkomen = (toetsingsinkomen) =>
    (toetsingsinkomen > drempelinkomen) ? (toetsingsinkomen - drempelinkomen) : 0

const normpremie_geen_partner = (partner, toetsingsinkomen) =>
    (partner == false) ? percentage(drempelinkomen, 1.879) + percentage(toetsingsinkomen_boven_drempelinkomen(toetsingsinkomen), 13.670) : 0

const normpremie_partner =  (partner, toetsingsinkomen) =>
    (partner == true) ? percentage(drempelinkomen, 4.256) + percentage(toetsingsinkomen_boven_drempelinkomen(toetsingsinkomen), 13.670) : 0

const normpremie =  (partner, toetsingsinkomen) => normpremie_partner(partner, toetsingsinkomen) + normpremie_geen_partner(partner, toetsingsinkomen)

const zorgtoeslag_partner = (partner, toetsingsinkomen) =>
    (partner == true && normpremie(partner, toetsingsinkomen) < (2 * standaardpremie)) ? (2 * standaardpremie) - normpremie(partner, toetsingsinkomen) : 0

const zorgtoeslag_geen_partner = (partner, toetsingsinkomen) =>
    (partner == false && normpremie(partner, toetsingsinkomen) < standaardpremie) ? standaardpremie - normpremie(partner, toetsingsinkomen) : 0

const zorgtoeslag = (partner, toetsingsinkomen, vermogen) =>
    vermogen < rendementsgrondslag(partner) ?
        (zorgtoeslag_partner(partner, toetsingsinkomen) + zorgtoeslag_geen_partner(partner, toetsingsinkomen))
      : 0

// Kinderopvangtoeslag

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
      [33.3,67.1]
