import Validator from "../validator";

const usersnames = [
  ["Lana28b", true],
  ["vlad_vd-c", true],
  ["1123son", false],
  ["1pavel", false],
  ["lev2810", false],
  ["иван", false],
  ["_sonya", false],
  ["S_sonya123S", true],
];
test.each(usersnames)("test username %s - %s", (name, expected) => {
  expect(Validator.validateUsername(name)).toBe(expected);
});

const telephones = [
  ["8 (927) 000-00-00", "+79270000000"],
  ["7 960 000 00 00 ", "+79600000000"],
  ["+86 000 000 0000", "+860000000000"],
  ["+7(921)312-32-15", "+79213123215"],
  ["79115866598", "+79115866598"],
  ["7-911 563 25 63", "+79115632563"],
  ["+7-911a000b00", "+791100000"],
];
test.each(telephones)("test phoneNumber %s", (phoneNumber, expected) => {
  expect(Validator.formatTelephone(phoneNumber)).toBe(expected);
});
