"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Addresses = () => {
  const [selectedAdress, setSelectedAdress] = useState<string | null>(null);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Identificação</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedAdress} onValueChange={setSelectedAdress}>
          <Card>
            <CardContent>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="add_new" id="add_new" />
                <Label htmlFor="add_new">Adicionar novo Endereço</Label>
              </div>
            </CardContent>
          </Card>
        </RadioGroup>
        {selectedAdress === "add_new" && }
      </CardContent>
    </Card>
  );
};

export default Addresses;
