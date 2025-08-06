import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInForm from "./components/sign-in-form";
import SingUpForm from "./components/sing-up-form";

const Authentication = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 p-5">
      <Tabs defaultValue="sing-in">
        <TabsList>
          <TabsTrigger value="sing-in">Entrar</TabsTrigger>
          <TabsTrigger value="sing-up">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="sing-in">
          <SignInForm />
        </TabsContent>
        <TabsContent value="sing-up">
          <SingUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Authentication;
