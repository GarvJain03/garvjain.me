import { NextApiRequest, NextApiResponse } from 'next'
import invariant from 'tiny-invariant'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body

  if (!(name && email && message)) {
    return res.status(500).json({ msg: 'Internal Server Error' })
  }

  invariant(
    process.env.DISCORD_WEBHOOK_URL,
    'DISCORD_WEBHOOK_URL is not defined'
  )

  fetch(process.env.DISCORD_WEBHOOK_URL!, {
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
    .then(() => {
      res.status(200).json({ msg: 'Success' })
    })
    .catch(() => {
      res.status(500).json({ msg: 'Internal Server Error' })
    })
}
