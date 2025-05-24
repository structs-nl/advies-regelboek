

const minimumloon_per_maand = 2191.80

const drempelinkomen = 1.08 * (12 * minimumloon_per_maand); // 28405.728000000003

const standaardpremie = 2112;

// tot drempelinkomen: correct.
// van drempelinkomen tot 39891: in proefberekeing staat bij 39719 al op 0: 172 te hoog. percentage lijkt niet te kloppen. 13,91 klopt wel


const normpremie = (toetsingsinkomen) =>
      (0.01896 * drempelinkomen) + (0.137 * toetsingsinkomen_boven_drempelinkomen(toetsingsinkomen));

const toetsingsinkomen_boven_drempelinkomen = (toetsingsinkomen) =>
      (toetsingsinkomen > drempelinkomen) ? toetsingsinkomen - drempelinkomen : 0;

const zorgtoeslag = (toetsingsinkomen) =>
      normpremie(toetsingsinkomen) < standaardpremie ? (standaardpremie - normpremie(toetsingsinkomen)) : 0;
