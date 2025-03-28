import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";  // Store'dan AppDispatch tipini al

// useAppDispatch, useDispatch'i AppDispatch tipiyle sarar.
export const useAppDispatch: () => AppDispatch = useDispatch;
