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

interface DataScreening {
  createdAt: string;
  group: string;
  subGroup: string;
  id: string;
  name: string;
  result: ScreeningResult;
}

type ScreeningResult =
  | "NOT_SUSPECTED_TB"
  | "SUSPECTED_TB"
  | "UNDERGOING_TREATMENT"
  | "SUSPECTED_TB_RO";

interface ScreeningDetail {
  id: string;
  createdAt: string;
  userId: string;
  name: string;
  group: string;
  subGroup: number;
  university: string;
  result: ScreeningResult;
  answer: {
    coughPast2Months: boolean;
    coughDuration: TimeInterval;
    coughWithPhlegm: boolean;
    coughBloodPast1Year: boolean;
    feverPast2Months: boolean;
    feverDuration: TimeInterval;
    chestPainPast2Months: boolean;
    shortnessOfBreathPast2Months: boolean;
    fatigueUnexplainedPast2Months: boolean;
    decreasedAppetitePast2Months: boolean;
    unexplainedWeightLossPast2Months: boolean;
    nightSweatsUnexplained: boolean;
    smokingHistory: SmokingHistoryAnswer;
    smokingDuration: number;
    cigarettesPerDay: number;
    eCigaretteUser: boolean;
    quitYear: number;
    tbDiagnosisHistory: boolean;
    tbDiagnosisYear: number;
    tbTreatmentComplete: boolean;
    tbTreatmentOngoing: boolean;
    tbHouseholdContact: AnswerWithNotSure;
    householdTbStatus: AnswerWithNotSure;
    tbCoworkerContact: AnswerWithNotSure;
    coworkerTbStatus: AnswerWithNotSure;
    diabetesHistory: AnswerWithNotSure;
    hivTestHistory: boolean;
    hivTestResult: AnswerWithNotSure;
    chestXRayHistory: AnswerWithNotSure;
    lastChestXrayYear: number;
    lastChestXrayResult: AnswerWithNotSure;
    hasChestXrayAbnormality: boolean;
  };
}

type AnswerWithNotSure = "YES" | "NO" | "NOT_SURE";

type SmokingHistoryAnswer = "YES" | "FORMERLY" | "NO";

type TimeInterval =
  | "LESS_THAN_ONE_WEEK"
  | "ONE_TO_TWO_WEEKS"
  | "MORE_THAN_TWO_WEEKS";

export type {
  DataPeserta,
  DetailPeserta,
  Token,
  DateObject,
  Risk,
  DailyCheckupTableType,
  DailyDetail,
  DataScreening,
  ScreeningResult,
  ScreeningDetail,
  AnswerWithNotSure,
  TimeInterval,
  SmokingHistoryAnswer,
};
