import { SignUp } from '@clerk/nextjs'
import BgGradient from '@/components/common/bg-gradient';

export default function Page() {
  return (
    <section className="flex justify-center items-center py-16">
    <BgGradient><SignUp /></BgGradient>
  </section>
  );
}