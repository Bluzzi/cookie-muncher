/* eslint-disable @typescript-eslint/prefer-literal-enum-member */

// TODO: Stop using ENUM? (to support NodeJS type-stripping)

export enum CookieMaxAge {
  Now = -1,
  OneHour = 60 * 60, // 1 hour
  SixHours = 6 * 60 * 60, // 6 hours
  TwlveHours = 12 * 60 * 60, // 12 hours
  OneDay = 24 * 60 * 60, // 1 day
  OneWeek = 7 * 24 * 60 * 60, // 1 week
  TwoWeeks = 14 * 24 * 60 * 60, // 2 weeks
  OneMonth = 30 * 24 * 60 * 60, // 1 month
  ThreeMonths = 90 * 24 * 60 * 60, // 3 months
  SixMonths = 180 * 24 * 60 * 60, // 6 months
  OneYear = 365 * 24 * 60 * 60, // 1 year
}
