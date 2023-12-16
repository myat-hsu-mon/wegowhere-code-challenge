export default function getRandomAmount(): number {
  const randomDecimal = Math.random();
  const range = 20000 - 2000;
  const randomAmount = Math.floor(randomDecimal * range) + 2000;

  return randomAmount;
}
