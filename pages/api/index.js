export default async function handler(req, res) {
  return res.status(404).json({
    query:
      '/api/[blog, design, keyboard, minecraft, reading, minecraft, skyline]',
    endpoints: [
      {
        name: '/blog',
        desc: 'Get blog posts team',
      },
      {
        name: '/keyboard',
        desc: 'Get list of keyboards used by team members',
      },
      {
        name: '/useful',
        desc: 'Get list of bookmarked articles',
      },
    ],
  })
}
