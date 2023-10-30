import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center bg-[#FFF8F3]">
      <div className="flex flex-col items-center gap-2">
        <SignIn />
      </div>
    </div>
  );
}
