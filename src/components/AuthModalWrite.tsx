import { useEffect, useState } from 'react';
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"
import SignInWithGoogle from '@/app/(auth)/login/components/SignInWithGoogle'


interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onClose}>
            </Button>
          </div>
          <DialogTitle className="text-center text-xl font-normal">Create an account to start crafting.</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 px-4 py-6">
          <SignInWithGoogle/>
          <Button variant="outline" className="w-full rounded-full font-normal">
            Sign up with email
          </Button>
          <Button variant="outline" className="w-full rounded-full font-normal">
            Sign up with Facebook
          </Button>

          <div className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="underline hover:text-gray-700">
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

