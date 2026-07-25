import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import LoginForm from '@/app/components/auth/LoginForm';

export default function UserLoginPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="ACCOUNT" />
      <div className="flex-1 flex items-center justify-center">
        <LoginForm />
      </div>
      <Footer />
    </main>
  );
}
