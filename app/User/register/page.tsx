import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import RegisterForm from '@/app/components/auth/RegisterForm';

export default function UserRegisterPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="ACCOUNT" />
      <div className="flex-1 flex items-center justify-center">
        <RegisterForm />
      </div>
      <Footer />
    </main>
  );
}
