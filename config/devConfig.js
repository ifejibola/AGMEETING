const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    jwtSecret: process.env.JWT_SECRET || "123Secret",
    stripe_connect_test_client_id: 'pk_test_51IFiczICzvX2SDBYrXj4LoYOkxLtH2yDUdRbD9K5nlUJgRYZQtoCG7EVtMArAgFgMT6ILX65nTcJyvpIgCPODlJL00cvV3KCvx',
    stripe_test_secret_key: 'sk_test_51IFiczICzvX2SDBYLSyfOLkUSPe8NXibMfkmW3tPa5Xtc9XVk2InfFwVtWyFOTH8Q4eAgiLXUugOkGFgRXKJvwYh00IUNOBKYF',
    stripe_test_api_key: 'pk_test_51IFiczICzvX2SDBYrXj4LoYOkxLtH2yDUdRbD9K5nlUJgRYZQtoCG7EVtMArAgFgMT6ILX65nTcJyvpIgCPODlJL00cvV3KCvx'
}

export default config
