

import { SignupForm } from '@/components/signupform';

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className=" max-w-sm md:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  )
}
