import { charmap } from './charmap';

export function removeMark(
  str: string,
  options: { case?: 'lower' | 'upper'; delimiter?: string } = {},
) {
  let strArray = [...str];
  let delimiter = options.delimiter || ' ';

  for (const i in strArray) {
    strArray[i] = charmap.get(strArray[i]) || strArray[i];
    /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
    // strArray[i] = strArray[i].replace(/[^a-zA-Z0-9]/g, delimiter);
  }

  let slugStr = strArray.join('');
  //thay thế 2- thành 1-
  slugStr = slugStr.replace(
    new RegExp(`\\${delimiter}+\\${delimiter}`, 'g'),
    delimiter,
  );
  //cắt bỏ ký tự - ở đầu và cuối chuỗi
  slugStr = slugStr.replace(
    new RegExp(`(^\\${delimiter}+)|(\\${delimiter}+$)`, 'g'),
    '',
  );
  slugStr = slugStr.replace(new RegExp(`(^ +)|( +$)`, 'g'), '');

  // Convert Upper character to lower character
  if ('lower' == options.case) slugStr = slugStr.toLowerCase();
  if ('upper' == options.case) slugStr = slugStr.toUpperCase();

  return slugStr;
}
