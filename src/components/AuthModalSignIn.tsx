import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"
import LoginGithub from "@/app/(auth)/authComp/LoginGithub"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModalSignIn({ isOpen, onClose }: AuthModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <div className="flex justify-end">
            {/* <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onClose}>
            </Button> */}
          </div>
          <DialogTitle className="text-center text-xl font-normal">Welcome back.</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 px-4 py-6">
        <LoginGithub/>
          <Link href="/login" >
            <Button variant="outline" className="w-full rounded-full font-normal">
              Sign in with email
            </Button>
          </Link>
          <Button variant="outline" className="w-full rounded-full font-normal">
            Sign in with Facebook
          </Button>

          <div className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline hover:text-gray-700">
              Sign in
            </Link>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4 px-6">
            Click "Sign up" to agree to Citadel's{" "}
            <Link href="/terms" className="underline hover:text-gray-700">
              Terms and Service
            </Link>{" "}
            and acknowledge that Citadel's{" "}
            <Link href="/privacy" className="underline hover:text-gray-700">
              Privacy Policy
            </Link>{" "}
            applies to you.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

