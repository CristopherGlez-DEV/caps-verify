import { Injectable } from "@nestjs/common";
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { Gorra } from "./gorra.interface";
dotenv.config();

@Injectable()
export class GorrasService {
  supabaseUrl = process.env.SUPABASE_URL!;
  supabaseKey = process.env.SUPABASE_ANON_KEY!;
  private supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_ANON_KEY as string,
  );

  async getGorraById(id: string): Promise<Gorra> {
    const { data, error } = await this.supabase
      .from("gorras")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) throw error || new Error("No se encontró la gorra");

    await this.supabase
      .from("gorras")
      .update({ contador: data.contador + 1 })
      .eq("id", id);

    const updatedGorra: Gorra = {
      ...data,
      contador: data.contador + 1,
    };

    return updatedGorra;
  }
}
