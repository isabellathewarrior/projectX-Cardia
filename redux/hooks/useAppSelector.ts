import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../store";  // Store'dan RootState tipi

// useAppSelector, useSelector'u RootState tipiyle sarar.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
