// USA watch

let usaWatch = () => {
  let options = {timeZone: 'America/Los_Angeles'};
  let usaDate = new Date().toLocaleDateString('en-US', options);
  let usaTime = new Date().toLocaleTimeString('en-US', options);
  document.querySelector('#usa-date').innerText = usaDate;
  document.querySelector('#usa-time').innerText = usaTime;
};
setInterval(usaWatch, 1000);

// Indian watch

let indianWatch = () => {
  options = {timeZone: 'Asia/Kolkata'};
  let indianDate = new Date().toLocaleDateString('en-US', options);
  let indianTime = new Date().toLocaleTimeString('en-US', options);
  document.querySelector('#indian-date').innerText = indianDate;
  document.querySelector('#indian-time').innerText = indianTime;
};
setInterval(indianWatch, 1000);

// Japan watch

let japanWatch = () => {
  options = {timeZone: 'Asia/Tokyo'};
  let japanDate = new Date().toLocaleDateString('en-US', options);
  let japanTime = new Date().toLocaleTimeString('en-US', options);
  document.querySelector('#japan-date').innerText = japanDate;
  document.querySelector('#japan-time').innerText = japanTime;
};
setInterval(japanWatch, 1000);








