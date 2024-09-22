"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SubmitFormButton from "../../components/submit-form-button";
import type { Airplane, Flight } from "@prisma/client";
import { saveFlight, updateFlight } from "../lib/actions";
import type { ActionResult } from "@/app/dashboard/(auth)/signin/form/actions";
import { useFormState } from "react-dom";
import { dateFormat } from "@/lib/utils";

interface FormFLightProps {
  airplanes: Airplane[];
  type?: "ADD" | "EDIT";
  defaultValues?: Flight | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

export default function FormFlight({
  airplanes,
  defaultValues,
  type,
}: FormFLightProps) {
  const updateFlightWithId = (_state: ActionResult, formData: FormData) =>
    updateFlight(null, defaultValues?.id, formData);
  const [state, formAction] = useFormState(
    type === "ADD" ? saveFlight : updateFlightWithId,
    initialFormState
  );

  return (
    <form className="space-y-6" action={formAction}>
      {state?.errorTitle !== null && (
        <div className="mx-auto my-7 bg-red-500 w-[400px] p-4 rounded-lg text-white ">
          <div className="font-bold mb-4">{state.errorTitle}</div>
          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, index) => (
              <li key={index + value}>{value}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="planeId">Pilih Pesawat</Label>
          <Select name="planeId" defaultValue={defaultValues?.planeId}>
            <SelectTrigger id="planeId">
              <SelectValue placeholder="Pilih pesawat" />
            </SelectTrigger>
            <SelectContent>
              {airplanes.map((value) => (
                <SelectItem key={value.id} value={value.id}>
                  {value.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Harga Tiket</Label>
          <Input
            placeholder="Harga tiket..."
            name="price"
            id="price"
            defaultValue={defaultValues?.price}
            type="number"
            min={0}
            required
          ></Input>
          <span className="text-xs text-gray-900">
            Harga untuk kelas business bertamabah Rp. 500.000 & kelas first
            bertambah Rp. 750.000
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="departureCity">Kota Keberangkatan</Label>
          <Input
            placeholder="Kota keberangkatan..."
            name="departureCity"
            id="departureCity"
            defaultValue={defaultValues?.departureCity}
            required
          ></Input>
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureDate">Tanggal Keberangkatan</Label>
          <Input
            placeholder="Tanggal keberangkatan..."
            type="datetime-local"
            className="block"
            defaultValue={dateFormat(
              defaultValues?.departureDate,
              "YYYY-MM-DDTHH:MM"
            )}
            name="departureDate"
            id="departureDate"
            required
          ></Input>
        </div>
        <div className="space-y-2">
          <Label htmlFor="departureCityCode">Kode Kota</Label>
          <Input
            placeholder="Kode kota..."
            name="departureCityCode"
            id="departureCityCode"
            defaultValue={defaultValues?.departureCityCode}
            required
          ></Input>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="destinationCity">Kota Tujuan</Label>
          <Input
            placeholder="Kota tujuan..."
            name="destinationCity"
            defaultValue={defaultValues?.destinationCity}
            id="destinationCity"
            required
          ></Input>
        </div>
        <div className="space-y-2">
          <Label htmlFor="arrivalDate">Tanggal Tiba</Label>
          <Input
            placeholder="Tanggal keberangkatan..."
            type="datetime-local"
            defaultValue={dateFormat(
              defaultValues?.arrivalDate,
              "YYYY-MM-DDTHH:MM"
            )}
            className="block"
            name="arrivalDate"
            id="arrivalDate"
            required
          ></Input>
        </div>
        <div className="space-y-2">
          <Label htmlFor="destinationCityCode">Kota Kota</Label>
          <Input
            placeholder="Kode kota..."
            name="destinationCityCode"
            id="destinationCityCode"
            defaultValue={defaultValues?.destinationCityCode}
            required
          ></Input>
        </div>
      </div>
      <SubmitFormButton />
    </form>
  );
}
