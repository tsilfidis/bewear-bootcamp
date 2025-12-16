"use client";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useFinishOrder } from "@/hooks/mutations/use-finish-order";

const FinishOrderButton = () => {
    const finishOrderMutation = useFinishOrder();
    
    return (
        <Button 
        className="w-full rounded-full" 
        size="lg" 
        onClick={() => finishOrderMutation.mutate()}
        disabled={finishOrderMutation.isPending}
        >
            {finishOrderMutation.isPending && (
                <Loader2 className="animate-spin" />
                )}
                Finalizar compra
            </Button>
    );
};

export default FinishOrderButton;