import * as moment from 'moment';

/**
 * 转换从excel中读取的时间
 * @param {number} date
 */
export function translateExcelDate(date: number) {
  return new Date(Math.round((date - 25569) * 86400 * 1000));
}

/**
 * 时间段 取中间所有日期
 * @param {Array<Moment>} dates
 * @return {string[]}
 */
export function getDateRangeItem(dates: Monent[]) {
  const array = [];
  const [start, end] = dates;

  const length = end.diff(start) / 1000 / 60 / 60 / 24;

  let index = 0;
  while (index <= length) {
    array.push(moment(start).add(index, 'days').format('YYYY-MM-DD'));
    index += 1;
  }
  return array;
}
