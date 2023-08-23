interface DataPeserta {
  id: string;
  name: string;
  group: string;
  subGroup: number;
  age: string;
}

interface DetailPeserta {
  id: string;
  name: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  province: string;
  city: string;
  university: string;
  faculty: string;
  major: string;
  group: string;
  subGroup: number;
}

interface Token {
  token: string;
}

interface DateObject {
  date: number;
  thisMonth: boolean;
  dateParam: string;
}

interface DailyCheckupTableType {
  id: string;
  reportedAt: string;
  result: Risk;
  name: string;
}

interface DailyDetail {
  id: string;
  reportedAt: string;
  isUsingMask: boolean;
  isUsingPublicTransport: boolean;
  isAttendingLargeGathering: boolean;
  isExperiencingSymptoms: boolean;
  result: Risk;
  userId: string;
}

type Risk = "HIGH_RISK" | "MEDIUM_RISK" | "LOW_RISK";

export type {
  DataPeserta,
  DetailPeserta,
  Token,
  DateObject,
  Risk,
  DailyCheckupTableType,
  DailyDetail,
};
