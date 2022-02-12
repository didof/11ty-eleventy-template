const outdent = require('outdent')
const { attrs } = require('./index.js')

module.exports = function ec(slot, id, variant = 'primary') {
  return outdent`
  <a href="#" class="ec wallet ${variant}" ${attrs({ id })}>
    <div class="overlay"></div>
    <div class="circle">
      <svg width="78px" height="60px" viewBox="23 29 78 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(23.000000, 29.500000)">
        <rect id="Rectangle-3" fill="#AC8BE9" x="67.8357511" y="26.0333433" width="9.40495664" height="21.8788565" rx="4.70247832"></rect>
        <rect id="Rectangle-3" fill="#6A5297" x="67.8357511" y="38.776399" width="9.40495664" height="10.962961" rx="4.70247832"></rect>
        <polygon id="Rectangle-2" fill="#6A5297" points="57.3086772 0 67.1649301 26.3776902 14.4413177 45.0699507 4.58506484 18.6922605"></polygon>
        <path d="M0,19.6104296 C0,16.2921718 2.68622235,13.6021923 5.99495032,13.6021923 L67.6438591,13.6021923 C70.9547788,13.6021923 73.6388095,16.2865506 73.6388095,19.6104296 L73.6388095,52.6639057 C73.6388095,55.9821635 70.9525871,58.672143 67.6438591,58.672143 L5.99495032,58.672143 C2.68403068,58.672143 0,55.9877847 0,52.6639057 L0,19.6104296 Z" id="Rectangle" fill="#8B6FC0"></path>
        <path d="M47.5173769,27.0835169 C45.0052827,24.5377699 40.9347162,24.5377699 38.422622,27.0835169 L36.9065677,28.6198808 L35.3905134,27.0835169 C32.8799903,24.5377699 28.8078527,24.5377699 26.2957585,27.0835169 C23.7852354,29.6292639 23.7852354,33.7559532 26.2957585,36.3001081 L36.9065677,47.0530632 L47.5173769,36.3001081 C50.029471,33.7559532 50.029471,29.6292639 47.5173769,27.0835169" id="Fill-12" fill="#F6F1FF"></path>
        <rect id="Rectangle-4" fill="#AC8BE9" x="58.0305835" y="26.1162588" width="15.6082259" height="12.863158"></rect>
        <ellipse id="Oval" fill="#FFFFFF" cx="65.8346965" cy="33.0919007" rx="2.20116007" ry="2.23319575"></ellipse>
      </g>
      </svg>
    </div>
    <p>${slot}</p>
  </a>

  `
}
