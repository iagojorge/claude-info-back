# Claude Info Backend API

Backend serverless para plataforma Moises - Processamento de Pagamentos

## Endpoints

- `GET /api/health` - Health check
- `POST /api/payment/pix` - Criar pagamento PIX
- `POST /api/payment/card` - Criar pagamento Cartão
- `GET /api/payment/{id}` - Status do pagamento

## Deployment

Deploy automático na Vercel. Variáveis de ambiente necessárias:

```
MP_ACCESS_TOKEN=<seu-token-mercado-pago>
PRODUCT_PRICE=19.90
PRODUCT_NAME=Curso
```

## Estrutura

```
├── api/
│   ├── index.js           # Health check
│   ├── health.js          # Health check alternativo
│   └── payment/
│       ├── pix.js         # PIX payment handler
│       ├── card.js        # Card payment handler
│       └── [id].js        # Payment status handler
├── package.json
└── README.md
```
