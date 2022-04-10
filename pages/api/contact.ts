import { NextApiRequest, NextApiResponse } from 'next'
import invariant from 'tiny-invariant'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body

  if (!(name && email && message)) {
    return res.status(500).json({ msg: 'Internal Server Error' })
  }

  invariant(
    process.env.DISCORD_WEBHOOK_URL,
    'DISCORD_WEBHOOK_URL is not defined'
  )

  try {
    await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [
          {
            title: name,
            description: message,
            footer: {
              text: email,
            },
          },
        ],
      }),
    })
    return res.status(200).json({ msg: 'Success' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: 'Internal Server Error' })
  }
}
