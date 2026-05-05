// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number with area code returns true', () => {
  expect(isPhoneNumber('858-555-1234')).toBe(true);
});

test('valid phone number without area code returns true', () => {
  expect(isPhoneNumber('555-1234')).toBe(true);
});

test('invalid phone number with letters returns false', () => {
  expect(isPhoneNumber('858-abc-1234')).toBe(false);
});

test('invalid phone number with not enough digits returns false', () => {
  expect(isPhoneNumber('555-123')).toBe(false);
});

test('valid email returns true', () => {
  expect(isEmail('student@example.com')).toBe(true);
});

test('valid email with underscore returns true', () => {
  expect(isEmail('my_name@test.edu')).toBe(true);
});

test('invalid email without at symbol returns false', () => {
  expect(isEmail('student.example.com')).toBe(false);
});

test('invalid email without domain ending returns false', () => {
  expect(isEmail('student@example')).toBe(false);
});

test('valid strong password with letters and numbers returns true', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('valid strong password with underscore returns true', () => {
  expect(isStrongPassword('a_1234')).toBe(true);
});

test('invalid strong password starting with number returns false', () => {
  expect(isStrongPassword('1abcde')).toBe(false);
});

test('invalid strong password with special character returns false', () => {
  expect(isStrongPassword('abc!123')).toBe(false);
});

test('valid date with one digit month and day returns true', () => {
  expect(isDate('1/2/2024')).toBe(true);
});

test('valid date with two digit month and day returns true', () => {
  expect(isDate('12/25/2024')).toBe(true);
});

test('invalid date using dashes returns false', () => {
  expect(isDate('12-25-2024')).toBe(false);
});

test('invalid date with two digit year returns false', () => {
  expect(isDate('12/25/24')).toBe(false);
});

test('valid hex color with hashtag returns true', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('valid hex color with six characters returns true', () => {
  expect(isHexColor('#A1B2C3')).toBe(true);
});

test('invalid hex color with invalid letter returns false', () => {
  expect(isHexColor('#ggg')).toBe(false);
});

test('invalid hex color with wrong length returns false', () => {
  expect(isHexColor('#ffff')).toBe(false);
});