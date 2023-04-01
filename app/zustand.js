import { create } from "zustand";
import { persist } from "zustand/middleware";

const zustand = create(
  persist(
    (set) => ({
      runExt: true,
      setRunExt: (val) => {
        set((state) => ({ runExt: val }));
      },
    }),
    {
      name: "kervion-storage",
    }
  )
);

export default zustand;
