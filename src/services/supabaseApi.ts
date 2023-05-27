import 'react-native-url-polyfill/auto'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://clbjqccmawhunteqcojo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsYmpxY2NtYXdodW50ZXFjb2pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwMzY4OTUsImV4cCI6MjAwMDYxMjg5NX0.mXhYsiXAjjQtdcQf5o7cVh5pdOLhnKSGhchbc1lc9_4',
)
