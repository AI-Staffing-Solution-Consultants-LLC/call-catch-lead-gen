

# Update Supabase Project Configuration

## Overview
This plan updates your project to connect to your new Supabase project at `gemtiywsoudojqbjyalr.supabase.co`.

## What Will Change

### 1. Update Supabase Client Configuration
Update the Supabase client file with the new project credentials:
- **New URL**: `https://gemtiywsoudojqbjyalr.supabase.co`
- **New Publishable Key**: `sb_publishable_3JN0KkGb0yoF7YJdbD6qXA_oJlys0j1`

**File**: `src/integrations/supabase/client.ts`

### 2. Update Project Configuration
Update the Supabase config.toml with the new project ID:
- **New Project ID**: `gemtiywsoudojqbjyalr`

**File**: `supabase/config.toml`

### 3. Update Environment Variables
Update the .env file with new credentials.

**File**: `.env`

---

## Important: Database Setup Required

Since you're connecting to a **new Supabase project**, the database tables and RLS policies we created earlier (profiles table, triggers, etc.) do **not exist** in this new project.

After switching to the new project, you will need to:

1. **Run the profiles table migration** - Create the user profiles table with RLS policies
2. **Set up the auth trigger** - Create the trigger that automatically creates a profile when a user signs up

I will help you run these SQL migrations after the configuration is updated.

---

## Technical Details

### Files to Modify

| File | Change |
|------|--------|
| `src/integrations/supabase/client.ts` | Update SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY |
| `supabase/config.toml` | Update project_id |
| `.env` | Update all three VITE_SUPABASE_* variables |

### New Configuration Values

```text
Project ID:      gemtiywsoudojqbjyalr
URL:             https://gemtiywsoudojqbjyalr.supabase.co
Publishable Key: sb_publishable_3JN0KkGb0yoF7YJdbD6qXA_oJlys0j1
```

