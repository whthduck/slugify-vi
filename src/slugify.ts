import { charmap } from './charmap';

export function slugify(str: string) {
  let strArray = [...str];

  for (const i in strArray) {
    strArray[i] = charmap.get(strArray[i]) || strArray[i];
    /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
    strArray[i] = strArray[i].replace(/[^a-zA-Z0-9]/g, '-');
  }

  let slugStr = strArray.join('');
  //thay thế 2- thành 1-
  slugStr = slugStr.replace(/-+-/g, '-');
  //cắt bỏ ký tự - ở đầu và cuối chuỗi
  slugStr = slugStr.replace(/^\-+|\-+$/g, '');
  // Convert Upper character to lower character
  slugStr = slugStr.toLowerCase();

  return slugStr;
}
