import UserProductDetailPage from '../../User/product/[id]/page';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductRoute({ params }: PageProps) {
  return <UserProductDetailPage params={params} />;
}
