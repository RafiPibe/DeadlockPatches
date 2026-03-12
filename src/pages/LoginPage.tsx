import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { supabase } from '../supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorText('');
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorText(error.message);
    } else {
      navigate('/editor');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-deadlock-bg flex flex-col items-center justify-center">
      <Navbar />
      
      <div className="w-full max-w-md p-8 bg-deadlock-bg-secondary border border-deadlock-border rounded-sm shadow-2xl relative overflow-hidden">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-deadlock-gold/30"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-deadlock-gold/30"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-deadlock-gold/30"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-deadlock-gold/30"></div>

        <h1 className="text-3xl font-display font-bold text-center text-white tracking-widest uppercase mb-2">
          Admin Access
        </h1>
        <p className="text-center text-deadlock-muted text-sm font-condensed tracking-wider uppercase mb-8">
          Enter password to access Editor
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ADMIN EMAIL"
            className="w-full bg-[#0a0f18] border border-deadlock-border focus:border-deadlock-gold/50 text-white px-4 py-3 font-display tracking-widest outline-none transition-colors"
            autoFocus
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="PASSWORD"
            className="w-full bg-[#0a0f18] border border-deadlock-border focus:border-deadlock-gold/50 text-white px-4 py-3 font-display tracking-widest outline-none transition-colors"
            required
          />
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-deadlock-gold/10 hover:bg-deadlock-gold/20 text-deadlock-gold border border-deadlock-gold/30 hover:border-deadlock-gold transition-colors py-3 font-condensed font-bold tracking-[0.2em] uppercase mt-2 relative overflow-hidden group disabled:opacity-50"
          >
            <span className="relative z-10">{loading ? 'Authenticating...' : 'Sign In'}</span>
            {!loading && <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-deadlock-gold/10 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-out"></div>}
          </button>
        </form>

        {errorText && (
          <p className="text-red-400 text-center text-sm font-condensed tracking-wider uppercase mt-6 animate-pulse">
            {errorText}
          </p>
        )}
      </div>
    </div>
  );
}
