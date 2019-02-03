import { genPrhConfig } from './genPrhConfig';

export const openDownloadDialog = (): void => {
  let folders = DriveApp.getFoldersByName('PrhConfig');
  let folder;
  if (!folders.hasNext()) {
    folder = DriveApp.createFolder('PrhConfig');
  } else {
    folder = folders.next();
  }
  let fileName = new Date().getTime() + '_prh.yml';
  // convert all available sheet data to csv format
  let yml = genPrhConfig();
  // create a file in the Docs List with the given name and the csv data
  let file = folder.createFile(fileName, yml);
  let downloadURL = file.getDownloadUrl().slice(0, -8);
  SpreadsheetApp.getUi().alert('YML is ready.\n' + downloadURL);
};
