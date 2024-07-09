import { NextResponse, type NextRequest } from "next/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = 'force-dynamic';

export async function GET (request: NextRequest) {

    const requestURL = new URL(request.url);
    const supabase = createServerComponentClient({ cookies });
    const {data: { session } } = await supabase.auth.getSession();

    if (session !== null) {

        return NextResponse.redirect(requestURL);

    }

    return NextResponse.redirect(requestURL.origin);

}