  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling/lib/index';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-1"`,
      src: `url('${baseUrl}fabric-icons-1-1a7b09d0.woff') format('woff')`
    },
    icons: {
      'PowerButton': '\uE7E8',
      'Tab': '\uE7E9',
      'Admin': '\uE7EF',
      'TVMonitor': '\uE7F4',
      'Speakers': '\uE7F5',
      'StackIndicator': '\uE7FF',
      'Nav2DMapView': '\uE800',
      'Car': '\uE804',
      'Bus': '\uE806',
      'EatDrink': '\uE807',
      'LocationCircle': '\uE80E',
      'Home': '\uE80F',
      'SwitcherStartEnd': '\uE810',
      'ParkingLocation': '\uE811',
      'IncidentTriangle': '\uE814',
      'Touch': '\uE815',
      'MapDirections': '\uE816',
      'CaretHollow': '\uE817',
      'CaretSolid': '\uE818',
      'History': '\uE81C',
      'Location': '\uE81D',
      'Work': '\uE821',
      'Recent': '\uE823',
      'Hotel': '\uE824',
      'LocationDot': '\uE827',
      'Dictionary': '\uE82D',
      'ChromeBack': '\uE830',
      'FolderOpen': '\uE838',
      'PinnedFill': '\uE842',
      'RevToggleKey': '\uE845',
      'Previous': '\uE892',
      'Next': '\uE893',
      'Sync': '\uE895',
      'Help': '\uE897',
      'Emoji': '\uE899',
      'MailForward': '\uE89C',
      'ClosePane': '\uE89F',
      'OpenPane': '\uE8A0',
      'PreviewLink': '\uE8A1',
      'ZoomIn': '\uE8A3',
      'Bookmarks': '\uE8A4',
      'Document': '\uE8A5',
      'ProtectedDocument': '\uE8A6',
      'OpenInNewWindow': '\uE8A7',
      'MailFill': '\uE8A8',
      'ViewAll': '\uE8A9',
      'Switch': '\uE8AB',
      'Rename': '\uE8AC',
      'Remote': '\uE8AF',
      'SelectAll': '\uE8B3',
      'Orientation': '\uE8B4',
      'Import': '\uE8B5',
      'Picture': '\uE8B9',
      'ChromeClose': '\uE8BB',
      'ShowResults': '\uE8BC',
      'Message': '\uE8BD',
      'CalendarDay': '\uE8BF',
      'CalendarWeek': '\uE8C0',
      'MailReplyAll': '\uE8C2',
      'Read': '\uE8C3',
      'Cut': '\uE8C6',
      'PaymentCard': '\uE8C7',
      'Copy': '\uE8C8',
      'Important': '\uE8C9',
      'MailReply': '\uE8CA',
      'GotoToday': '\uE8D1',
      'Font': '\uE8D2',
      'FontColor': '\uE8D3',
      'FolderFill': '\uE8D5',
      'Permissions': '\uE8D7',
      'DisableUpdates': '\uE8D8',
      'Unfavorite': '\uE8D9',
      'Italic': '\uE8DB',
      'Underline': '\uE8DC',
      'Bold': '\uE8DD',
      'MoveToFolder': '\uE8DE',
      'Dislike': '\uE8E0',
      'Like': '\uE8E1',
      'AlignCenter': '\uE8E3',
      'OpenFile': '\uE8E5',
      'FontDecrease': '\uE8E7',
      'FontIncrease': '\uE8E8',
      'FontSize': '\uE8E9',
      'CellPhone': '\uE8EA',
      'Calculator': '\uE8EF',
      'Library': '\uE8F1',
      'PostUpdate': '\uE8F3',
      'NewFolder': '\uE8F4',
      'CalendarReply': '\uE8F5',
      'UnsyncFolder': '\uE8F6',
      'SyncFolder': '\uE8F7',
      'BlockContact': '\uE8F8',
      'Accept': '\uE8FB',
      'BulletedList': '\uE8FD',
      'Preview': '\uE8FF',
      'News': '\uE900',
      'Chat': '\uE901',
      'Group': '\uE902',
      'World': '\uE909',
      'Comment': '\uE90A'
    }
  };

  registerIcons(subset, options);
}
