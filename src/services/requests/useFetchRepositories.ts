import { useState } from "react"
import { Repository } from "../../types/Repository"
import { useFetch } from "./useFetch";

export const useFetchRepositories = (user:string) => {
    const [repositories, setRepositories] = useState<Repository[] | undefined>([]);
    return useFetch<Repository[]>(`users/${user}/repos`);
}