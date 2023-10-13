import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <SignIn />
      </div>
    </div>
  );
}
