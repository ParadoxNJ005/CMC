// app/api/auth/logout/route.ts

import { NextResponse } from 'next/server'
import { serialize } from 'cookie'

export async function POST() {
  const response = NextResponse.json({ success: true, message: 'Logged out' })

  response.headers.set(
    'Set-Cookie',
    serialize('user-session', '', {
      httpOnly: true,
      path: '/',
      expires: new Date(0), // Clear cookie
    })
  )

  return response
}
