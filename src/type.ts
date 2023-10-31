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
  answers: {
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

type TBReportAnswer = "YES" | "NO" | "UNKNOWN";

interface TBTravelHistory {
  country: string;
  city: string;
  date: string;
}

interface TBContact {
  name: string;
  phone: string;
  relation: string;
  address: string;
  city: string;
  province: string;
}

interface TBResultDetail {
  // TODO: NOT DONE
  id: string;
  createdAt: string;
  coughWithPhlegm: TBReportAnswer;
  bleedingCough: TBReportAnswer;
  fever: TBReportAnswer;
  nightSweats: TBReportAnswer;
  loseWeight: TBReportAnswer;
  lymphNodeEnlargement: TBReportAnswer;
  breathless: TBReportAnswer;
  takenPulmonaryMedicine: TBReportAnswer;
  relativesWithTB: TBReportAnswer;
  asthma: TBReportAnswer;
  diabetesMellitus: TBReportAnswer;
  otherSymptoms: string;
  symptomsDate: string;
  testType: string;
  testDate: string;
  testResult: TBReportAnswer;
  testSite: string;
  travelHistories: TBTravelHistory[];
  contacts: TBContact[];
}

interface TBUserReport {
  id: string;
  reportedAt: string;
  userId: string;
  name: string;
  university: "UI" | "TELKOM" | "UNDANA" | "UTI";
  group: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
  subGroup: 1 | 2;
}

interface TBCReportTableProps {
  id: string;
  dateStr: string;
  name: string;
  userClass: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
  university: "UI" | "TELKOM" | "UNDANA" | "UTI";
}

interface ReportDetailProps {
  id: string;
  userId: string;
  name: string;
  group: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
  subGroup: 1 | 2;
  reportDate: string;
  university: "UI" | "TELKOM" | "UNDANA" | "UTI";
  symptoms: {
    coughWithPhlegm: TBReportAnswer;
    bleedingCough: TBReportAnswer;
    fever: TBReportAnswer;
    nightSweats: TBReportAnswer;
    loseWeight: TBReportAnswer;
    lymphNodeEnlargement: TBReportAnswer;
    breathless: TBReportAnswer;
    takenPulmonaryMedicine: TBReportAnswer;
    relativesWithTB: TBReportAnswer;
    asthma: TBReportAnswer;
    diabetesMellitus: TBReportAnswer;
  };
  otherSymptoms: string;
  symptomDate: string;
  travelHistories: [
    {
      city: string;
      country: string;
      date: string;
    }
  ];
  contacts: [
    {
      address: string;
      city: string;
      name: string;
      phone: string;
      province: string;
      relation: "FRIEND" | "FAMILY" | "OTHER";
    }
  ];
  testType:
    | "NEVER_TESTED"
    | "MANTOUX_TEST"
    | "TB_CM"
    | "SPUTUM_ANALYSIS"
    | "IGRA_TEST"
    | "CHEST_XRAY"
    | "CT_SCAN";
  testDate: string;
  testResult: TBReportAnswer;
  testSite: string;
}

interface TBCCloseContactCardProps {
  name: string;
  address: string;
  relation: string;
  phone: string;
}

interface NotificationLog {
  id: string;
  sentAt: string;
  respondedAt: string;
  group: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
  subGroup: 1 | 2;
  name: string;
}

type NotificationMessageContentType = "GAIN" | "LOSS";

type NotificationMessageDesignType = "POLYMORPHISM" | "NON_POLYMORPHISM";
interface DetailNotificationLog {
  id: string;
  sentAt: string;
  respondedAt: string;
  messageContentType: NotificationMessageContentType;
  messageDesignType: NotificationMessageDesignType;
  variant: number;
  isMaskCare: number;
  isMaskImportant: number;
  userId: string;
  name: string;
  group: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
  subGroup: 1 | 2;
}

interface MWTHistoryLog {
  date: string;
  group: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
  subGroup: 1 | 2;
  id: string;
  no: number;
  yes: number;
  withEnforcement: number;
  totalUsers: number;
}

interface MWTHistoryLogDetail {
  id: string;
  group: string;
  subGroup: number;
  date: string;
  withEnforcement: boolean;
  numberOfAnswer: {
    yes: number;
    withEnforcement: number;
    no: number;
  };
  answers: MWTAnswer[];
}

interface MWTAnswer {
  isUseMask: null | UsingMaskAnswer;
  user: {
    id: string;
    name: string;
  };
}

type UsingMaskAnswer = "YES" | "NO" | "WITH_ENFORCEMENT";

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
  TBCReportTableProps,
  TBUserReport,
  ReportDetailProps,
  TBReportAnswer,
  TBCCloseContactCardProps,
  NotificationLog,
  DetailNotificationLog,
  MWTHistoryLog,
  MWTHistoryLogDetail,
};
