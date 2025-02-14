"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        toast.error("Error al obtener datos"); // Show error toast
    }, [error]);

    return (
        <div className="text-center">
            <h2 className="text-red-500">Ocurrió un error</h2>
            <button
                onClick={() => reset()} // Try to re-fetch data
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                Reintentar
            </button>
        </div>
    );
}
