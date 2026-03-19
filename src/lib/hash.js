import bcrypt from "bcryptjs";

// password hash করার জন্য (register time)
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

// password compare করার জন্য (login time)
export async function comparePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}