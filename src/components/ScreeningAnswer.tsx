import { AnswerWithNotSure, SmokingHistoryAnswer, TimeInterval } from "@/type";
import React from "react";

interface Props {
  answer:
    | boolean
    | TimeInterval
    | SmokingHistoryAnswer
    | number
    | AnswerWithNotSure;
}

function ScreeningAnswer({ answer }: Props) {
  if (answer == true) {
    return <p>Ya</p>;
  } else if (answer == false) {
    return <p>Tidak</p>;
  } else if (answer == "LESS_THAN_ONE_WEEK") {
    return <p>Kurang dari 1 minggu</p>;
  } else if (answer == "ONE_TO_TWO_WEEKS") {
    return <p>1-2 minggu</p>;
  } else if (answer == "MORE_THAN_TWO_WEEKS") {
    return <p>2 minggu atau lebih</p>;
  } else if (answer == "YES") {
    return <p>Ya</p>;
  } else if (answer == "FORMERLY") {
    return <p>Pernah, sekarang sudah berhenti</p>;
  } else if (answer == "NO") {
    return <p>Tidak pernah sama sekali</p>;
  } else if (typeof answer == "number") {
    return <p>{answer}</p>;
  } else if (answer == "NOT_SURE") {
    return <p>Tidak tahu</p>;
  }
}

export default ScreeningAnswer;
