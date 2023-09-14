import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import type { LocalTimeFormatter, CommonTimeFormatter } from '@/types/index'

dayjs.extend(localizedFormat)

export class TimeUtils {
  static formatTime(
    time: Date | string,
    formatter: CommonTimeFormatter | LocalTimeFormatter = 'L'
  ) {
    if (!time) {
      return ''
    }
    return dayjs(time).format(formatter)
  }
}