import { logErrorResponse } from '@/app/api/_utils/utils';
import { NextResponse } from 'next/server';
import { api, ApiError } from '../../api';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();

  try {
    const { data } = await api.get('/users/me', {
      headers: {
        Cookie: cookieStore.toString(),
      },
    }
);

    return NextResponse.json(data);
  } catch (error) {
    return logErrorResponse(error as ApiError);
  }
}