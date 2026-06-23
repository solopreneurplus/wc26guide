const Stripe = require('stripe')
const fs = require('fs')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

async function setup() {
  const product = await stripe.products.create({
    name: 'WC26 Guide — Full Guide',
    description: 'One-time purchase for the complete 2026 FIFA World Cup fan guide.',
    metadata: { app: 'wc26guide', tier: 'full' },
  })
  console.log('✅ Product created:', product.id)

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: 899,
    currency: 'usd',
    nickname: 'Full Guide — One Time',
  })
  console.log('✅ Price created:', price.id)

  const output = `\n# Add to .env.local / deployment\nNEXT_PUBLIC_STRIPE_PRICE_ID=${price.id}\nSTRIPE_PRODUCT_ID=${product.id}\n`
  console.log(output)

  fs.writeFileSync('./stripe-setup.txt',
    `WC26 Guide Stripe Setup — ${new Date().toISOString()}\n` +
    `Product ID: ${product.id}\n` +
    `Price ID (One-Time): ${price.id}\n` +
    `Amount: $8.99 USD\n`
  )
  console.log('Saved to stripe-setup.txt')
}

setup().catch(err => console.error('Error:', err))