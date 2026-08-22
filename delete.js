import { unlink } from "fs/promises";
try {
  await unlink("notes.txt");
  console.log("Deleted!");
} catch (err) {
  console.error("Failed to delete:", err);
}
