export default function (item) {
  if (item / 100000 < 1) {
    return item;
  } else {
    return (item = parseInt(item / 10000) + '万');
  }
}
