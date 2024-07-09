import { AuthButtonServer } from "@/app/components/authform/auth-button-server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Login () {

    const supabase = createServerComponentClient({ cookies });
    const {data: { session } } = await supabase.auth.getSession();

    if (session !== null) {

        redirect("/");

    }

    return (
        <section className="grid place-content-center min-h-screen">
            <h1>Inicia sesión</h1>
            <AuthButtonServer />
        </section>
    )
}