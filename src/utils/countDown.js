export function countDown(n) {
  if (n <= 0) return "Данные неверны";
  for (let i = n; i >= 1; i--) {
    return i;
  }
}
