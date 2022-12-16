export function formatCoin(coin: number) {
  return new Intl.NumberFormat(
    'pt-br',
    { style:'currency', currency:'BRL'})
    .format(coin)
}