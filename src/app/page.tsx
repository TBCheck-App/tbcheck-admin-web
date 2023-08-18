"use client";
import Button from "@/components/buttons/Button";
import { tokenIsAvailable } from "@/utils/auth";
import { redirect } from "next/navigation";

export default function Home() {
  if (tokenIsAvailable()) {
    return (
      <main className="flex flex-col gap-8">
        <div className="px-5">
          <h1 className="font-bold text-xl">Dashboard Admin</h1>
        </div>

        <div
          id="buttons-home"
          className="px-5 flex flex-row flex-wrap gap-6"
        >
          <Button
            imageSrc="/laporan-tbc.svg"
            buttonText="Laporan Kasus TBC"
            destPage="/"
          />
          <Button
            imageSrc="/daily-checkup-report.svg"
            buttonText="Laporan Daily Checkup"
            destPage="/"
          />
          <Button
            imageSrc="response-time-log.svg"
            buttonText="Response Time Log"
            destPage="/"
          />
          <Button
            imageSrc="/skrining-report.svg"
            buttonText="Laporan Skrining"
            destPage="/"
          />
          <Button
            imageSrc="data-peserta.svg"
            buttonText="Data Peserta"
            destPage="/data-peserta"
          />
        </div>
      </main>
    );
  } else {
    redirect("/signin");
  }
}
