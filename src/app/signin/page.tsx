import SignInForm from "../../components/auth/SignInForm";

export default function SignInPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] gap-4 m-4">
      <div className="flex-1 w-full  rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-full bg-red p-4">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
