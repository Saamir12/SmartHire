import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../lib/axios";

export const fetchProblems = async () => {
  const res = await axiosInstance.get("/problems");
  return res.data;
};

export const fetchProblemById = async (id) => {
  const res = await axiosInstance.get(`/problems/${id}`);
  return res.data;
};

export function useProblems() {
  return useQuery({
    queryKey: ["problems"],
    queryFn: fetchProblems,
  });
}

export function useProblem(id) {
  return useQuery({
    queryKey: ["problem", id],
    queryFn: () => fetchProblemById(id),
    enabled: !!id,
  });
}
