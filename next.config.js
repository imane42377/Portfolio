const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  async rewrites() {
    return [
      {
        source: '/:locale(en|fr)/meliane-imane-cv.pdf',
        destination: '/meliane-imane-cv.pdf',
      },
      {
        source: '/:locale(en|fr)/Mon-Rapport-Meliane.pdf',
        destination: '/Mon-Rapport-Meliane.pdf',
      },
      {
        source: '/:locale(en|fr)/Rapport_stage_MELIANE.pdf',
        destination: '/Rapport_stage_MELIANE.pdf',
      },
      {
        source: '/:locale(en|fr)/Rapport_gb.pdf',
        destination: '/Rapport_gb.pdf',
      },
      {
        source: '/:locale(en|fr)/PFE_Rapport.pdf',
        destination: '/PFE_Rapport.pdf',
      },
      {
        source: '/:locale(en|fr)/favicon.png',
        destination: '/favicon.png',
      }
    ];
  }
});
