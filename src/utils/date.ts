import { isNullOrUndefined } from './is'
import moment from 'moment'

export const formatTimeStr = (time: string, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (isNullOrUndefined(time)) return '-'
  return moment(time).format(format)
}
