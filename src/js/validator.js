export default class Validator {
  static validateUsername(strName) {
    if (/\d{4}/.test(strName)) return false;
    return /^[a-z][-_a-z\d]+[a-z]$/i.test(strName);
  }
  static formatTelephone(strTel) {
    const onlyNumbers = strTel.match(/\d/g).join("");
    let result =
      onlyNumbers.length <= 11
        ? `+7${onlyNumbers.slice(1)}`
        : `+8${onlyNumbers.slice(1)}`;
    return result;
  }
}
