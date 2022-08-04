export default function (timeStamp) {
  //const time = timeStamp.toString();
  const month = (timeStamp.getMonth() + 1).toString().padStart(2, 0);
  const day = timeStamp.getDay().toString().padStart(2, 0);

  return month + '月' + day + '日';
}
