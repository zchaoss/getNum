const getBase64 = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
const getNum = (urlencode) => {
  let xhr = new XMLHttpRequest();
  let access_token = `24.a87ff6bbe28ebf083118a900944fccf8.2592000.1607692146.282335-22964347`;
  let url = `https://aip.baidubce.com/rest/2.0/ocr/v1/numbers`;

  xhr.open(`post`, `${url}?access_token=${access_token}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
    }
  };
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(`image=${urlencode}`);
};
const fixedEncodeURIComponent = (str) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
};
let urlencode;
let imgUrl = "https://i.loli.net/2020/11/07/9Gwdm7PIe8FUuSs.png";

getBase64(imgUrl).then(function (value) {
  urlencode = fixedEncodeURIComponent(value);
  getNum(value);
});
