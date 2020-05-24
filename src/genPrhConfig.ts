import Utils from './Utils';

export const genPrhConfig = (): string => {
  Logger.log('genPrhConfig start');
  const configSheetName: string = Utils.getConfigSheetName();
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(configSheetName);
  if (!sheet) {
    throw new Error('初期化してください');
  }
  let range = sheet.getRange(2, 1, sheet.getLastRow(), 2);
  let values = range.getValues();
  let output = 'version: 1\n';
  output += 'rules:\n';
  let dictionary = {};
  for (let value of values) {
    if (value[0] == '' || value[1] == '') {
      continue;
    }
    if (typeof dictionary[String(value[0])] === 'undefined') {
      let patterns = [];
      patterns.push(value[1]);
      dictionary[String(value[0])] = patterns;
    } else {
      dictionary[String(value[0])].push(value[1]);
    }
  }
  for (let key in dictionary) {
    output += '  - expected: ' + Utils.regExpEscape(key) + '\n';
    output += '    pattern:\n';
    for (let elem of dictionary[key]) {
      output += '        - ' + Utils.regExpEscape(elem) + '\n';
    }
  }
  Logger.log('genPrhConfig end');
  return output;
};
