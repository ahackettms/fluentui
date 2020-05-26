import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const TimePickerIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M192 768q40 0 75 15t61 41 41 61 15 75v128q0 40-15 75t-41 61-61 41-75 15q-40 0-75-15t-61-41-41-61-15-75V960q0-40 15-75t41-61 61-41 75-15zm64 336V944q0-26-19-45t-45-19q-26 0-45 19t-19 45v160q0 26 19 45t45 19q26 0 45-19t19-45zm448-336q40 0 75 15t61 41 41 61 15 75v128q0 40-15 75t-41 61-61 41-75 15q-40 0-75-15t-61-41-41-61-15-75V960q0-40 15-75t41-61 61-41 75-15zm64 336V944q0-26-19-45t-45-19q-26 0-45 19t-19 45v160q0 26 19 45t45 19q26 0 45-19t19-45zm576-336q40 0 75 15t61 41 41 61 15 75v128q0 40-15 75t-41 61-61 41-75 15q-40 0-75-15t-61-41-41-61-15-75V960q0-40 15-75t41-61 61-41 75-15zm64 336V944q0-26-19-45t-45-19q-26 0-45 19t-19 45v160q0 26 19 45t45 19q26 0 45-19t19-45zm448-336q40 0 75 15t61 41 41 61 15 75v128q0 40-15 75t-41 61-61 41-75 15q-40 0-75-15t-61-41-41-61-15-75V960q0-40 15-75t41-61 61-41 75-15zm64 336V944q0-26-19-45t-45-19q-26 0-45 19t-19 45v160q0 26 19 45t45 19q26 0 45-19t19-45zm-896-80q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19zm0 256q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19zm403-659l-403-402-403 402-90-90 493-494 493 494-90 90zm-403 1390l-493-494 90-90 403 402 403-402 90 90-493 494z" />
    </svg>
  ),
  displayName: 'TimePickerIcon',
});

export default TimePickerIcon;
