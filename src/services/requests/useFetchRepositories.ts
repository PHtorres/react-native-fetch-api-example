import { Repository } from "../../types/Repository"
import { useFetch } from "./useFetch";

export const useFetchRepositories = (user:string) => {
    return useFetch<Repository[]>(`users/${user}/repos`);
}