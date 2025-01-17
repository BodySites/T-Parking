import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, lastname } = body;

  if (!name || !lastname) {
    return new NextResponse('Missing Fields', { status: 400 });
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
    method: 'POST',
    body: JSON.stringify({ name, lastname }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    return NextResponse.json({
      message: 'Account is created',
    });
  } else {
    const errorData = await response.json();

    return NextResponse.json(
      {
        message: errorData.message || 'Creation of account failed',
      },
      { status: response.status },
    );
  }
}
