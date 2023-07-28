import mongoose from 'mongoose';

export default async function mongoConnect() {
  try {
    const result = await mongoose.connect(process.env.DATABASE_URL);
    mongoose.set('bufferCommands', false);

    console.log('Mongoose connected to ', result.connections[0].host);
  } catch (err) {
    console.log('error connecting to the database', err);
  }
}
