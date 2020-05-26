import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const ReadAloudIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(iconClassNames.outline, classes.outlinePart)}
          d="M14.879 22H9.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h.5v8.5c0 .827.673 1.5 1.5 1.5h.5v-1h-.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h2.031c.913 0 1.336.461 1.469.645v5.234l1-1v-4.231c.139-.189.572-.648 1.531-.648H19.5a.5.5 0 0 1 .5.5V15l1-1v-3h.5a.5.5 0 0 1 .5.5v2h1v-2c0-.827-.673-1.5-1.5-1.5h-.592c-.207-.58-.757-1-1.408-1h-1.969c-1.006 0-1.65.374-2.028.718-.372-.344-1-.718-1.972-.718H11.5c-.651 0-1.2.42-1.408 1H9.5c-.827 0-1.5.673-1.5 1.5v10c0 .827.673 1.5 1.5 1.5h6.379l-1-1zm3.812-7.962a.498.498 0 0 0-.544.108L15.293 17H13.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.793l2.853 2.853A.5.5 0 0 0 19 23.5v-9a.5.5 0 0 0-.309-.462zM18 22.293l-2.147-2.147A.5.5 0 0 0 15.5 20H14v-2h1.5a.5.5 0 0 0 .353-.146L18 15.707v6.586zm3.155-6.071a.5.5 0 1 0-.83.557c.442.66.675 1.427.675 2.221s-.233 1.562-.675 2.222a.499.499 0 1 0 .83.556c.553-.825.845-1.786.845-2.778s-.292-1.953-.845-2.778zm1.354-1.53a.5.5 0 0 0-.787.616A5.93 5.93 0 0 1 23 19c0 1.35-.442 2.626-1.278 3.691a.5.5 0 0 0 .787.618C23.484 22.065 24 20.575 24 19s-.516-3.065-1.491-4.309z"
        />
        <path
          className={cx(iconClassNames.filled, classes.filledPart)}
          d="M14.879 22H9.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h.5v8.5c0 .827.673 1.5 1.5 1.5h.5v-1h-.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h2.031c.913 0 1.336.461 1.469.645v5.234l1-1v-4.231c.139-.189.572-.648 1.531-.648H19.5a.5.5 0 0 1 .5.5V15l1-1v-3h.5a.5.5 0 0 1 .5.5v2h1v-2c0-.827-.673-1.5-1.5-1.5h-.592c-.207-.58-.757-1-1.408-1h-1.969c-1.006 0-1.65.374-2.028.718-.372-.344-1-.718-1.972-.718H11.5c-.651 0-1.2.42-1.408 1H9.5c-.827 0-1.5.673-1.5 1.5v10c0 .827.673 1.5 1.5 1.5h6.379l-1-1zm3.812-7.962a.498.498 0 0 0-.544.108L15.293 17H13.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.793l2.853 2.853A.5.5 0 0 0 19 23.5v-9a.5.5 0 0 0-.309-.462zm2.464 2.184a.5.5 0 1 0-.83.557c.442.66.675 1.427.675 2.221s-.233 1.562-.675 2.222a.499.499 0 1 0 .83.556c.553-.825.845-1.786.845-2.778s-.292-1.953-.845-2.778zm1.354-1.53a.5.5 0 0 0-.787.616A5.93 5.93 0 0 1 23 19c0 1.35-.442 2.626-1.278 3.691a.5.5 0 0 0 .787.618C23.484 22.065 24 20.575 24 19s-.516-3.065-1.491-4.309z"
        />
      </g>
    </svg>
  ),
  displayName: 'ReadAloudIcon',
});

export default ReadAloudIcon;
