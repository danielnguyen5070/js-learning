const CalculatePrice = (tax) => (price) => price * (1 + tax)

const Tax10Percent = CalculatePrice(0.1)
const Tax20Percent = CalculatePrice(0.2)

const Price100 = Tax10Percent(100)
const Price200 = Tax20Percent(200)

console.log(Price100) // 110
console.log(Price200) // 240