"use client"

import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
  
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PasskeyModal = () => {

    const router = useRouter();
    const [open, setOpen] = useState(true);
    const [passkey, setPasskey] = useState('')

    const closeModel = () => {
        setOpen(false);
        router.push('/')
    }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogContent className='shad-alert-dialog'>
                <AlertDialogHeader>
                <AlertDialogTitle className='flex items-start justify-between'>
                    Admin Access Verification
                    <Image 
                        src="/assets/icons/close.svg"
                        alt="close"
                        width={20}
                        height={20}
                        onClick={() => closeModel()}
                        className='cursor-pointer'
                    />
                </AlertDialogTitle>
                <AlertDialogDescription>
                   To access the admin page, please enter the passkey.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <div>
                    <InputOTP maxLength={6} value={passkey} onChange={(value) => setPasskey(value)}>
                        <InputOTPGroup className='shad-otp'>
                            <InputOTPSlot className='shad-otp-slot' index={0} />
                            <InputOTPSlot className='shad-otp-slot' index={1} />
                            <InputOTPSlot className='shad-otp-slot' index={2} />
                            <InputOTPSlot className='shad-otp-slot' index={4} />
                            <InputOTPSlot className='shad-otp-slot' index={5} />
                            <InputOTPSlot className='shad-otp-slot' index={6} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
  )
}

export default PasskeyModal