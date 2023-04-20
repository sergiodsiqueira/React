import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_PROJECT_URL, import.meta.env.VITE_ANON_PULIC);

export async function createUser(pNome, pEmail, pSenha) {
    const { data, error } = await supabase.auth.signUp(
        {
            email: pEmail,
            password: pSenha,
            options: {
                data: {
                    name: pNome
                },
                emailRedirectTo: import.meta.env.VITE_URL_BASE + '/bemvindo'
            }
        }
    )

    return error ? false : true;
}

export async function sendResetRequest(pEmail) {
    console.log('send', pEmail);
    const { data, error } = await supabase.auth.resetPasswordForEmail(pEmail);

    return error ? false : true;
}