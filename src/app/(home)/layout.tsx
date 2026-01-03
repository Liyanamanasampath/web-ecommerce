import WebHeader from "@/src/components/layout/web/WebHeader";
import WebFooter from "@/src/components/layout/web/WebFooter";
import CartDrawer from "@/src/components/cart/CartDrawer";

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <WebHeader />
      <main className="flex-1">{children}</main>
      <WebFooter />
      <CartDrawer />
    </div>
  );
}
