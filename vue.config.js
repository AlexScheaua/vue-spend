module.exports = {
    pwa: {
        themeColor: '#343a40',
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            navigateFallback: '/',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^http'),
                    handler: 'staleWhileRevalidate',
                    options: {
                        cacheName: 'vspend-cache',
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        }
    }
};