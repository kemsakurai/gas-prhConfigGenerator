import { initialize } from './initialize';
import { openDownloadDialog } from './openDownloadDialog';
import { genPrhConfig } from './genPrhConfig';

function onOpen() {
  const menu = [
    { name: 'Initialize', functionName: 'initialize' },
    { name: 'Open download dialog', functionName: 'openDownloadDialog' }
  ];
  SpreadsheetApp.getActiveSpreadsheet().addMenu('gas-prhConfigGenerator', menu);
}

declare let global: any;
global.onOpen = onOpen;
global.openDownloadDialog = openDownloadDialog;
global.initialize = initialize;
global.genPrhConfig = genPrhConfig;
