import 'react-native-url-polyfill/auto'

import { ENV_SUPABASE_TOKEN, ENV_SUPABASE_URL } from '@env'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(ENV_SUPABASE_URL, ENV_SUPABASE_TOKEN)
