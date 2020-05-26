import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const CompletedSolidIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M1024 0q141 0 272 36t244 104 207 160 161 207 103 245 37 272q0 141-36 272t-104 244-160 207-207 161-245 103-272 37q-141 0-272-36t-244-104-207-160-161-207-103-245-37-272q0-141 36-272t104-244 160-207 207-161T752 37t272-37zm603 685l-136-136-659 659-275-275-136 136 411 411 795-795z" />
    </svg>
  ),
  displayName: 'CompletedSolidIcon',
});

export default CompletedSolidIcon;
