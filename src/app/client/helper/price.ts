const priceVND = (text: number) => {
  let textUp;
  textUp = text.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });;

  return textUp;

}
export {
  priceVND
}
