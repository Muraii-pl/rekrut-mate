import bcrypt from 'bcrypt';

const salt = process.env.SALT;


const hashText = async (text: string): Promise<string> => {
  try {
    const saltRounds = parseInt(salt!);
    return await bcrypt.hash(text, saltRounds);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const isTextMatch = async (plainText: string, hashedText: string): Promise<boolean> => {
  return await bcrypt.compare(plainText, hashedText);
}

export {hashText, isTextMatch};
