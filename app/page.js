import ApplicationList from "@/components/ApplicationList";
import SearchFilter from "@/components/SearchFilter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Application Management System</h1>
      <SearchFilter />
      <ApplicationList />
    </div>
    </main>
  );
}
