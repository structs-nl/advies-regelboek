export {minimumloon_per_maand, drempelinkomen, rendementsgrondslag, rendementsgrondslag_met_partner, rendementsgrondslag_zonder_partner}

const percentage = (getal, percentage) => (getal / 100) * percentage
const som = (fn, arr) => arr.reduce((acc, arg) => acc + fn(arg), 0)

const minimumloon_per_maand = 1653.60
const drempelinkomen = 1.08 * 12 * minimumloon_per_maand

const rendementsgrondslag = (partner) => rendementsgrondslag_met_partner(partner) + rendementsgrondslag_zonder_partner(partner)
const rendementsgrondslag_met_partner = (partner) => (partner == true ? 177301 : 0)
const rendementsgrondslag_zonder_partner = (partner) => (partner == false ? 140213 : 0)

// KGB
export {kgb_per_kind, kgb_geen_partner, kgb, kgb_basis, kgb_12_15, kgb_16_17}

const kgb_per_kind = (leeftijd) => kgb_basis(leeftijd) + kgb_12_15(leeftijd) + kgb_16_17(leeftijd)

const kgb_basis = (leeftijd) => (leeftijd < 18 ? 2436 : 0)
const kgb_12_15 = (leeftijd) => (leeftijd >= 12 && leeftijd <= 15 ? 694 : 0)
const kgb_16_17 = (leeftijd) => (leeftijd >= 16 && leeftijd <= 17 ? 924 : 0)

const kgb_geen_partner = (partner) => ( partner == false ? 3480 : 0)

const kgb = (partner, leeftijden_kinderen, kinderbijslag, toetsingsinkomen, vermogen ) =>
    (kinderbijslag == true && toetsingsinkomen < drempelinkomen && vermogen < rendementsgrondslag(partner)) ?
        kgb_geen_partner(partner) + som(kgb_per_kind, leeftijden_kinderen)
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