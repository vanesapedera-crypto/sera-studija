-- Palaist vienreiz Supabase → SQL Editor
create table if not exists public.reviews (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 2 and 60),
  rating smallint not null check (rating between 1 and 5),
  procedure text,
  text text not null check (char_length(text) between 10 and 1000),
  created_at timestamptz not null default now()
);

-- Pārlūkam piekļuves nav; lapa lasa/raksta caur serveri ar service_role atslēgu.
alter table public.reviews enable row level security;

-- Serverim (service_role) vajadzīgās tiesības
grant select, insert, delete on public.reviews to service_role;
