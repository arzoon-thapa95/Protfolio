// /** @type {import('next').NextConfig} */
// const nextConfig = {};
export async function redirects() {
  return [
    {
      source: "/",
      destination: "/app/home",
      permanent: true,
    },
  ];
}

// export default nextConfig;
