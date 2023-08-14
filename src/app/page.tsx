import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="border-8 rounded-xl w-[406px] mx-auto my-11 py-5 flex flex-col gap-8">
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
        />
        <Button
          imageSrc="/daily-checkup-report.svg"
          buttonText="Laporan Daily Checkup"
        />
        <Button
          imageSrc="response-time-log.svg"
          buttonText="Response Time Log"
        />
        <Button
          imageSrc="/skrining-report.svg"
          buttonText="Laporan Skrining"
        />
        <Button
          imageSrc="/mask-wearing-tracker.svg"
          buttonText="Laporan Mask Wearing Tracker"
        />
        <Button
          imageSrc="data-peserta.svg"
          buttonText="Data Peserta"
        />
        <Button
          imageSrc="send-notification.svg"
          buttonText="Kirim Notifikasi"
        />
      </div>
    </main>
  );
}
