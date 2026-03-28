import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const response = await fetch(
      'https://xkb1r81n29.execute-api.us-east-1.amazonaws.com/dev/register/lead/quiz',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const responseText = await response.text();
    const responseData = responseText ? JSON.parse(responseText) : {};

    return NextResponse.json(responseData, { status: response.status });
  } catch (error) {
    console.error('Error in quiz-proxy:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 
