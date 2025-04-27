// app/api/auth/login/route.ts

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { serialize } from 'cookie'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ success: false, message: 'Email and password required' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    return NextResponse.json({ success: false, message: 'User not found' }, { status: 401 })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 })
  }

  const response = NextResponse.json({ success: true, message: 'Login successful' })

  // Store session in a cookie
  response.headers.set(
    'Set-Cookie',
    serialize('user-session', user.email, {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  )

  return response
}
