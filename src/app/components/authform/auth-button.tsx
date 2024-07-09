/* eslint-disable @typescript-eslint/indent */
/* eslint-disable */
'use client'

import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter, redirect } from 'next/navigation';

export function AuthButton ({ session } : { session: Session | null}) {

    const supabase = createClientComponentClient();
    const router = useRouter();

    const handleSignIn = async () => {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: "carloslafuenteradua@gmail.com",
            password: "EstaPasswordEsDePrueba",
          });

          router.refresh();

    }

    const handleResetPass = async () => {

        const { error } = await supabase.auth.resetPasswordForEmail('carloslafuenteradua@gmail.com', {
            redirectTo: 'http://localhost:3000/auth/callback',
        });

    }

    //Esto tendrá un form para poner el nombre del usuario
    const handleSignUp = async () => {

        let { data, error } = await supabase.auth.signUp({
            email: 'carloslafuenteradua@gmail.com',
            password: 'EstaPasswordEsDePrueba',
            /*options: {
                emailRedirectTo: 'http://localhost:3000/auth/callback'
            }*/
          });

    }

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        router.refresh();
    }

    

    return (
        <header>
            {session === null ? 
            (<button onClick={handleSignIn} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Sign in</button>) :
            (<button onClick={handleSignOut} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Sign out</button>)}
        </header>
    )

}