import test from 'ava';
import { removeMark } from './remove-mark';

test(`specialy character`, (t) => {
  const input = 'Đài Loan xác nhận đón thống đốc bang Arizona ngày 30-8';
  const result = removeMark(input);
  t.is(result, 'Dai Loan xac nhan don thong doc bang Arizona ngay 30-8');
});

test(`replace duplicate '-' character`, (t) => {
  const input = 'Đài Loan -- đón';
  const result = removeMark(input, { delimiter: '-' });
  t.is(result, 'Dai Loan - don');
});

test(`prune start and end`, (t) => {
  const input = '-- Đài Loan -';
  const result = removeMark(input, { delimiter: '-' });
  t.is(result, 'Dai Loan');
});

test(`lowercase`, (t) => {
  const input = 'Đài Loan xác nhận đón thống đốc bang Arizona ngày 30-8';
  const result = removeMark(input, { case: 'lower' });
  t.is(result, 'dai loan xac nhan don thong doc bang arizona ngay 30-8');
});

test(`uppercase`, (t) => {
  const input = 'Đài Loan xác nhận đón thống đốc bang Arizona ngày 30-8';
  const result = removeMark(input, { case: 'upper' });
  t.is(result, 'DAI LOAN XAC NHAN DON THONG DOC BANG ARIZONA NGAY 30-8');
});
