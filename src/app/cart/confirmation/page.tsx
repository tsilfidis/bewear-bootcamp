import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/db";
import { auth } from "@/lib/auth";

import CartSummary from "../components/cart-summary";

const ConfirmationPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
      });
    
      if (!session?.user) {
        redirect("/");
      }
      const cart = await db.query.cartTable.findFirst({
        where: (cart, { eq }) => eq(cart.userId, session.user.id),
        with: {
          shippingAddress: true,
          items: {
            with: {
              productVariant: {
                with: {
                  product: true,
                },
              },
            },
          },
        },
      });
    
      if (!cart || cart?.items.length === 0) {
        redirect("/");
      }
    
      const cartTotalInCents = cart.items.reduce((acc, item) => acc + item.productVariant.priceInCents * item.quantity, 0,);

    return (
        <div className="space-y-12">
            <Header />
            <div className="space-y-4 px-5">
                <Card>
                    <CardHeader>
                        <CardTitle>Identificação</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Card>
                          <CardContent>
                          <p>{cart.shippingAddress?.recipientName}, {cart.shippingAddress?.street}, {cart.shippingAddress?.number}, {cart.shippingAddress?.neighborhood}, {cart.shippingAddress?.city}, {cart.shippingAddress?.state} - CEP: {cart.shippingAddress?.zipCode}</p>
                          </CardContent>
                        </Card>
                        <Button className="w-full rounded-full" size="lg">Finalizar compra</Button>
                    </CardContent>
                </Card>
                <CartSummary subtotalInCents={cartTotalInCents} totalInCents={cartTotalInCents} products={cart.items.map(item => ({
                    id: item.id,
                    name: item.productVariant.product.name,
                    variantName: item.productVariant.name,
                    imageUrl: item.productVariant.imageUrl,
                    priceInCents: item.productVariant.priceInCents,
                    quantity: item.quantity,
                }))} />

            </div>
            <Footer />
        </div>
    )
}

export default ConfirmationPage;