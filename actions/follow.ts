"use server";

export const onFollow = async (id: string) => {
  try {
    console.log(" API CALL", id);
  } catch {
    throw new Error("Interal Error");
  }
};
