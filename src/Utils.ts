export default class Utils {
  /**
   * getConfigSheetName
   */
  public static getConfigSheetName(): string {
    return 'config';
  }
  public static regExpEscape(literal_string) {
    return literal_string.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
  }
}
