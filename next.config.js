// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    experimental: {
        outputFileTracingIncludes: {
            '/*': ['./content/**/*']
        }
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "@/styles/base/_variables.scss";` // prependData 옵션 추가
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};
