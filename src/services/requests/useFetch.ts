import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useGlobalAlert } from "../../hooks/useGlobalAlert";
import { apiGithub } from "../apiGithub";

export const useFetch = <T>(url: string, options?: AxiosRequestConfig) => {

    const [data, setData] = useState<T | undefined>(undefined);
    const [isFetching, setIsFethcing] = useState(true);
    const { showAlert } = useGlobalAlert();

    useEffect(() => {
        apiGithub.get<T>(url, options)
            .then(response => {
                setData(response.data);
                setIsFethcing(false);
            }).catch((error) => {
                setIsFethcing(false);
                showAlert({
                    title: 'Sorry, we had a problem:',
                    description: error.toString()
                })
            })
    }, []);


    return { data, isFetching };
}