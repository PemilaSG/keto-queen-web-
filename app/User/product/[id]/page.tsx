import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import ProductDetailContent from '@/app/components/product/ProductDetailContent';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UserProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  return (
    <main className="min-h-screen flex flex-col bg-white text-stone-900">
      <Header activePage="SHOP" />
      <div className="flex-1">
        <ProductDetailContent productId={id} />
      </div>
      <Footer />
    </main>
  );
}
