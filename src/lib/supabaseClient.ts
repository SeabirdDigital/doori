import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	"https://tuzyinzsxpvgfsweglho.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1enlpbnpzeHB2Z2Zzd2VnbGhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3NTgyMzAsImV4cCI6MjAxMDMzNDIzMH0.WtkAN89L3ZpmCx1MgHf70uVpnJzPrSBQh3S8LOMMHhY"
);
