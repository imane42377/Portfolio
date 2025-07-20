import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  // your config here
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
