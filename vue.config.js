module.exports = {
    pwa: {
        themeColor: '#343a40',
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {
            navigateFallback: '/index.html',
            runtimeCaching: [
                {
                    urlPattern: new RegExp('^https://vspend.herokuapp.com'),
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