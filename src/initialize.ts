import Utils from './Utils';

export const initialize = (): void => {
  Logger.log('initialize start');
  const configSheetName: string = Utils.getConfigSheetName();
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(configSheetName);
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
    sheet.setName(configSheetName);
    const range = sheet.getRange('A1:B1');
    range.setBackground('yellow');
    const headers: string[] = new Array();
    headers.push('expected');
    headers.push('pattern');
    range.setValues([headers]);
  }
  Logger.log('initialize end');
};
