import test from 'ava';
import { slugify } from './slugify';

test(`specialy character`, (t) => {
  const input = 'Đài Loan xác nhận đón thống đốc bang Arizona ngày 30-8';
  const result = slugify(input);
  t.is(result, 'dai-loan-xac-nhan-don-thong-doc-bang-arizona-ngay-30-8');
});

test(`replace duplicate '-' character`, (t) => {
  const input = 'Đài Loan -- đón';
  const result = slugify(input);
  t.is(result, 'dai-loan-don');
});

test(`prune start and end`, (t) => {
  const input = '-- Đài Loan -';
  const result = slugify(input);
  t.is(result, 'dai-loan');
});