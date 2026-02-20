
# Fix Supabase Edge Function Deployment

## The Core Problem

Lovable's internal edge function deploy tool returns `"Project not found"` for project `odvabvtzagpskkokhcfo`. This is a platform authentication issue — Lovable's deploy service can't link to this specific Supabase project. The `--use-api` flag you mentioned is only usable via CLI, not from within Lovable's environment.

The edge function code itself is correct. It just needs to be deployed.

## Solution: Two-Part Approach

### Part 1 — You Deploy via CLI (2 minutes, one-time)

Since Lovable can't deploy it, you run one command locally using the `--use-api` flag (no Docker required):

```text
npx supabase functions deploy tavus-conversation \
  --project-ref odvabvtzagpskkokhcfo \
  --use-api
```

You'll be prompted to log in with your token (`sbp_1e04b80aeaf091a5c8356d5369067bbffafa39bf`) or it will use your existing Supabase CLI session.

If you haven't authenticated yet:
```text
npx supabase login --token sbp_1e04b80aeaf091a5c8356d5369067bbffafa39bf
npx supabase functions deploy tavus-conversation --project-ref odvabvtzagpskkokhcfo --use-api
```

The function code already exists at `supabase/functions/tavus-conversation/index.ts` — the CLI will pick it up automatically.

### Part 2 — I Fix the CORS Headers (Code Change)

While reviewing the edge function, I noticed the CORS `Access-Control-Allow-Headers` list is missing some headers that Supabase's JS client automatically sends (`x-client-info`, etc.). I'll update the edge function to use the full recommended header list to prevent CORS errors in production.

## Files to Modify

| File | Change |
|------|--------|
| `supabase/functions/tavus-conversation/index.ts` | Expand CORS headers to full recommended set |

## Updated Edge Function

```text
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};
```

## Verify TAVUS_API_KEY Secret is Set

The `TAVUS_API_KEY` secret is already listed in your Supabase project secrets — so once the function is deployed, it should work immediately.

## After You Deploy

Once you run the CLI command, the video chat widget on the homepage will be fully functional. Clicking "Start Video Chat" will call the edge function, which calls Tavus, and returns the live conversation URL embedded in the iframe.
