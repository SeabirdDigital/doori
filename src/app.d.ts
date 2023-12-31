import type { Session, SupabaseClient } from "@supabase/supabase-js";
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			ip: string;
			supabase: SupabaseClient;
			getSession: () => Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Platform {}
	}
}

export {};
