import { prisma } from '../../../db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não disponível' })
  }

  if (req.method === 'POST') {
    const { title, image, address, description } = req.body;
    const meetup = await prisma.meetup.create({
      data: { title, image, address, description },
    })
    res.json(meetup.id);
  }
}