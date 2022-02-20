import create from "zustand";
import { AlertProps } from "../components/Alert";

interface GlobalAlertProps {
    show: boolean;
    showAlert(props: AlertProps): void;
    hideAlert(): void;
    props: AlertProps
}

const initialAlertProps = { title: '', description: '' };

export const useGlobalAlert = create<GlobalAlertProps>(set => ({
    show: false,
    showAlert: (props) => {
        set(() => ({ show: true, props }))
    },
    hideAlert: () => {
        set(() => ({ show: false, props: initialAlertProps }))
    },
    props: initialAlertProps
}));