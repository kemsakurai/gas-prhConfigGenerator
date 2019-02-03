import Utils from './Utils';

export const genPrhConfig = (): string => {
  Logger.log('genPrhConfig start');
  const configSheetName: string = Utils.getConfigSheetName();
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(configSheetName);
  if (!sheet) {
    throw new Error('初期化してください');
  }
  let range = sheet.getRange(2, 1, sheet.getLastRow(), 3);
  let values = range.getValues();
  let output = 'version: 1\n';
  output += 'rules:\n';
  for (let value of values) {
    if (value[0] == '' || value[1] == '') {
      continue;
    }
    output += '  - expected: ' + Utils.regExpEscape(value[0]) + '\n';
    output += '    pattern: ' + Utils.regExpEscape(value[1]) + '\n';
    if (value[2] != '') {
      output += '    prh: ' + value[2] + '\n';
    }
  }
  Logger.log('genPrhConfig end');
  return output;
};
