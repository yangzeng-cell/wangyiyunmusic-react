export default function (timeStamp, format = '') {
  // console.log(new Date(timeStamp).toString());
  timeStamp = new Date(timeStamp);
  if (!format) {
    const month = (timeStamp.getMonth() + 1).toString().padStart(2, 0);
    const day = timeStamp.getDay().toString().padStart(2, 0);
    return month + '月' + day + '日';
  } else {
    const mintus = timeStamp.getMinutes().toString().padStart(2, 0);
    const seconds = timeStamp.getSeconds().toString().padStart(2, 0);
    return mintus + ':' + seconds;
  }
}
