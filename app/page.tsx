"use client";

import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/ldi/v1/h0/1/f');
  return null;
} 