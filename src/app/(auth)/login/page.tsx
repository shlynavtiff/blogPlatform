'use client'
import React, { FormEvent, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { LoginForm } from '../authComp/LoginForm'


const page = () => {
  return (
    <div className="flex min-h-screen flex-col-reverse lg:flex-row-reverse">
            {/* Left section with background */}
            <div className="lg:flex lg:w-1/2 hidden relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/qweqwe.jpg')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 flex items-center justify-center w-full">
                    <h1 className="text-4xl  text-white">Welcome back.</h1>
                </div>
            </div>

            <div className=' lg:hidden lg:w-1/2 relative h-[180px] items-center flex'>
                <div className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('/qweqwe.jpg')` }}>
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 flex items-center justify-center w-full">
                    <h1 className="text-4xl  text-white">Welcome back.</h1>
                </div>
            </div>

            {/* Right section with form */}
            <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 items-center">
                <div className="max-w-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-8">Welcome back.</h2>

                    <LoginForm/>

                </div>
            </div>
        </div>
  )
}

export default page