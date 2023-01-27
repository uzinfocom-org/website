import blog from '@data/blog.json'
import keyboard from '@data/keyboards.json'
import useful from '@data/useful.json'

export default async function handler(req, res) {
  switch (req.query.type) {
    case 'keyboard':
      return res.status(200).json(keyboard)
    case 'useful':
      return res.status(200).json(useful)
    case 'blog':
      return res.status(200).json(blog)
    default:
      return res.status(404).json({ message: 'Unknown service' })
  }
}
