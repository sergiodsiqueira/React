import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_PROJECT_URL, import.meta.env.VITE_ANON_PULIC);

export default async function auth(pEmail, pSenha) {
    if ((pEmail == '') || (pSenha == '')){
        window.sessionStorage.removeItem('@quizjw/session');
        window.sessionStorage.removeItem('@quizjw/user');
        return false
    }

    const { data, error } = await supabase.auth.signInWithPassword({
        email: pEmail,
        password: pSenha,
    })

    if (error) {
        window.sessionStorage.removeItem('@quizjw/session');
        window.sessionStorage.removeItem('@quizjw/user');
        return false
    } else {
        window.sessionStorage.setItem('@quizjw/session', data.session.access_token);
        window.sessionStorage.setItem('@quizjw/user', data.user.email);
        return true
    }
}