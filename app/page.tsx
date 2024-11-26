import Header from '@/components/header/Header';
import MainSection from '@/components/landing/MainSection';
import ContentLayout from '@/components/layout/ContentLayout';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main>
        <ContentLayout>
          <MainSection />
        </ContentLayout>
      </main>
    </div>
  );
}
